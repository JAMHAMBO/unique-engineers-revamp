import React from "react";
import Link from "next/link";
import { safetyComplianceData } from "@/data/capabilities";
import { SectionHeader } from "@/components/common/SectionHeader";
import {
  ShieldCheck,
  CheckCircle2,
  AlertTriangle,
  Flame,
  Wind,
  HardHat,
  ArrowRight,
  HeartHandshake,
} from "lucide-react";

export const metadata = {
  title: "Safety & EHS Standards | ZERO Casualties Since 1999",
  description:
    "Safety is our #1 priority. Zero casualties since 1999, 140 full-body harness arrestors, ISO fire gear, and 100% silicone-free compliance.",
};

export default function SafetyPage() {
  const safetyProtocols = [
    {
      title: "Fall Protection & Height Safety",
      stat: "140 Harnesses · 20 Life Lines",
      description:
        "140 Full Body Harness Arrestors and 20 sets of 100 m Life Lines for high-altitude steel structure and rooftop stack erection.",
      icon: ShieldCheck,
      color: "text-amber-500 bg-amber-50 border-amber-200",
    },
    {
      title: "Fire Prevention & Response",
      stat: "60 Extinguishers · ISO Blankets",
      description:
        "60 ABC Dry Chemical Extinguishers, ISO-Certified Fire Blankets for hot work containment, sand buckets, and high-pressure hose reels.",
      icon: Flame,
      color: "text-red-500 bg-red-50 border-red-200",
    },
    {
      title: "Respiratory Protection",
      stat: "Full Range PPE",
      description:
        "Full range respiratory protection equipment, particulate respirators, and positive-pressure masks for solvent vapor and welding fumes.",
      icon: Wind,
      color: "text-blue-500 bg-blue-50 border-blue-200",
    },
    {
      title: "Personal Protective Equipment",
      stat: "100% ISI-Marked Gear",
      description:
        "Mandatory industrial hard hats, ear plugs & muffs, face visors, anti-impact safety glasses, certified welding aprons, and lifting gloves.",
      icon: HardHat,
      color: "text-emerald-500 bg-emerald-50 border-emerald-200",
    },
    {
      title: "Site Safety Kit & First Aid",
      stat: "Comprehensive Emergency Kits",
      description:
        "High-visibility safety signs & barricade tapes, equipment storage cabinets, air warning horns, and industrial first-aid stations.",
      icon: AlertTriangle,
      color: "text-purple-500 bg-purple-50 border-purple-200",
    },
    {
      title: "Non-Toxic & Silicone-Free",
      stat: "Automotive Cleanroom Standards",
      description:
        "All site tools, lubricants, tapes, and consumables are certified 100% silicon-free and non-toxic to prevent paint cratering defects.",
      icon: CheckCircle2,
      color: "text-brand-500 bg-brand-50 border-brand-200",
    },
  ];

  return (
    <div className="py-12 sm:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <div className="border-b border-slate-200 pb-10">
          <SectionHeader
            badge="ZERO Casualties Since 1999"
            title="Safety: Our #1 Core Priority"
            subtitle="Zero casualties since 1999 proves our unwavering commitment to stringent PPE enforcement, certified rigging gear, and worker welfare on every site across India."
          />
        </div>

        {/* Big Zero Casualty Record Banner */}
        <div className="bg-gradient-to-r from-brand-950 via-slate-900 to-brand-900 text-white rounded-3xl p-8 sm:p-14 shadow-2xl relative overflow-hidden">
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-4 text-center lg:text-left border-b lg:border-b-0 lg:border-r border-slate-800 pb-8 lg:pb-0 lg:pr-8">
              <span className="text-xs font-bold text-amber-400 uppercase tracking-widest block">
                Safety Record
              </span>
              <span className="text-6xl sm:text-7xl font-extrabold font-heading text-white tracking-tight mt-2 block">
                ZERO
              </span>
              <span className="text-lg font-bold text-emerald-400 uppercase tracking-wider mt-1 block">
                Casualties Since 1999
              </span>
              <p className="text-xs text-slate-400 mt-2">
                Across 25+ years and 500+ industrial project deliveries nationwide.
              </p>
            </div>

            <div className="lg:col-span-8 space-y-4">
              <h3 className="text-2xl font-bold font-heading text-white">
                Stringent EHS Enforcement & Worker Welfare
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Because of the high-risk nature of heavy steel erection, overhead conveyor installation, and confined space tank work, safety at UNIQUE ENGINEERS is proactive and non-negotiable. We surround every worker and work zone with multiple layers of defense.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs text-slate-300">
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Daily morning toolbox safety briefings</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Mandatory hot work permits and fire watches</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>100% ESIC & Provident Fund covered workforce</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Full-time certified on-site Safety Officers</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Safety Pillars Grid */}
        <div className="space-y-8">
          <div className="border-l-4 border-brand-600 pl-4">
            <h2 className="text-2xl font-bold font-heading text-slate-900">
              Safety Equipment & Site Compliance Kit
            </h2>
            <p className="text-sm text-slate-500 mt-1">
              Maintained in-house and deployed to every project site alongside our installation teams.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {safetyProtocols.map((protocol) => {
              const Icon = protocol.icon;
              return (
                <div
                  key={protocol.title}
                  className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow space-y-3"
                >
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center border ${protocol.color}`}
                  >
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-base text-slate-900 font-heading">
                      {protocol.title}
                    </h3>
                    <span className="text-xs font-extrabold text-brand-600 block mt-0.5">
                      {protocol.stat}
                    </span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {protocol.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Paint Shop Specific Cleanliness Standards */}
        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8 sm:p-10 space-y-6">
          <div className="max-w-3xl">
            <span className="text-xs font-bold text-brand-600 uppercase tracking-wider">
              Automotive Industry Specialization
            </span>
            <h3 className="text-xl sm:text-2xl font-bold font-heading text-slate-900 mt-1">
              Silicon-Free Cleanroom Norms for Paint Finishing
            </h3>
            <p className="text-sm text-slate-600 mt-2 leading-relaxed">
              Automotive paint shops operate under the most stringent chemical purity requirements in modern manufacturing. Silicone lubricants, airborne hair oil, or uncertified gasket plasticizers can ruin thousand-car production batches by causing crater and fisheye finish defects.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
            <div className="bg-white p-4 rounded-xl border border-slate-200">
              <h4 className="font-bold text-slate-900 text-sm">Certified Tooling</h4>
              <p className="text-slate-500 mt-1">
                Zero silicone spray, silicone sealant, or unapproved lubricants are permitted on any of our tools or sites.
              </p>
            </div>
            <div className="bg-white p-4 rounded-xl border border-slate-200">
              <h4 className="font-bold text-slate-900 text-sm">Specialized Gaskets</h4>
              <p className="text-slate-500 mt-1">
                We supply and install our proprietary non-silicone PVC & EPDM rubber profiles formulated specifically for paint ovens and booths.
              </p>
            </div>
            <div className="bg-white p-4 rounded-xl border border-slate-200">
              <h4 className="font-bold text-slate-900 text-sm">Worker Grooming Norms</h4>
              <p className="text-slate-500 mt-1">
                Strict hair-net and lint-free suit protocols enforced whenever our teams operate inside active paint cleanrooms.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center pt-4">
          <Link
            href="/contact"
            className="bg-brand-600 hover:bg-brand-700 text-white font-bold px-8 py-3.5 rounded-lg text-sm inline-flex items-center space-x-2 shadow-md transition-all"
          >
            <span>Request Site Safety Plan & Risk Assessment (HIRA)</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}

