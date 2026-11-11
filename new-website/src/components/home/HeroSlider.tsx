import React from "react";
import Link from "next/link";
import Image from "next/image";
import { companyData } from "@/data/company";
import {
  ArrowRight,
  PhoneCall,
  ShieldCheck,
  Award,
  Factory,
  Users,
  CheckCircle2,
  FileText,
} from "lucide-react";

export function HeroSlider() {
  return (
    <div className="relative bg-[#081528] text-white overflow-hidden border-b border-slate-800">
      {/* Real Industrial Shop-Floor Photography Background with Deep Navy Scrim */}
      <div className="absolute inset-0 opacity-25 pointer-events-none">
        <Image
          src="/images/services/bottom_conveyor/4.png"
          alt="Automotive Paint Finishing Plant Installation"
          fill
          priority
          className="object-cover object-center filter saturate-50"
        />
      </div>

      {/* Subtle Technical Grid / Hatching */}
      <div
        className="absolute inset-0 opacity-[0.06] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Hero Container — Compact vertical padding to fit 100% above the fold */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">

          {/* Left Column (7 cols): Formal Industrial Engineering Headline & CTAs */}
          <div className="lg:col-span-7 space-y-3.5 sm:space-y-4">
            
            {/* Accreditation Badge */}
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded bg-[#1A3A6B]/80 border border-amber-400/30 text-amber-300 text-[11px] sm:text-xs font-bold uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
              <span>EST. 1999 · 25+ Years of Turnkey Industrial Execution</span>
            </div>

            {/* Headline — Exactly 2 lines on desktop, impactful and formal */}
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white leading-tight font-heading">
              Turnkey Installation &amp; Fabrication for{" "}
              <span className="text-amber-400">Automotive Paint Finishing</span> &amp; Plants
            </h1>

            {/* Subtitle — Authoritative, concise */}
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-2xl">
              Operating continuously since 1999. Trusted mechanical sub-contractor to global EPC leaders —{" "}
              <strong className="text-white">Eisenmann, Dürr, TEIL, Taikisha, Bullows &amp; GEICO</strong> —
              delivering complex paint shops, heavy conveyors, and steel structures with a{" "}
              <span className="text-emerald-400 font-bold">100% Zero Casualty Record</span>.
            </p>

            {/* Key Engineering Deliverables */}
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-slate-300 pt-0.5">
              <span className="inline-flex items-center space-x-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span><strong className="text-white">75+</strong> Paintshops Built</span>
              </span>
              <span className="inline-flex items-center space-x-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span><strong className="text-white">2000m+</strong> Conveyor Lines</span>
              </span>
            </div>

            {/* Call-to-Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <Link
                href="/services"
                className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold px-5 py-2.5 rounded text-xs sm:text-sm shadow-md transition-all inline-flex items-center space-x-2"
              >
                <span>Explore 24 Disciplines</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                href="/contact"
                className="bg-white/10 hover:bg-white/20 border border-slate-400/40 text-white font-semibold px-4 py-2.5 rounded text-xs sm:text-sm transition-all inline-flex items-center space-x-2"
              >
                <PhoneCall className="w-3.5 h-3.5 text-amber-400" />
                <span>Request Quotation</span>
              </Link>
            </div>

          </div>

          {/* Right Column (5 cols): 4 Core Industrial Credentials — 2x2 Matrix Visible Above Fold */}
          <div className="lg:col-span-5">
            <div className="bg-[#0f2444]/90 border border-[#1e3a66] rounded-xl p-4 sm:p-5 shadow-2xl backdrop-blur-sm">
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-700/60">
                <div className="flex items-center space-x-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-200">
                    Contractor Credentials
                  </span>
                </div>
                <span className="text-[10px] bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 px-2 py-0.5 rounded font-semibold">
                  EHS Certified
                </span>
              </div>

              {/* 2x2 Stats Grid — Compact, Sharp, Industrial */}
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-[#0a182e] border border-slate-700/70 rounded-lg p-3">
                  <div className="flex items-center space-x-1.5 text-amber-400 mb-1">
                    <Award className="w-3.5 h-3.5 shrink-0" />
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Experience</span>
                  </div>
                  <p className="text-2xl sm:text-3xl font-extrabold text-white font-heading">25+</p>
                  <p className="text-[11px] text-slate-300 font-medium mt-0.5">Years Excellence (1999)</p>
                </div>

                <div className="bg-[#0a182e] border border-slate-700/70 rounded-lg p-3">
                  <div className="flex items-center space-x-1.5 text-blue-400 mb-1">
                    <Factory className="w-3.5 h-3.5 shrink-0" />
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Track Record</span>
                  </div>
                  <p className="text-2xl sm:text-3xl font-extrabold text-white font-heading">500+</p>
                  <p className="text-[11px] text-slate-300 font-medium mt-0.5">Projects &amp; Shutdowns</p>
                </div>

                <div className="bg-[#0a182e] border border-slate-700/70 rounded-lg p-3">
                  <div className="flex items-center space-x-1.5 text-cyan-400 mb-1">
                    <Users className="w-3.5 h-3.5 shrink-0" />
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">OEM Clients</span>
                  </div>
                  <p className="text-2xl sm:text-3xl font-extrabold text-white font-heading">50+</p>
                  <p className="text-[11px] text-slate-300 font-medium mt-0.5">Major Tier-1 &amp; EPCs</p>
                </div>

                <div className="bg-[#0a182e] border border-emerald-500/40 rounded-lg p-3">
                  <div className="flex items-center space-x-1.5 text-emerald-400 mb-1">
                    <ShieldCheck className="w-3.5 h-3.5 shrink-0" />
                    <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-400">Safety EHS</span>
                  </div>
                  <p className="text-2xl sm:text-3xl font-extrabold text-emerald-400 font-heading">ZERO</p>
                  <p className="text-[11px] text-slate-300 font-medium mt-0.5">Casualties Since 1999</p>
                </div>
              </div>

              {/* Works Location & Direct Contact Footer */}
              <div className="mt-3 pt-2.5 border-t border-slate-700/60 flex items-center justify-between text-[11px] text-slate-300">
                <Link
                  href="/projects"
                  className="text-amber-400 hover:text-amber-300 font-semibold inline-flex items-center space-x-1"
                >
                  <span>500+ Project List</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
