"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { createClient } from "@/lib/supabase";

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const supabase = createClient();
    await supabase.from("contacts").insert({
      first_name: formData.firstName,
      last_name: formData.lastName,
      email: formData.email,
      subject: formData.subject,
      message: formData.message,
    });

    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ firstName: "", lastName: "", email: "", subject: "", message: "" });
  };

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center justify-center py-12 text-center"
      >
        <CheckCircle className="w-16 h-16 text-emerald-500 mb-4" />
        <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
        <p className="text-white/60 mb-6">We&apos;ll get back to you as soon as possible.</p>
        <Button variant="outline" onClick={() => setIsSubmitted(false)}>
          Send Another Message
        </Button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="text-sm font-medium text-white/80 mb-2 block">First Name</label>
          <Input
            required
            value={formData.firstName}
            onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
            placeholder="John"
          />
        </div>
        <div>
          <label className="text-sm font-medium text-white/80 mb-2 block">Last Name</label>
          <Input
            required
            value={formData.lastName}
            onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
            placeholder="Doe"
          />
        </div>
      </div>
      <div>
        <label className="text-sm font-medium text-white/80 mb-2 block">Email</label>
        <Input
          required
          type="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          placeholder="john@example.com"
        />
      </div>
      <div>
        <label className="text-sm font-medium text-white/80 mb-2 block">Subject</label>
        <Input
          required
          value={formData.subject}
          onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
          placeholder="Project Inquiry"
        />
      </div>
      <div>
        <label className="text-sm font-medium text-white/80 mb-2 block">Message</label>
        <Textarea
          required
          rows={5}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          placeholder="Tell us about your project..."
        />
      </div>
      <Button type="submit" className="w-full" disabled={isSubmitting}>
        <Send className="w-4 h-4 mr-2" />
        {isSubmitting ? "Sending..." : "Send Message"}
      </Button>
    </form>
  );
}
