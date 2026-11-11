"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Building2, Handshake, ShieldCheck } from "lucide-react";

export function ClientLogoMarquee() {
  return (
    <section className="bg-slate-50 border-t border-b border-slate-200 py-10 sm:py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded bg-[#1A3A6B] border border-amber-400/30 text-amber-300 text-[11px] sm:text-xs font-bold uppercase tracking-wider">
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
            <span>EST. 1999 · 25+ Years of Turnkey Industrial Execution</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold font-heading text-slate-900 tracking-tight">
            Trusted by 50+ Major Tier-1 OEMs &amp; Global EPC Leaders
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-slate-600">
            Over 25+ years, UNIQUE ENGINEERS has executed critical mechanical installations in full compliance with OEM &amp; global EPC quality standards.
          </p>
        </div>
      </div>
    </section>
  );
}
