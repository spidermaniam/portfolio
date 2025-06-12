// supabase/functions/log-entry/index.ts
import { serve } from "https://deno.land/std@0.177.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",           // ← change to your domain if you’d like
  "Access-Control-Allow-Headers": "*",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

serve(async (req) => {
  /* ─────────────────────────────────────────────
     1. CORS PRE-FLIGHT
  ───────────────────────────────────────────── */
  if (req.method === "OPTIONS") {
    return new Response("ok", { status: 200, headers: corsHeaders });
  }

  /* ─────────────────────────────────────────────
     2.  ACTUAL POST HANDLER
  ───────────────────────────────────────────── */
  try {
    /* ---- parse incoming JSON ---- */
    const { user_agent, platform, touch_points } = await req.json();

    /* ---- IP & geolocation ---- */
    const ip =
      req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";

    let location = "Unknown";
    try {
      const geoRes = await fetch(
        `https://ipinfo.io/${ip}/json?token=583d4d06d4089f`,
      );
      if (geoRes.ok) {
        const geo = await geoRes.json();
        location = `${geo.city ?? "?"}, ${geo.country ?? "?"}`;
      }
    } catch {
      /* silently ignore geo failures */
    }

    /* ---- Supabase insert ---- */
    const supabase = createClient(
      Deno.env.get("SB_URL")!,
      Deno.env.get("SB_SERVICE_ROLE_KEY")!,
    );

    const { error } = await supabase.from("boot_entries").insert({
      timestamp   : new Date().toISOString(),
      user_agent,
      platform,
      touch_points,
      ip_address  : ip,
      location,
    });

    if (error) {
      return new Response(JSON.stringify({ error }), {
        status: 500,
        headers: corsHeaders,
      });
    }

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: corsHeaders,
    });

  } catch (err) {
    /* bad JSON or other runtime error */
    return new Response(JSON.stringify({
      error  : "Malformed request",
      message: err?.message ?? err,
    }), {
      status: 400,
      headers: corsHeaders,
    });
  }
});
