
import { serve } from "https://deno.land/std@0.177.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  try {
    const { user_agent, platform, touch_points, email_or_alias, message } = await req.json();

    const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";

    let location = "Unknown";
    try {
      if (ip !== 'unknown' && ip !== '127.0.0.1') {
        const geoRes = await fetch(
          `https://ipinfo.io/${ip}/json?token=583d4d06d4089f`,
        );
        if (geoRes.ok) {
          const geo = await geoRes.json();
          location = `${geo.city ?? "?"}, ${geo.country ?? "?"}`;
        }
      }
    } catch {
      // silently ignore geo failures
    }

    const supabase = createClient(
      Deno.env.get("SB_URL")!,
      Deno.env.get("SB_SERVICE_ROLE_KEY")!,
    );

    const { error } = await supabase.from("boot_entries").insert({
      timestamp: new Date().toISOString(),
      user_agent,
      platform,
      touch_points,
      ip_address: ip,
      location,
      email_or_alias,
      message,
    });

    if (error) {
      console.error('Supabase error:', error);
      return new Response(JSON.stringify({ error: error.message }), {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });

  } catch (err) {
    console.error('Function error:', err);
    return new Response(JSON.stringify({
      error: "Malformed request",
      message: err?.message ?? String(err),
    }), {
      status: 400,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
