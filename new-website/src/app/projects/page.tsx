"use client";

import React, { useState } from "react";
import Link from "next/link";
import { projectsData, projectStats } from "@/data/projects";
import { SectionHeader } from "@/components/common/SectionHeader";
import {
  CheckCircle2,
  Calendar,
  MapPin,
  Building,
  ArrowRight,
  Filter,
} from "lucide-react";

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState<string>("all");

  const filteredProjects =
    activeFilter === "all"
      ? projectsData
      : projectsData.filter((p) => p.category === activeFilter);

  const filters = [
    { id: "all", label: "All Projects (500+)" },
    { id: "paint-shop", label: "Automotive Paint Shops" },
    { id: "conveyor", label: "Conveyors & Handling" },
    { id: "shutdown", label: "Shutdowns & Maintenance" },
    { id: "pipeline", label: "Gas Pipelines" },
    { id: "relocation", label: "Plant Relocations" },
  ];

  return (
    <div className="py-12 sm:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
        {/* Page Header */}
        <div className="border-b border-slate-200 pb-10">
          <SectionHeader
            badge="500+ Delivered Engagements"
            title="Delivered Projects Portfolio"
            subtitle="Demonstrated engineering capability across automotive OEMs, heavy industrial manufacturing, and cross-country infrastructure."
          />

          {/* Metric Highlights Strip */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 pt-4">
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-3 text-center">
              <span className="text-xl sm:text-2xl font-extrabold text-brand-600 block">
                {projectStats.turnkeyPaintshops}
              </span>
              <span className="text-[11px] text-slate-500 font-medium">
                Turnkey Paintshops
              </span>
            </div>
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-3 text-center">
              <span className="text-xl sm:text-2xl font-extrabold text-brand-600 block">
                {projectStats.conveyorSystems}
              </span>
              <span className="text-[11px] text-slate-500 font-medium">
                Conveyor Systems
              </span>
            </div>
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-3 text-center">
              <span className="text-xl sm:text-2xl font-extrabold text-brand-600 block">
                {projectStats.robotsInstalled}
              </span>
              <span className="text-[11px] text-slate-500 font-medium">
                Robots Installed
              </span>
            </div>
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-3 text-center">
              <span className="text-xl sm:text-2xl font-extrabold text-brand-600 block">
                {projectStats.shutdownJobs}
              </span>
              <span className="text-[11px] text-slate-500 font-medium">
                Shutdown Overhauls
              </span>
            </div>
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-3 text-center">
              <span className="text-xl sm:text-2xl font-extrabold text-brand-600 block">
                {projectStats.plantRelocations}
              </span>
              <span className="text-[11px] text-slate-500 font-medium">
                Plant Relocations
              </span>
            </div>
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-3 text-center">
              <span className="text-xl sm:text-2xl font-extrabold text-brand-600 block">
                {projectStats.pipelineGasProjects}
              </span>
              <span className="text-[11px] text-slate-500 font-medium">
                Pipeline Projects
              </span>
            </div>
          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-2">
          <Filter className="w-4 h-4 text-slate-400 mr-1" />
          {filters.map((f) => (
            <button
              key={f.id}
              onClick={() => setActiveFilter(f.id)}
              className={`px-4 py-2 rounded-lg text-xs font-bold transition-all border ${
                activeFilter === f.id
                  ? "bg-brand-600 text-white border-brand-600 shadow-sm"
                  : "bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-xl border border-slate-200 p-6 hover:border-brand-500 hover:shadow-lg transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                {/* Header Meta */}
                <div className="flex items-center justify-between text-xs text-slate-500 mb-3 pb-3 border-b border-slate-100">
                  <div className="flex items-center space-x-1.5 font-bold text-brand-600 uppercase tracking-wide">
                    <Building className="w-3.5 h-3.5" />
                    <span className="line-clamp-1">{project.client}</span>
                  </div>
                  {project.epcPartner && (
                    <span className="bg-slate-100 text-slate-600 px-2 py-0.5 rounded text-[10px] font-semibold">
                      Ref: {project.epcPartner}
                    </span>
                  )}
                </div>

                {/* Location */}
                <div className="flex items-center space-x-1.5 text-xs text-slate-500 mb-2">
                  <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                  <span>{project.location}</span>
                </div>

                {/* Scope */}
                <h3 className="font-bold text-base text-slate-900 mb-2 leading-snug">
                  {project.scope}
                </h3>
              </div>

              {/* Footer Meta */}
              <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400">
                <div className="flex items-center space-x-1">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{project.timeframe || "Delivered"}</span>
                </div>
                <Link
                  href="/contact"
                  className="font-bold text-brand-600 hover:text-brand-700 flex items-center space-x-1"
                >
                  <span>Inquire</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="bg-brand-950 text-white rounded-2xl p-8 sm:p-12 text-center shadow-xl">
          <h3 className="text-2xl sm:text-3xl font-bold font-heading text-white">
            Need Detailed Reference Credentials or Site Case Studies?
          </h3>
          <p className="text-slate-300 text-sm max-w-2xl mx-auto mt-2">
            We provide official completion certificates, client recommendation letters,
            and layout engineering documentation upon request.
          </p>
          <div className="mt-6">
            <Link
              href="/contact"
              className="bg-brand-600 hover:bg-brand-500 text-white font-bold px-8 py-3.5 rounded-lg text-sm inline-flex items-center space-x-2 transition-all shadow-md"
            >
              <span>Contact Business Development</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
