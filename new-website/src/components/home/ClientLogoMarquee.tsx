"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Building2, Handshake } from "lucide-react";

export function ClientLogoMarquee() {
  return (
    <section className="bg-slate-50 border-t border-b border-slate-200 py-10 sm:py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-2 bg-blue-50 text-[#1A3A6B] border border-blue-200">
            <Building2 className="w-3.5 h-3.5 text-[#1A3A6B]" />
            <span>Client Footprint &amp; OEM Network</span>
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
