
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const Dashboard = () => {
  const [bootCount, setBootCount] = useState<number | null>(null);
  const [entries, setEntries] = useState<any[]>([]);
  const [leads, setLeads] = useState<any[]>([]);
  const [leadsCount, setLeadsCount] = useState<number | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      // Fetch boot entries
      const { count: fetchedBootCount } = await supabase
        .from("boot_entries")
        .select("*", { count: "exact", head: true });
      setBootCount(fetchedBootCount ?? 0);

      const { data: entriesData } = await supabase
        .from("boot_entries")
        .select("*")
        .order("created_at", { ascending: false })
        .limit(10);
      setEntries(entriesData ?? []);

      // Fetch leads
      const { count: fetchedLeadsCount } = await supabase
        .from("leads")
        .select("*", { count: "exact", head: true });
      setLeadsCount(fetchedLeadsCount ?? 0);

      const { data: leadsData } = await supabase
        .from("leads")
        .select("*")
        .order("created_at", { ascending: false })
        .limit(10);
      setLeads(leadsData ?? []);
    };

    fetchData();
  }, []);

  return (
    <div className="p-4 sm:p-6 md:p-8 text-white bg-black min-h-screen font-mono">
      <h1 className="text-2xl sm:text-3xl font-bold mb-6">Dashboard</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
        <div className="bg-gray-900 p-4 rounded-lg border border-gray-700">
          <h2 className="text-base sm:text-lg mb-2 text-gray-400">📈 Total Boot Entries</h2>
          <p className="text-3xl sm:text-4xl font-bold">{bootCount ?? "-"}</p>
        </div>
        <div className="bg-gray-900 p-4 rounded-lg border border-gray-700">
          <h2 className="text-base sm:text-lg mb-2 text-gray-400">💌 Total Leads Captured</h2>
          <p className="text-3xl sm:text-4xl font-bold">{leadsCount ?? "-"}</p>
        </div>
      </div>

      <div className="space-y-8">
        <div>
          <h2 className="text-xl font-semibold mb-4">🧾 Recent Boot Entries</h2>
          <div className="rounded-lg border border-gray-700 overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow className="hover:bg-gray-800/50 border-b-gray-700">
                  <TableHead className="text-white">Timestamp</TableHead>
                  <TableHead className="text-white">Location</TableHead>
                  <TableHead className="text-white hidden md:table-cell">IP Address</TableHead>
                  <TableHead className="text-white hidden lg:table-cell">User Agent</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {entries.map((entry) => (
                  <TableRow key={entry.id} className="hover:bg-gray-800/50 border-b-0">
                    <TableCell>{new Date(entry.timestamp).toLocaleString()}</TableCell>
                    <TableCell>{entry.location ?? "Unknown"}</TableCell>
                    <TableCell className="hidden md:table-cell">{entry.ip_address ?? "—"}</TableCell>
                    <TableCell className="hidden lg:table-cell max-w-xs truncate">{entry.user_agent}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4">📬 Recent Leads</h2>
          <div className="rounded-lg border border-gray-700 overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow className="hover:bg-gray-800/50 border-b-gray-700">
                  <TableHead className="text-white">Timestamp</TableHead>
                  <TableHead className="text-white">Contact Info</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {leads.map((lead) => (
                  <TableRow key={lead.id} className="hover:bg-gray-800/50 border-b-0">
                    <TableCell>{new Date(lead.created_at).toLocaleString()}</TableCell>
                    <TableCell>{lead.contact_info}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
