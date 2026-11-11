"use client";

import React, { useState } from "react";
import { companyData } from "@/data/company";
import { servicesData } from "@/data/services";
import { SectionHeader } from "@/components/common/SectionHeader";
import {
  Phone,
  Mail,
  Building2,
  Factory,
  MessageCircle,
  FileCheck,
  CheckCircle2,
  Clock,
  ShieldCheck,
  Copy,
  AlertCircle,
  ExternalLink,
} from "lucide-react";

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [inquiryMeta, setInquiryMeta] = useState<{ id?: string; timestamp?: string }>({});
  const [validationError, setValidationError] = useState<string | null>(null);
  const [sentStatus, setSentStatus] = useState<{
    channel: "whatsapp" | "gmail" | "mailto" | "copy";
    id: string;
    message: string;
  } | null>(null);

  const [formData, setFormData] = useState({
    name: "",
    company: "",
    phone: "",
    email: "",
    service: "MS Structures",
    location: "",
    message: "",
    honeypot: "", // Bot trap
  });

  const validateForm = () => {
    if (formData.honeypot) return false;
    if (!formData.name.trim() || !formData.phone.trim() || !formData.message.trim()) {
      setValidationError("Please fill in your Full Name, Phone / Mobile Number, and Project Scope details before sending.");
      return false;
    }
    setValidationError(null);
    return true;
  };

  const submitInquiry = async (channel: "whatsapp" | "gmail" | "mailto" | "copy") => {
    if (!validateForm()) return;

    setIsSubmitting(true);
    const assignedId = inquiryMeta.id || `INQ-${Date.now()}`;
    const assignedTime = inquiryMeta.timestamp || new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });

    // 1. Silent asynchronous logging to background API (.data/inquiries.json)
    try {
      fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, preferredChannel: channel }),
      })
        .then((res) => res.json())
        .then((result) => {
          if (result.success && result.inquiryId) {
            setInquiryMeta({ id: result.inquiryId, timestamp: result.timestamp });
          }
        })
        .catch((err) => console.error("Silent log warning:", err));
    } catch (e) {
      console.error("API call error:", e);
    } finally {
      setIsSubmitting(false);
    }

    const subject = `[RFQ ${assignedId}] ${formData.service} - ${formData.company || formData.name}`;
    const formattedBody =
      `Dear Mr. Murtaza,\n\n` +
      `Please find the project specifications submitted via uniqueengineers.com:\n\n` +
      `• Client Name: ${formData.name}\n` +
      `• Company / Org: ${formData.company || "Not specified"}\n` +
      `• Phone / Mobile: ${formData.phone}\n` +
      `• Email Address: ${formData.email || "Not specified"}\n` +
      `• Service Discipline: ${formData.service}\n` +
      `• Plant Site Location: ${formData.location || "Not specified"}\n\n` +
      `Project Scope / Tonnage / Schedule Details:\n` +
      `${formData.message}\n\n` +
      `Reference ID: ${assignedId}\n` +
      `Date & Time: ${assignedTime}\n\n` +
      `Best regards,\n${formData.name}`;

    // 2. Dispatch to the requested platform
    if (channel === "whatsapp") {
      const waText = encodeURIComponent(
        `*New Quotation Inquiry for UNIQUE ENGINEERS*\n` +
        `Ref: ${assignedId}\n` +
        `Name: ${formData.name}\n` +
        `Company: ${formData.company || "Not specified"}\n` +
        `Phone: ${formData.phone}\n` +
        `Email: ${formData.email || "Not specified"}\n` +
        `Service Discipline: ${formData.service}\n` +
        `Plant Site Location: ${formData.location || "Not specified"}\n\n` +
        `*Project Scope Details:*\n${formData.message}`
      );
      window.open(`https://wa.me/919920555852?text=${waText}`, "_blank");
      setSentStatus({
        channel: "whatsapp",
        id: assignedId,
        message: "WhatsApp opened in a new tab! Your RFQ details are preserved below — you can also send via Email.",
      });
    } else if (channel === "gmail") {
      const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=murtaza@uniqueengineers.com&su=${encodeURIComponent(
        subject
      )}&body=${encodeURIComponent(formattedBody)}`;
      window.open(gmailUrl, "_blank");
      setSentStatus({
        channel: "gmail",
        id: assignedId,
        message: "Gmail compose opened in a new tab! Your RFQ details are preserved below — you can also send via WhatsApp.",
      });
    } else if (channel === "mailto") {
      const mailtoUrl = `mailto:murtaza@uniqueengineers.com?subject=${encodeURIComponent(
        subject
      )}&body=${encodeURIComponent(formattedBody)}`;
      const link = document.createElement("a");
      link.href = mailtoUrl;
      link.click();
      setSentStatus({
        channel: "mailto",
        id: assignedId,
        message: "Default email app launched! Your RFQ details are preserved below — you can also send via WhatsApp.",
      });
    } else if (channel === "copy") {
      const clipboardText =
        `To: murtaza@uniqueengineers.com\n` +
        `Subject: ${subject}\n\n` +
        `${formattedBody}`;
      navigator.clipboard.writeText(clipboardText);
      setSentStatus({
        channel: "copy",
        id: assignedId,
        message: "RFQ scope and destination email copied to clipboard! You can paste it into any email client.",
      });
    }
  };

  return (
    <div className="py-12 sm:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <div className="border-b border-slate-200 pb-10">
          <SectionHeader
            badge="Get In Touch"
            title="Contact & Request a Quotation"
            subtitle="Connect with our business development and engineering team in Mumbai or visit our fabrication facility in Bhiwandi."
          />
        </div>

        {/* 1. Direct Contact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Business Development / Direct */}
          <div className="bg-brand-950 text-white rounded-2xl p-6 sm:p-8 shadow-xl border border-brand-800 space-y-4">
            <span className="text-xs font-bold text-amber-400 uppercase tracking-wider block">
              Business Inquiries
            </span>
            <div>
              <h3 className="text-2xl font-bold font-heading text-white">
                {companyData.keyContact.name}
              </h3>
              <p className="text-xs text-brand-300 font-semibold mt-0.5">
                {companyData.keyContact.designation}
              </p>
            </div>

            <div className="space-y-3 pt-2 text-xs text-slate-300">
              <div className="flex items-center space-x-2.5">
                <Phone className="w-4 h-4 text-brand-400 shrink-0" />
                <a
                  href={`tel:${companyData.keyContact.phone.replace(/[^0-9+]/g, "")}`}
                  className="font-bold text-white hover:text-amber-300 transition-colors"
                >
                  {companyData.keyContact.phone} (Direct / WhatsApp)
                </a>
              </div>
              <div className="flex items-center space-x-2.5">
                <Phone className="w-4 h-4 text-brand-400 shrink-0" />
                <a
                  href={`tel:${companyData.keyContact.alternatePhone.replace(/[^0-9+]/g, "")}`}
                  className="hover:text-white transition-colors"
                >
                  {companyData.keyContact.alternatePhone} (Alternate)
                </a>
              </div>
              <div className="flex items-center space-x-2.5">
                <Phone className="w-4 h-4 text-brand-400 shrink-0" />
                <a
                  href={`tel:${companyData.keyContact.officePhone.replace(/[^0-9+]/g, "")}`}
                  className="hover:text-white transition-colors"
                >
                  {companyData.keyContact.officePhone} (Office Landline)
                </a>
              </div>
              <div className="flex items-center space-x-2.5">
                <Mail className="w-4 h-4 text-brand-400 shrink-0" />
                <a
                  href={`mailto:${companyData.keyContact.email}`}
                  className="text-amber-300 hover:text-white font-semibold transition-colors"
                >
                  {companyData.keyContact.email}
                </a>
              </div>
            </div>

            <div className="pt-2">
              <a
                href={companyData.keyContact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-2.5 px-4 rounded-lg text-xs text-center inline-flex items-center justify-center space-x-2 transition-colors shadow"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chat Instantly on WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Registered Head Office */}
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8 space-y-4">
            <div className="flex items-center space-x-2 font-bold text-slate-900 text-base">
              <Building2 className="w-5 h-5 text-brand-600" />
              <span>Registered Head Office</span>
            </div>
            <p className="text-sm text-slate-700 leading-relaxed font-medium">
              {companyData.registeredOffice.fullAddress}
            </p>
            <div className="pt-2 text-xs text-slate-500 space-y-1">
              <p>
                <strong>Landmark:</strong> Opposite Jain Mandir, Near CST Station
              </p>
              <p>
                <strong>Working Hours:</strong> Mon – Sat: 9:30 AM – 6:30 PM
              </p>
              <p>
                <strong>General Email:</strong> {companyData.generalEmail}
              </p>
            </div>
          </div>

          {/* Works & Fabrication Facility */}
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8 space-y-4">
            <div className="flex items-center space-x-2 font-bold text-slate-900 text-base">
              <Factory className="w-5 h-5 text-amber-600" />
              <span>Works & Fabrication Plant</span>
            </div>
            <p className="text-sm text-slate-700 leading-relaxed font-medium">
              {companyData.worksAddress.fullAddress}
            </p>
            <div className="pt-2 text-xs text-slate-500 space-y-1">
              <p>
                <strong>Facility:</strong> Gala-106, Priya Complex, Zakat Naka
              </p>
              <p>
                <strong>Capability:</strong> Pre-fabrication, machinery staging & welding
              </p>
              <p>
                <strong>Location:</strong> Bhiwandi Industrial Corridor, Thane
              </p>
            </div>
          </div>
        </div>

        {/* 2. Interactive RFQ Form & Corporate Credentials (No Sensitive Banking Data) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left: RFQ Form (Inputs Retained & Zero Full-Page Replacement) */}
          <div className="lg:col-span-8 bg-white border border-slate-200 rounded-2xl p-8 sm:p-10 shadow-sm space-y-6">
            <div>
              <span className="text-xs font-bold text-brand-600 uppercase tracking-wider">
                Turnkey Tender / Project Inquiries
              </span>
              <h2 className="text-2xl font-bold font-heading text-slate-900 mt-1">
                Request an Engineering Quotation
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                Fill your project specifications below. You can send directly via <strong>WhatsApp</strong> or <strong>Email</strong> to Mr. Murtaza Tamboowala. Your inputs remain retained below if you wish to send via both platforms.
              </p>
            </div>

            {/* Validation Warning Alert */}
            {validationError && (
              <div className="bg-amber-50 border-l-4 border-amber-500 p-3.5 rounded-r-lg flex items-start space-x-3 text-xs text-amber-900">
                <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                <p className="font-semibold">{validationError}</p>
              </div>
            )}

            {/* Success Status Alert (Details Retained) */}
            {sentStatus && (
              <div className="bg-emerald-50 border border-emerald-300 rounded-xl p-4 flex items-start space-x-3 text-xs text-emerald-900 shadow-sm">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <p className="font-bold text-emerald-950">
                    Inquiry Logged Successfully!{" "}
                    <span className="font-mono text-[11px] bg-emerald-200/80 px-2 py-0.5 rounded text-emerald-900 font-semibold">
                      Ref: {sentStatus.id}
                    </span>
                  </p>
                  <p className="text-emerald-800 leading-relaxed font-medium">
                    {sentStatus.message}
                  </p>
                </div>
              </div>
            )}

            <form
              onSubmit={(e) => {
                e.preventDefault();
                submitInquiry("whatsapp");
              }}
              className="space-y-4 text-xs"
            >
              {/* Honeypot field for bot suppression */}
              <input
                type="text"
                name="user_verification_token"
                tabIndex={-1}
                autoComplete="off"
                value={formData.honeypot}
                onChange={(e) =>
                  setFormData({ ...formData, honeypot: e.target.value })
                }
                className="hidden"
              />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-semibold text-slate-700 mb-1">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Rajesh Sharma"
                    value={formData.name}
                    onChange={(e) => {
                      setFormData({ ...formData, name: e.target.value });
                      if (validationError) setValidationError(null);
                    }}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500"
                  />
                </div>
                <div>
                  <label className="block font-semibold text-slate-700 mb-1">
                    Company / Organization
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Mahindra / Tata Motors / Tier-1 Vendor"
                    value={formData.company}
                    onChange={(e) =>
                      setFormData({ ...formData, company: e.target.value })
                    }
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-semibold text-slate-700 mb-1">
                    Phone / Mobile Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => {
                      setFormData({ ...formData, phone: e.target.value });
                      if (validationError) setValidationError(null);
                    }}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500"
                  />
                </div>
                <div>
                  <label className="block font-semibold text-slate-700 mb-1">
                    Business Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="you@company.com"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-semibold text-slate-700 mb-1">
                    Primary Service Discipline
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) =>
                      setFormData({ ...formData, service: e.target.value })
                    }
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 bg-white"
                  >
                    {servicesData.map((s) => (
                      <option key={s.slug} value={s.title}>
                        {s.title}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block font-semibold text-slate-700 mb-1">
                    Plant Site Location (City / State)
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Pune, Chakan, Sanand, Chennai"
                    value={formData.location}
                    onChange={(e) =>
                      setFormData({ ...formData, location: e.target.value })
                    }
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500"
                  />
                </div>
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">
                  Project Scope, Tonnage or Schedule Details *
                </label>
                <textarea
                  rows={4}
                  required
                  placeholder="Describe equipment type, structural tonnages, conveyor lengths, target shutdown window, or tender timelines..."
                  value={formData.message}
                  onChange={(e) => {
                    setFormData({ ...formData, message: e.target.value });
                    if (validationError) setValidationError(null);
                  }}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500"
                />
              </div>

              {/* Direct Submission Options (WhatsApp + Email Options) */}
              <div className="pt-3 space-y-3">
                <div className="flex items-center justify-between">
                  <p className="text-xs font-bold text-slate-800">
                    Send RFQ Directly to Mr. Murtaza Tamboowala:
                  </p>
                  <span className="text-[11px] text-slate-400 font-medium">
                    (Details stay retained so you can send on both platforms)
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {/* Primary Option 1: WhatsApp */}
                  <button
                    type="button"
                    disabled={isSubmitting}
                    onClick={() => submitInquiry("whatsapp")}
                    className="w-full bg-emerald-600 hover:bg-emerald-500 disabled:bg-slate-400 text-white font-bold py-3.5 px-4 rounded-xl text-xs sm:text-sm shadow-md transition-all flex items-center justify-center space-x-2.5 text-center cursor-pointer hover:shadow-lg active:scale-[0.99]"
                  >
                    <MessageCircle className="w-5 h-5 shrink-0 text-white" />
                    <span className="text-left leading-tight">
                      <span className="block font-bold">Send via WhatsApp</span>
                      <span className="block text-[11px] font-normal text-emerald-100">
                        Direct to +91 99205 55852
                      </span>
                    </span>
                  </button>

                  {/* Primary Option 2: Email via Gmail (Instant Redirection in New Tab) */}
                  <button
                    type="button"
                    disabled={isSubmitting}
                    onClick={() => submitInquiry("gmail")}
                    className="w-full bg-[#1A3A6B] hover:bg-[#122d56] disabled:bg-slate-400 text-white font-bold py-3.5 px-4 rounded-xl text-xs sm:text-sm shadow-md transition-all flex items-center justify-center space-x-2.5 text-center cursor-pointer hover:shadow-lg active:scale-[0.99]"
                  >
                    <Mail className="w-5 h-5 shrink-0 text-amber-300" />
                    <span className="text-left leading-tight">
                      <span className="block font-bold">Send via Email (Gmail)</span>
                      <span className="block text-[11px] font-normal text-slate-300">
                        murtaza@uniqueengineers.com
                      </span>
                    </span>
                  </button>
                </div>

                {/* Alternative Email Options for Outlook / Copy */}
                <div className="bg-slate-50 border border-slate-200 rounded-lg p-3 flex flex-wrap items-center justify-between gap-2 text-xs text-slate-600">
                  <span className="font-semibold text-slate-700">
                    Prefer desktop Outlook or clipboard?
                  </span>
                  <div className="flex items-center space-x-3">
                    <button
                      type="button"
                      onClick={() => submitInquiry("mailto")}
                      className="font-bold text-brand-700 hover:text-brand-900 underline inline-flex items-center space-x-1 cursor-pointer"
                    >
                      <span>Launch Outlook / Default Mail</span>
                      <ExternalLink className="w-3 h-3" />
                    </button>
                    <span className="text-slate-300">|</span>
                    <button
                      type="button"
                      onClick={() => submitInquiry("copy")}
                      className="font-bold text-slate-700 hover:text-slate-900 underline inline-flex items-center space-x-1 cursor-pointer"
                    >
                      <Copy className="w-3 h-3" />
                      <span>Copy RFQ Details</span>
                    </button>
                  </div>
                </div>
              </div>

              <div className="pt-2 text-[11px] text-slate-400 text-center space-y-0.5">
                <p>
                  Technical drawings and scope documents are handled under strict NDA confidentiality.
                </p>
                <p>
                  Official Response Desk SLA: <strong>Within 24 business hours</strong>.
                </p>
              </div>
            </form>
          </div>

          {/* Right: Statutory Registrations & Turnkey Tender Desk (ZERO BANKING RISKS) */}
          <div className="lg:col-span-4 space-y-6">
            {/* Statutory Registrations Card */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 space-y-4">
              <h3 className="font-bold text-base text-slate-900 flex items-center space-x-2 font-heading">
                <FileCheck className="w-5 h-5 text-brand-600" />
                <span>Statutory Registrations</span>
              </h3>
              <p className="text-xs text-slate-500">
                Official credentials for vendor empanelment and GST tax invoicing:
              </p>

              <div className="space-y-2.5 text-xs">
                <div className="bg-white p-3.5 rounded-lg border border-slate-200">
                  <span className="text-slate-400 block font-medium">GST Identification:</span>
                  <span className="font-bold text-slate-900 text-sm mt-0.5 block font-mono">
                    {companyData.registrations.gst}
                  </span>
                </div>
                <div className="bg-white p-3.5 rounded-lg border border-slate-200">
                  <span className="text-slate-400 block font-medium">ESIC Code:</span>
                  <span className="font-bold text-slate-900 text-sm mt-0.5 block font-mono">
                    {companyData.registrations.esic}
                  </span>
                </div>
                <div className="bg-white p-3.5 rounded-lg border border-slate-200">
                  <span className="text-slate-400 block font-medium">Provident Fund (PF):</span>
                  <span className="font-bold text-slate-900 text-sm mt-0.5 block font-mono">
                    {companyData.registrations.pf}
                  </span>
                </div>
              </div>
            </div>

            {/* Turnkey Estimation Desk & NDA Protocol (Replaced sensitive banking details) */}
            <div className="bg-brand-950 text-white border border-brand-800 rounded-2xl p-6 space-y-4 shadow-lg">
              <h3 className="font-bold text-base text-white flex items-center space-x-2 font-heading">
                <ShieldCheck className="w-5 h-5 text-amber-400" />
                <span>Turnkey Tender Protocol</span>
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Direct commercial and technical escalation desk for turnkey contracting, paintshop tenders, and shutdown overhauls:
              </p>

              <div className="space-y-3 pt-1 text-xs text-slate-200">
                <div className="flex items-start space-x-2.5">
                  <Clock className="w-4 h-4 text-brand-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block">24-Hour Estimation SLA</strong>
                    <span className="text-slate-400 text-[11px]">
                      Preliminary technical budget and feasibility response within 24 business hours.
                    </span>
                  </div>
                </div>

                <div className="flex items-start space-x-2.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block">Strict Mutual NDA Protocol</strong>
                    <span className="text-slate-400 text-[11px]">
                      Tender designs, layout CAD drawings, and specifications treated with full confidentiality.
                    </span>
                  </div>
                </div>

                <div className="flex items-start space-x-2.5">
                  <Factory className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block">Rapid Site Mobilization</strong>
                    <span className="text-slate-400 text-[11px]">
                      200+ certified workforce & specialized rigging fleet ready for immediate deployment across India.
                    </span>
                  </div>
                </div>
              </div>

              <div className="pt-2 border-t border-brand-800 text-[11px] text-slate-400">
                Official remittances & bank particulars are shared strictly through official purchase order / invoicing channels.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
