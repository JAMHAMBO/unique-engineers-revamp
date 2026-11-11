import React from "react";
import Link from "next/link";
import { workforceData, equipmentFleetData } from "@/data/capabilities";
import { SectionHeader } from "@/components/common/SectionHeader";
import {
  Users,
  Wrench,
  ShieldCheck,
  CheckCircle2,
  Cpu,
  Layers,
  ArrowRight,
} from "lucide-react";

export const metadata = {
  title: "Capabilities | 200+ Workforce & Owned Equipment Fleet",
  description:
    "Explore UNIQUE ENGINEERS workforce strength (200+ certified personnel, tested welders) and owned deployment-ready machinery inventory.",
};

export default function CapabilitiesPage() {
  const weldingEquipment = equipmentFleetData.filter((e) => e.category === "welding");
  const grindingEquipment = equipmentFleetData.filter((e) => e.category === "grinding");
  const drillingEquipment = equipmentFleetData.filter((e) => e.category === "drilling");
  const liftingEquipment = equipmentFleetData.filter((e) => e.category === "lifting");

  const certifiedWelders = workforceData.filter((w) => w.category === "welding");
  const managementTeam = workforceData.filter((w) => w.category === "management");
  const technicalTeam = workforceData.filter((w) => w.category === "technical");
  const supportTeam = workforceData.filter((w) => w.category === "support");

  return (
    <div className="py-12 sm:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Page Header */}
        <div className="border-b border-slate-200 pb-10">
          <SectionHeader
            badge="Execution Capacity"
            title="Workforce Strength & Equipment Fleet"
            subtitle="Owned machinery inventory maintained in working condition and an in-house workforce of over 200+ skilled personnel ready for immediate site deployment."
          />
        </div>

        {/* 1. Workforce Section */}
        <div className="space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between border-l-4 border-brand-600 pl-4">
            <div>
              <h2 className="text-2xl font-bold font-heading text-slate-900">
                200+ Skilled & Complied Personnel
              </h2>
              <p className="text-sm text-slate-500 mt-1">
                All personnel are legally complied and insured under ESIC and Provident Fund (PF).
              </p>
            </div>
            <span className="mt-2 sm:mt-0 text-xs font-bold bg-emerald-50 text-emerald-700 px-3 py-1 rounded-full border border-emerald-200">
              ESIC & PF Registered
            </span>
          </div>

          {/* Certified Welders Banner */}
          <div className="bg-gradient-to-r from-brand-950 to-slate-900 text-white rounded-2xl p-6 sm:p-8 shadow-xl">
            <h3 className="text-lg font-bold font-heading text-amber-400 uppercase tracking-wider mb-2">
              Certified Welder Strength (Tested & Certified)
            </h3>
            <p className="text-xs text-slate-300 mb-6 max-w-2xl">
              Trained in structural, pipe, and high-pressure alloy welding according to AWS, ASME, and IS welding procedure specifications (WPS).
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {certifiedWelders.map((w) => (
                <div
                  key={w.role}
                  className="bg-brand-900/60 border border-brand-800 rounded-xl p-5"
                >
                  <span className="text-3xl font-extrabold text-white font-heading">
                    {w.count}
                  </span>
                  <h4 className="font-bold text-sm text-slate-200 mt-1">
                    {w.role}
                  </h4>
                  <p className="text-xs text-slate-400 mt-1">{w.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Detailed Workforce Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Management & Supervisory */}
            <div className="border border-slate-200 rounded-xl p-6 bg-slate-50 space-y-4">
              <h3 className="font-bold text-base text-slate-900 flex items-center space-x-2">
                <Users className="w-4 h-4 text-brand-600" />
                <span>Site Management & EHS</span>
              </h3>
              <div className="space-y-3">
                {managementTeam.map((m) => (
                  <div
                    key={m.role}
                    className="flex justify-between items-center py-2 border-b border-slate-200/60 last:border-0"
                  >
                    <div>
                      <span className="text-sm font-semibold text-slate-800 block">
                        {m.role}
                      </span>
                      <span className="text-xs text-slate-500">{m.description}</span>
                    </div>
                    <span className="text-lg font-extrabold text-brand-600">
                      {m.count}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Technical Fitters */}
            <div className="border border-slate-200 rounded-xl p-6 bg-slate-50 space-y-4">
              <h3 className="font-bold text-base text-slate-900 flex items-center space-x-2">
                <Wrench className="w-4 h-4 text-emerald-600" />
                <span>Precision Fitters & Technicians</span>
              </h3>
              <div className="space-y-3">
                {technicalTeam.map((t) => (
                  <div
                    key={t.role}
                    className="flex justify-between items-center py-2 border-b border-slate-200/60 last:border-0"
                  >
                    <div>
                      <span className="text-sm font-semibold text-slate-800 block">
                        {t.role}
                      </span>
                      <span className="text-xs text-slate-500">{t.description}</span>
                    </div>
                    <span className="text-lg font-extrabold text-emerald-600">
                      {t.count}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Riggers & Site Support */}
            <div className="border border-slate-200 rounded-xl p-6 bg-slate-50 space-y-4">
              <h3 className="font-bold text-base text-slate-900 flex items-center space-x-2">
                <Layers className="w-4 h-4 text-blue-600" />
                <span>Rigging & Site Support</span>
              </h3>
              <div className="space-y-3">
                {supportTeam.map((s) => (
                  <div
                    key={s.role}
                    className="flex justify-between items-center py-2 border-b border-slate-200/60 last:border-0"
                  >
                    <div>
                      <span className="text-sm font-semibold text-slate-800 block">
                        {s.role}
                      </span>
                      <span className="text-xs text-slate-500">{s.description}</span>
                    </div>
                    <span className="text-lg font-extrabold text-blue-600">
                      {s.count}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* 2. Machinery & Equipment Fleet Section */}
        <div className="space-y-8 pt-8 border-t border-slate-200">
          <div className="border-l-4 border-amber-500 pl-4">
            <h2 className="text-2xl font-bold font-heading text-slate-900">
              Owned Machinery & Equipment Inventory
            </h2>
            <p className="text-sm text-slate-500 mt-1">
              All equipment is owned, maintained in continuous working condition, and available for immediate deployment from our Bhiwandi facility.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Welding Equipment */}
            <div className="border border-slate-200 rounded-xl p-6 bg-white shadow-sm space-y-4">
              <div className="flex items-center space-x-2 text-brand-600 font-bold text-base border-b border-slate-100 pb-3">
                <Cpu className="w-5 h-5" />
                <span>Welding Equipment</span>
              </div>
              <div className="space-y-3 text-xs">
                {weldingEquipment.map((item) => (
                  <div
                    key={item.name}
                    className="flex justify-between items-center py-1.5 border-b border-slate-100 last:border-0"
                  >
                    <div>
                      <p className="font-semibold text-slate-800">{item.name}</p>
                      <p className="text-slate-400 text-[11px]">{item.specification}</p>
                    </div>
                    <span className="font-extrabold text-slate-900 bg-slate-100 px-2.5 py-1 rounded">
                      {item.quantity}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Grinding & Cutting */}
            <div className="border border-slate-200 rounded-xl p-6 bg-white shadow-sm space-y-4">
              <div className="flex items-center space-x-2 text-amber-600 font-bold text-base border-b border-slate-100 pb-3">
                <Wrench className="w-5 h-5" />
                <span>Grinding & Cutting</span>
              </div>
              <div className="space-y-3 text-xs">
                {grindingEquipment.map((item) => (
                  <div
                    key={item.name}
                    className="flex justify-between items-center py-1.5 border-b border-slate-100 last:border-0"
                  >
                    <div>
                      <p className="font-semibold text-slate-800">{item.name}</p>
                      <p className="text-slate-400 text-[11px]">{item.specification}</p>
                    </div>
                    <span className="font-extrabold text-slate-900 bg-slate-100 px-2.5 py-1 rounded">
                      {item.quantity}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Drilling & Power Tools */}
            <div className="border border-slate-200 rounded-xl p-6 bg-white shadow-sm space-y-4">
              <div className="flex items-center space-x-2 text-emerald-600 font-bold text-base border-b border-slate-100 pb-3">
                <Cpu className="w-5 h-5" />
                <span>Drilling & Power Tools</span>
              </div>
              <div className="space-y-3 text-xs">
                {drillingEquipment.map((item) => (
                  <div
                    key={item.name}
                    className="flex justify-between items-center py-1.5 border-b border-slate-100 last:border-0"
                  >
                    <div>
                      <p className="font-semibold text-slate-800">{item.name}</p>
                      <p className="text-slate-400 text-[11px]">{item.specification}</p>
                    </div>
                    <span className="font-extrabold text-slate-900 bg-slate-100 px-2.5 py-1 rounded">
                      {item.quantity}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Lifting Equipment */}
            <div className="border border-slate-200 rounded-xl p-6 bg-white shadow-sm space-y-4">
              <div className="flex items-center space-x-2 text-blue-600 font-bold text-base border-b border-slate-100 pb-3">
                <Layers className="w-5 h-5" />
                <span>Lifting Equipment</span>
              </div>
              <div className="space-y-3 text-xs">
                {liftingEquipment.map((item) => (
                  <div
                    key={item.name + item.specification}
                    className="flex justify-between items-center py-1.5 border-b border-slate-100 last:border-0"
                  >
                    <div>
                      <p className="font-semibold text-slate-800">{item.name}</p>
                      <p className="text-slate-400 text-[11px]">{item.specification}</p>
                    </div>
                    <span className="font-extrabold text-slate-900 bg-slate-100 px-2.5 py-1 rounded">
                      {item.quantity}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between">
          <div className="max-w-2xl mb-6 md:mb-0">
            <h3 className="text-xl font-bold font-heading text-slate-900">
              Need Manpower Supply or Machinery for an Upcoming Project?
            </h3>
            <p className="text-sm text-slate-600 mt-1">
              We provide tested welders, riggers, and erection equipment for greenfield setups and maintenance turnarounds.
            </p>
          </div>
          <Link
            href="/contact"
            className="bg-brand-600 hover:bg-brand-700 text-white font-bold px-6 py-3 rounded-lg text-sm inline-flex items-center space-x-2 transition-colors shrink-0"
          >
            <span>Request Resource Mobilization</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}

