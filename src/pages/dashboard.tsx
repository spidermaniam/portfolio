import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";


const Dashboard = () => {
  const [count, setCount] = useState<number | null>(null);
  const [entries, setEntries] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const { count } = await supabase
        .from("boot_entries")
        .select("*", { count: "exact", head: true });

      setCount(count ?? 0);

      const { data } = await supabase
        .from("boot_entries")
        .select("*")
        .order("created_at", { ascending: false })
        .limit(10);

      setEntries(data ?? []);
    };

    fetchData();
  }, []);

  return (
    <div className="p-6 text-white bg-black min-h-screen font-mono">
      <h1 className="text-xl mb-4">Boot Log Dashboard</h1>
      <p className="mb-4">📈 Total Boot Entries: <strong>{count ?? "-"}</strong></p>
      <h2 className="text-lg mb-2">🧾 Recent Entries:</h2>
      <ul className="space-y-2 text-sm">
        {entries.map((entry) => (
          <li key={entry.id} className="border-b border-gray-700 pb-1">
            <p>🕒 {new Date(entry.timestamp).toLocaleString()}</p>
            <p>🌍 {entry.location ?? "Unknown"}</p>
            <p>🔢 {entry.ip_address ?? "—"}</p>
            <p>📱 {entry.user_agent?.slice(0, 80)}...</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;
