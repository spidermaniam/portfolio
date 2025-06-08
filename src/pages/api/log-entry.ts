// pages/api/log-entry.ts
import { supabase } from "@/lib/supabaseClient";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).end();
  }

  const timestamp = req.body.timestamp ?? Date.now();
  const user_agent = req.headers["user-agent"];
  const ip =
    req.headers["x-forwarded-for"]?.toString().split(",")[0] || req.socket.remoteAddress;

  let location = "Unknown";

  try {
    const locRes = await fetch(`https://ipinfo.io/${ip}/json`);
    if (locRes.ok) {
      const data = await locRes.json();
      location = `${data.city}, ${data.region}, ${data.country}`;
    }
  } catch (e) {
    console.error("Geolocation fetch failed:", e);
  }

  const { error } = await supabase.from("boot_entries").insert({
    timestamp,
    user_agent,
    ip_address: ip,
    location,
  });

  if (error) {
    console.error("Supabase insert error:", error);
    return res.status(500).json({ error: "Failed to log entry." });
  }

  return res.status(200).json({ success: true });
}
