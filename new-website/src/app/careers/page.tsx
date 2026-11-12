"use client";

import React, { useState } from "react";
import { companyData, whatsappNumber } from "@/data/company";
import { SectionHeader } from "@/components/common/SectionHeader";
import {
  Users,
  ShieldCheck,
  CheckCircle2,
  Mail,
  MessageCircle,
  GraduationCap,
  Copy,
  ExternalLink,
  AlertCircle,
  Paperclip,
} from "lucide-react";

export default function CareersPage() {
  const [sentStatus, setSentStatus] = useState<{
    channel: "whatsapp" | "gmail" | "mailto" | "copy";
    message: string;
  } | null>(null);
  const [validationError, setValidationError] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    position: "Site Supervisor",
    experience: "3-5 years",
    notes: "",
  });

  const positions = [
    {
      title: "Site Installation Manager (Turnkey Paint Shop)",
      department: "Project Execution",
      location: "Multi-Site (India)",
      experience: "7+ Years",
      description:
        "Lead on-site mechanical erection of automotive paint shops, coordinate heavy crane rigging, manage site schedules, and liaison with OEM project heads.",
    },
    {
      title: "Certified Welder (Arc / TIG / MIG)",
      department: "Fabrication & Welding",
      location: "Bhiwandi Works & Site Deployment",
      experience: "3+ Years (Certified)",
      description:
        "Tested & certified welders for high-pressure process piping, SS paint circulation loops, and heavy mild steel structural headers.",
    },
    {
      title: "Conveyor System Mechanical Fitter",
      department: "Material Handling",
      location: "Automotive Plant Sites",
      experience: "3+ Years",
      description:
        "Installation, leveling, and mechanical testing of Power & Free conveyors, floor skids, drop sections, and multi-drive tensioners.",
    },
    {
      title: "Certified Site Safety Officer (EHS)",
      department: "Environment, Health & Safety",
      location: "Project Sites",
      experience: "3+ Years (Diploma / Degree in Safety)",
      description:
        "Daily toolbox briefings, PPE enforcement, height safety protocols, hot-work permits, and ensuring our 100% Zero Casualty standard.",
    },
    {
      title: "Heavy Rigging Foreman",
      department: "Rigging & Crane Lifting",
      location: "Project Sites",
      experience: "5+ Years",
      description:
        "Lead high-altitude structural and equipment lifting using heavy mobile cranes, chain pulley blocks up to 5T, and tandem crane rigging.",
    },
  ];

  const validateForm = () => {
    if (!formData.name.trim() || !formData.phone.trim()) {
      setValidationError("Please enter your Full Name and Contact Phone Number.");
      return false;
    }
    setValidationError(null);
    return true;
  };

  const submitApplication = (channel: "whatsapp" | "gmail" | "mailto" | "copy") => {
    if (!validateForm()) return;

    const refId = `APP-${Date.now()}`;
    const subject = `[Job Application] ${formData.position} - ${formData.name} (${formData.experience}) [CV Attached]`;
    const formattedBody =
      `Dear UNIQUE ENGINEERS Recruitment Team & Mr. Murtaza,\n\n` +
      `Please accept my application for the following position:\n\n` +
      `• Applicant Name: ${formData.name}\n` +
      `• Position Applied For: ${formData.position}\n` +
      `• Experience Level: ${formData.experience}\n` +
      `• Contact Phone / Mobile: ${formData.phone}\n` +
      `• Email Address: ${formData.email || "Not specified"}\n\n` +
      `Qualifications & Trade Experience Summary:\n` +
      `${formData.notes || "Not specified (ready to share detailed credentials upon interview)."}\n\n` +
      `--------------------------------------------------\n` +
      `📎 CV / RESUME ATTACHMENT:\n` +
      `I have manually attached my CV / Resume document (PDF / Word) to this message.\n` +
      `--------------------------------------------------\n\n` +
      `Reference ID: ${refId}\n` +
      `Date: ${new Date().toLocaleDateString("en-IN", { timeZone: "Asia/Kolkata" })}\n\n` +
      `Best regards,\n${formData.name}`;

    if (channel === "whatsapp") {
      const waText = encodeURIComponent(
        `*Job Application - UNIQUE ENGINEERS*\n` +
        `Ref: ${refId}\n\n` +
        `• *Candidate Name:* ${formData.name}\n` +
        `• *Position Applied For:* ${formData.position}\n` +
        `• *Experience Level:* ${formData.experience}\n` +
        `• *Phone / Mobile:* ${formData.phone}\n` +
        `• *Email:* ${formData.email || "N/A"}\n\n` +
        `*Qualifications & Experience Summary:*\n${formData.notes || "Ready to discuss credentials."}\n\n` +
        `📎 *CV Attachment:* I am attaching my CV / Resume file directly to this WhatsApp chat.`
      );
      window.open(`https://wa.me/${whatsappNumber}?text=${waText}`, "_blank");
      setSentStatus({
        channel: "whatsapp",
        message: "WhatsApp opened with your application pre-filled! Please attach your CV / Resume document directly in the chat before pressing Send.",
      });
    } else if (channel === "gmail") {
      const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${companyData.keyContact.email}&su=${encodeURIComponent(
        subject
      )}&body=${encodeURIComponent(formattedBody)}`;
      window.open(gmailUrl, "_blank");
      setSentStatus({
        channel: "gmail",
        message: "Gmail compose opened in a new tab! Click the paperclip icon (📎) to attach your CV / Resume before clicking Send.",
      });
    } else if (channel === "mailto") {
      const mailtoUrl = `mailto:${companyData.keyContact.email}?subject=${encodeURIComponent(
        subject
      )}&body=${encodeURIComponent(formattedBody)}`;
      const link = document.createElement("a");
      link.href = mailtoUrl;
      link.click();
      setSentStatus({
        channel: "mailto",
        message: "Default mail client launched with application pre-filled! Please remember to attach your CV / Resume file before sending.",
      });
    } else if (channel === "copy") {
      const copyContent = `To: ${companyData.keyContact.email}\nSubject: ${subject}\n\n${formattedBody}`;
      navigator.clipboard.writeText(copyContent);
      setSentStatus({
        channel: "copy",
        message: "Application message and recruitment email copied to clipboard! Paste it into your messaging or email app and attach your CV.",
      });
    }
  };

  return (
    <div className="py-12 sm:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <div className="border-b border-slate-200 pb-10">
          <SectionHeader
            badge="Join Our 200+ Workforce"
            title="Careers at UNIQUE ENGINEERS"
            subtitle="Build a high-impact career executing mission-critical paint finishing, conveyor systems, and industrial infrastructure for India's leading automotive OEMs."
          />
        </div>

        {/* Culture & Benefits Strip */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 space-y-2">
            <div className="w-10 h-10 rounded-lg bg-brand-100 text-brand-700 flex items-center justify-center mb-3">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-base text-slate-900 font-heading">
              100% Statutory Compliance
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Every member of our 200+ workforce is legally complied and covered under
              Provident Fund (PF) and ESIC health insurance from day one.
            </p>
          </div>

          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 space-y-2">
            <div className="w-10 h-10 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center mb-3">
              <Users className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-base text-slate-900 font-heading">
              Zero Casualty Safety Record
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Uncompromising site safety. Zero casualties since 1999 means you work
              with tested fall-arrest gear, mandatory PPE, and full-time safety officers.
            </p>
          </div>

          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 space-y-2">
            <div className="w-10 h-10 rounded-lg bg-amber-100 text-amber-700 flex items-center justify-center mb-3">
              <GraduationCap className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-base text-slate-900 font-heading">
              Skill Development & Growth
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Hands-on training alongside seasoned engineers on global OEM systems from
              Eisenmann, Dürr, and ABB Robotics.
            </p>
          </div>
        </div>

        {/* 2-Column: Open Roles & Application Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left: Open Roles */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="text-2xl font-bold font-heading text-slate-900 border-l-4 border-brand-600 pl-3">
              Current Open Positions
            </h3>

            <div className="space-y-4">
              {positions.map((job) => (
                <div
                  key={job.title}
                  className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm hover:border-brand-500 transition-all space-y-2"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <h4 className="font-bold text-base text-slate-900 font-heading">
                      {job.title}
                    </h4>
                    <span className="text-xs font-semibold text-brand-600 bg-brand-50 px-2.5 py-0.5 rounded shrink-0">
                      {job.experience}
                    </span>
                  </div>
                  <div className="flex items-center space-x-3 text-xs text-slate-400">
                    <span>{job.department}</span>
                    <span>•</span>
                    <span>{job.location}</span>
                  </div>
                  <p className="text-xs text-slate-600 pt-1 leading-relaxed">
                    {job.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Application Form (Data Retained) */}
          <div className="lg:col-span-5">
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8 sticky top-28 shadow-sm space-y-5">
              <div>
                <span className="text-xs font-bold text-brand-600 uppercase tracking-wider">
                  Apply Now
                </span>
                <h3 className="text-xl font-bold font-heading text-slate-900 mt-1">
                  Submit Candidate Application
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Submit your details directly to Mr. Murtaza Tamboowala via <strong>WhatsApp</strong> or <strong>Email</strong>.
                </p>
              </div>

              {validationError && (
                <div className="bg-amber-50 border-l-4 border-amber-500 p-3 rounded-r-lg flex items-start space-x-2.5 text-xs text-amber-900">
                  <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                  <p className="font-semibold">{validationError}</p>
                </div>
              )}

              {sentStatus && (
                <div className="bg-emerald-50 border border-emerald-300 rounded-xl p-3.5 flex items-start space-x-2.5 text-xs text-emerald-900 shadow-sm">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <p className="font-semibold leading-relaxed">
                    {sentStatus.message}
                  </p>
                </div>
              )}

              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  submitApplication("whatsapp");
                }}
                className="space-y-4 text-xs"
              >
                <div>
                  <label htmlFor="career-name" className="block font-semibold text-slate-700 mb-1">
                    Full Name *
                  </label>
                  <input
                    id="career-name"
                    autoComplete="name"
                    type="text"
                    required
                    placeholder="e.g. Ramesh Kumar"
                    value={formData.name}
                    onChange={(e) => {
                      setFormData({ ...formData, name: e.target.value });
                      if (validationError) setValidationError(null);
                    }}
                    className="w-full px-3 py-2.5 rounded-lg border border-slate-300 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label htmlFor="career-phone" className="block font-semibold text-slate-700 mb-1">
                      Phone / WhatsApp *
                    </label>
                    <input
                      id="career-phone"
                      autoComplete="tel"
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => {
                        setFormData({ ...formData, phone: e.target.value });
                        if (validationError) setValidationError(null);
                      }}
                      className="w-full px-3 py-2.5 rounded-lg border border-slate-300 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="career-email" className="block font-semibold text-slate-700 mb-1">
                      Email Address
                    </label>
                    <input
                      id="career-email"
                      autoComplete="email"
                      type="email"
                      placeholder="you@example.com"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full px-3 py-2.5 rounded-lg border border-slate-300 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label htmlFor="career-position" className="block font-semibold text-slate-700 mb-1">
                      Applying For
                    </label>
                    <select
                      id="career-position"
                      value={formData.position}
                      onChange={(e) =>
                        setFormData({ ...formData, position: e.target.value })
                      }
                      className="w-full px-3 py-2.5 rounded-lg border border-slate-300 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 bg-white"
                    >
                      <option>Site Installation Manager</option>
                      <option>Site Supervisor</option>
                      <option>Certified Arc Welder</option>
                      <option>Certified TIG Welder</option>
                      <option>Certified MIG Welder</option>
                      <option>Mechanical Fitter</option>
                      <option>Piping Fitter</option>
                      <option>Rigging Lead</option>
                      <option>Safety Officer</option>
                      <option>Helper / General Site</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="career-experience" className="block font-semibold text-slate-700 mb-1">
                      Experience Level
                    </label>
                    <select
                      id="career-experience"
                      value={formData.experience}
                      onChange={(e) =>
                        setFormData({ ...formData, experience: e.target.value })
                      }
                      className="w-full px-3 py-2.5 rounded-lg border border-slate-300 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 bg-white"
                    >
                      <option>1–3 Years</option>
                      <option>3–5 Years</option>
                      <option>5–10 Years</option>
                      <option>10+ Years</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="career-notes" className="block font-semibold text-slate-700 mb-1">
                    Qualifications & Trade Certifications
                  </label>
                  <textarea
                    id="career-notes"
                    rows={3}
                    placeholder="State your welding certifications, previous OEM sites, or technical trade details..."
                    value={formData.notes}
                    onChange={(e) =>
                      setFormData({ ...formData, notes: e.target.value })
                    }
                    className="w-full px-3 py-2 rounded-lg border border-slate-300 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500"
                  />
                </div>

                {/* Static Hosting CV / Resume Attachment Instructions */}
                <div className="bg-amber-50/90 border border-amber-200/90 rounded-xl p-3 text-xs text-amber-950 space-y-1">
                  <div className="flex items-center space-x-1.5 font-bold text-amber-900">
                    <Paperclip className="w-3.5 h-3.5 text-amber-700 shrink-0" />
                    <span>How to Attach Your CV / Resume:</span>
                  </div>
                  <p className="text-[11px] text-amber-900/85 leading-relaxed">
                    When you click <strong>Apply via WhatsApp</strong> or <strong>Apply via Gmail</strong>, your application details will be pre-filled automatically. Please <strong>attach your CV / Resume document (PDF or Word)</strong> manually in the chat or email before pressing send.
                  </p>
                </div>

                <div className="pt-2 space-y-2.5">
                  <p className="text-xs font-bold text-slate-800">
                    Send Application Directly:
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    <button
                      type="button"
                      onClick={() => submitApplication("whatsapp")}
                      className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-2.5 px-3 rounded-lg text-xs shadow transition-all flex items-center justify-center space-x-1.5 cursor-pointer"
                    >
                      <MessageCircle className="w-4 h-4 shrink-0" />
                      <span>Apply via WhatsApp</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => submitApplication("gmail")}
                      className="w-full bg-[#1A3A6B] hover:bg-[#122d56] text-white font-bold py-2.5 px-3 rounded-lg text-xs shadow transition-all flex items-center justify-center space-x-1.5 cursor-pointer"
                    >
                      <Mail className="w-4 h-4 shrink-0 text-amber-300" />
                      <span>Apply via Gmail</span>
                    </button>
                  </div>

                  <div className="flex items-center justify-between text-[11px] text-slate-500 pt-1">
                    <button
                      type="button"
                      onClick={() => submitApplication("mailto")}
                      className="hover:text-slate-800 underline inline-flex items-center space-x-1"
                    >
                      <span>Launch Mail Client</span>
                      <ExternalLink className="w-2.5 h-2.5" />
                    </button>
                    <span>•</span>
                    <button
                      type="button"
                      onClick={() => submitApplication("copy")}
                      className="hover:text-slate-800 underline inline-flex items-center space-x-1"
                    >
                      <Copy className="w-2.5 h-2.5" />
                      <span>Copy Application Text</span>
                    </button>
                  </div>
                </div>

                <p className="text-[11px] text-slate-400 text-center pt-1">
                  100% PF & ESIC statutory compliance. Immediate site deployment upon interview.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
