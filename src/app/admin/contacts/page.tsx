"use client";

import { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { createClient } from "@/lib/supabase";
import { formatDate } from "@/lib/utils";
import { Mail, Eye, Trash2, RefreshCw } from "lucide-react";

type ContactStatus = "new" | "read" | "replied";

export default function AdminContactsPage() {
  const [contacts, setContacts] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [filter, setFilter] = useState<"all" | ContactStatus>("all");

  const loadContacts = async () => {
    setIsLoading(true);
    const supabase = createClient();
    let query = supabase.from("contacts").select("*").order("created_at", { ascending: false });
    if (filter !== "all") {
      query = query.eq("status", filter);
    }
    const { data } = await query;
    setContacts(data || []);
    setIsLoading(false);
  };

  useEffect(() => {
    loadContacts();
  }, [filter]);

  const updateStatus = async (id: string, status: ContactStatus) => {
    const supabase = createClient();
    await supabase.from("contacts").update({ status }).eq("id", id);
    loadContacts();
  };

  const deleteContact = async (id: string) => {
    if (!confirm("Are you sure you want to delete this contact?")) return;
    const supabase = createClient();
    await supabase.from("contacts").delete().eq("id", id);
    loadContacts();
  };

  const getStatusBadge = (status: ContactStatus) => {
    const variants: Record<ContactStatus, "default" | "secondary" | "success"> = {
      new: "default",
      read: "secondary",
      replied: "success",
    };
    return <Badge variant={variants[status]}>{status}</Badge>;
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-white mb-1">Contact Submissions</h2>
          <p className="text-white/60">Manage and respond to contact form submissions.</p>
        </div>
        <Button variant="outline" size="sm" onClick={loadContacts}>
          <RefreshCw className="w-4 h-4 mr-2" />
          Refresh
        </Button>
      </div>

      <div className="flex gap-2">
        {(["all", "new", "read", "replied"] as const).map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              filter === f
                ? "bg-core-accent/10 text-core-accent border border-core-accent/20"
                : "text-white/60 hover:text-white hover:bg-white/5"
            }`}
          >
            {f.charAt(0).toUpperCase() + f.slice(1)}
          </button>
        ))}
      </div>

      {isLoading ? (
        <div className="flex items-center justify-center h-64">
          <div className="w-8 h-8 border-2 border-core-accent border-t-transparent rounded-full animate-spin" />
        </div>
      ) : contacts.length === 0 ? (
        <div className="text-center py-16">
          <Mail className="w-12 h-12 text-white/20 mx-auto mb-4" />
          <p className="text-white/40">No contacts found.</p>
        </div>
      ) : (
        <div className="rounded-xl border border-white/10 overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Subject</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {contacts.map((contact) => (
                <TableRow key={contact.id}>
                  <TableCell className="font-medium text-white">
                    {contact.first_name} {contact.last_name}
                  </TableCell>
                  <TableCell className="text-white/60">{contact.email}</TableCell>
                  <TableCell className="text-white/60">{contact.subject}</TableCell>
                  <TableCell className="text-white/60">
                    {formatDate(contact.created_at)}
                  </TableCell>
                  <TableCell>{getStatusBadge(contact.status)}</TableCell>
                  <TableCell className="text-right">
                    <div className="flex items-center justify-end gap-2">
                      {contact.status === "new" && (
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => updateStatus(contact.id, "read")}
                          title="Mark as read"
                        >
                          <Eye className="w-4 h-4 text-white/60" />
                        </Button>
                      )}
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => deleteContact(contact.id)}
                        title="Delete"
                      >
                        <Trash2 className="w-4 h-4 text-red-400" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      )}
    </div>
  );
}
