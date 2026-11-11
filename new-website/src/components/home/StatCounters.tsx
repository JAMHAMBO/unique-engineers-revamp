import React from "react";
import { Award, CheckCircle2, Users, Building, ShieldCheck } from "lucide-react";

const stats = [
  {
    value: "25+",
    label: "Years of Experience",
    subtext: "Continuous operation since 1999",
    icon: Award,
    accent: "#1A3A6B",
  },
  {
    value: "500+",
    label: "Projects & Shutdowns",
    subtext: "Delivered across India",
    icon: CheckCircle2,
    accent: "#1A3A6B",
  },
  {
    value: "50+",
    label: "Major OEM Clients",
    subtext: "Automotive & EPC partners",
    icon: Building,
    accent: "#1A3A6B",
  },
  {
    value: "200+",
    label: "Skilled Workforce",
    subtext: "ESIC & PF compliant personnel",
    icon: Users,
    accent: "#1A3A6B",
  },
  {
    value: "ZERO",
    label: "Safety Casualties",
    subtext: "100% EHS record since inception",
    icon: ShieldCheck,
    accent: "#b45309",
  },
];

export function StatCounters() {
  return (
    <section className="bg-white border-b border-slate-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 divide-x divide-slate-100">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                className={`flex flex-col items-center text-center py-7 px-4 ${
                  idx === 4 ? "col-span-2 sm:col-span-1" : ""
                }`}
              >
                <div
                  className="w-10 h-10 rounded flex items-center justify-center mb-3"
                  style={{ backgroundColor: `${stat.accent}18`, color: stat.accent }}
                >
                  <Icon className="w-5 h-5" />
                </div>
                <span
                  className="text-3xl font-bold tracking-tight"
                  style={{ color: stat.accent }}
                >
                  {stat.value}
                </span>
                <span className="text-sm font-semibold text-slate-800 mt-1 leading-tight">
                  {stat.label}
                </span>
                <span className="text-xs text-slate-500 mt-0.5 leading-tight">
                  {stat.subtext}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
