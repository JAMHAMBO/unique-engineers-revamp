import React from "react";
import Link from "next/link";
import { companyData } from "@/data/company";
import { SectionHeader } from "@/components/common/SectionHeader";
import {
  ShieldCheck,
  Target,
  Eye,
  Award,
  Factory,
  Building2,
  Users,
  CheckCircle2,
  ArrowRight,
  FileCheck,
  CreditCard,
} from "lucide-react";

export const metadata = {
  title: "About Us | 25+ Years of Engineering Excellence",
  description:
    "Learn about UNIQUE ENGINEERS: continuous operations since 1999, mission, vision, Mumbai headquarters, Bhiwandi fabrication facility, and 200+ workforce.",
};

export default function AboutPage() {
  const hallmarks = [
    "Creative approach to complex industrial engineering challenges",
    "Ready to mobilize and take up urgent site projects without delay",
    "Highly regarded for engineering precision and disciplined manpower",
    "Continuous enforcement of zero-casualty safety standards",
    "Complete transparency, statutory compliance (ESIC/PF), and fair business practices",
    "Tested and certified workforce with decades of automotive paint shop experience",
  ];

  return (
    <div className="py-12 sm:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Page Banner / Header */}
        <div className="border-b border-slate-200 pb-10">
          <SectionHeader
            badge="Established 1999"
            title="About UNIQUE ENGINEERS"
            subtitle="Characterized by integrity, competency, and reputation for over two and a half decades."
          />
        </div>

        {/* 1. Who We Are: Detailed Story */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-5 text-slate-700 leading-relaxed text-base">
            <h3 className="text-2xl font-bold text-slate-900 font-heading">
              A Premier Turnkey Contractor for Industrial Facilities
            </h3>
            <p>
              UNIQUE ENGINEERS is a leading Indian engineering firm specializing in
              <strong> Plant Installation, Fabrication, Manpower Supply, Plant Maintenance, and Conveyor Installation</strong>{" "}
              for Automotive Paint Shops and industrial facilities.
            </p>
            <p>
              Operating continuously since <strong>1999</strong>, we bring over <strong>25+ years of hands-on expertise</strong> to every project. Headquartered in <strong>Mumbai, Maharashtra</strong>, with an extensive fabrication and machinery works facility in <strong>Bhiwandi</strong>, we serve Automotive OEMs, industrial clients, and global EPC companies across India.
            </p>
            <p>
              Our multidisciplinary team of experienced layout engineers, tested and certified welders (Arc, TIG, MIG), skilled fitters, and seasoned riggers ensures world-class execution on every engagement.
            </p>

            <div className="pt-2 flex flex-wrap gap-3 text-xs font-semibold text-slate-700">
              <span className="bg-slate-100 px-3 py-1.5 rounded border border-slate-200">
                GST: {companyData.registrations.gst}
              </span>
              <span className="bg-slate-100 px-3 py-1.5 rounded border border-slate-200">
                ESIC: {companyData.registrations.esic}
              </span>
              <span className="bg-slate-100 px-3 py-1.5 rounded border border-slate-200">
                PF: {companyData.registrations.pf}
              </span>
            </div>
          </div>

          {/* Quick Metrics Card */}
          <div className="lg:col-span-5 bg-gradient-to-br from-brand-950 to-slate-900 text-white rounded-2xl p-8 shadow-xl">
            <h4 className="text-lg font-bold font-heading text-white mb-6 border-b border-brand-800 pb-3">
              UNIQUE ENGINEERS at a Glance
            </h4>
            <div className="space-y-4 text-sm">
              <div className="flex justify-between py-1.5 border-b border-brand-900/80">
                <span className="text-slate-400">Founded:</span>
                <span className="font-bold text-white">1999</span>
              </div>
              <div className="flex justify-between py-1.5 border-b border-brand-900/80">
                <span className="text-slate-400">Headquarters:</span>
                <span className="font-bold text-white">Fort, Mumbai, Maharashtra</span>
              </div>
              <div className="flex justify-between py-1.5 border-b border-brand-900/80">
                <span className="text-slate-400">Works Facility:</span>
                <span className="font-bold text-white">Bhiwandi, Maharashtra</span>
              </div>
              <div className="flex justify-between py-1.5 border-b border-brand-900/80">
                <span className="text-slate-400">Workforce Strength:</span>
                <span className="font-bold text-emerald-400">200+ Skilled Personnel</span>
              </div>
              <div className="flex justify-between py-1.5 border-b border-brand-900/80">
                <span className="text-slate-400">Track Record:</span>
                <span className="font-bold text-white">500+ Projects & Shutdowns</span>
              </div>
              <div className="flex justify-between py-1.5">
                <span className="text-slate-400">Safety Casualties:</span>
                <span className="font-bold text-amber-400">ZERO (Since 1999)</span>
              </div>
            </div>
          </div>
        </div>

        {/* 2. Mission, Vision & Experience Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Mission */}
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-8 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-brand-100 text-brand-700 flex items-center justify-center mb-5">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 font-heading mb-3">
                Our Mission
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                UNIQUE ENGINEERS — characterized by integrity, competency, and reputation, and in continuous operation since 1999 — offers the highest standard of Fabrication & Installation works at fair and reasonable pricing. We operate equitably, ensuring the continuing safety, security, and welfare of our employees.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-200 text-xs font-semibold text-brand-600">
              Engineering with Integrity
            </div>
          </div>

          {/* Vision */}
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-8 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center mb-5">
                <Eye className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 font-heading mb-3">
                Our Vision
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                To be India&apos;s most trusted execution partner for automotive paint shops, heavy conveyor systems, and complex industrial installations — recognized for unmatched craftsmanship, zero safety incidents, and on-time project handover to global EPC benchmarks.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-200 text-xs font-semibold text-emerald-600">
              A Trusted Execution Partner
            </div>
          </div>

          {/* Experience */}
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-8 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center mb-5">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 font-heading mb-3">
                25+ Years Specialization
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Specializing in the automotive industry since 1999, our core team includes certified layout engineers, tested welders, skilled riggers, and pipefitters with comprehensive technical knowledge of Paint Finishing Systems, Conveyor & Handling Systems, and Curing Ovens.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-200 text-xs font-semibold text-amber-600">
              Deep Domain Expertise
            </div>
          </div>
        </div>

        {/* 3. Our Hallmarks */}
        <div className="bg-slate-900 text-white rounded-2xl p-8 sm:p-12">
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">
              Core Principles
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold font-heading text-white mt-1">
              Our Hallmarks of Excellence
            </h3>
            <p className="text-slate-400 text-sm mt-2">
              The values and practices that define how UNIQUE ENGINEERS operates on every site across India.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {hallmarks.map((hallmark) => (
              <div
                key={hallmark}
                className="bg-slate-800/80 border border-slate-700/60 rounded-xl p-4 flex items-start space-x-3"
              >
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <span className="text-sm text-slate-200">{hallmark}</span>
              </div>
            ))}
          </div>
        </div>

        {/* 4. Facilities & Location Cards */}
        <div>
          <SectionHeader
            badge="Locations"
            title="Our Infrastructure & Facilities"
            subtitle="Strategically located across Mumbai and Bhiwandi to support rapid procurement, pre-fabrication, and nationwide mobilization."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Registered Head Office */}
            <div className="border border-slate-200 rounded-xl p-8 bg-slate-50">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-brand-100 text-brand-700 flex items-center justify-center">
                  <Building2 className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-lg text-slate-900 font-heading">
                    Registered Head Office (Mumbai)
                  </h4>
                  <p className="text-xs text-slate-500">Corporate & Business Operations</p>
                </div>
              </div>
              <p className="text-sm text-slate-700 leading-relaxed">
                {companyData.registeredOffice.fullAddress}
              </p>
              <div className="mt-4 pt-4 border-t border-slate-200 space-y-1 text-xs text-slate-600">
                <p><strong>Direct / WhatsApp:</strong> {companyData.keyContact.phone}</p>
                <p><strong>Office Phone:</strong> {companyData.keyContact.officePhone}</p>
                <p><strong>Email:</strong> {companyData.keyContact.email}</p>
              </div>
            </div>

            {/* Works Facility */}
            <div className="border border-slate-200 rounded-xl p-8 bg-slate-50">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-amber-100 text-amber-700 flex items-center justify-center">
                  <Factory className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-lg text-slate-900 font-heading">
                    Works & Fabrication Facility (Bhiwandi)
                  </h4>
                  <p className="text-xs text-slate-500">Equipment Fleet & Pre-Fabrication</p>
                </div>
              </div>
              <p className="text-sm text-slate-700 leading-relaxed">
                {companyData.worksAddress.fullAddress}
              </p>
              <div className="mt-4 pt-4 border-t border-slate-200 space-y-1 text-xs text-slate-600">
                <p><strong>Facility Scope:</strong> In-house welding, structural cutting, equipment testing & staging</p>
                <p><strong>Location:</strong> Near Zakat Naka, Bhiwandi industrial corridor</p>
                <p><strong>Fleet:</strong> Welding machines, heavy grinders, chain pulley blocks up to 5T & other heavy Machinery</p>
              </div>
            </div>
          </div>
        </div>

        {/* 5. Statutory Compliance & Banking Information */}
        <div className="border border-slate-200 rounded-2xl p-8 bg-slate-50">
          <div className="max-w-3xl mb-6">
            <h4 className="text-xl font-bold font-heading text-slate-900 flex items-center space-x-2">
              <FileCheck className="w-5 h-5 text-brand-600" />
              <span>Corporate Compliance</span>
            </h4>
            <p className="text-xs text-slate-500 mt-1">
              Official company information for vendor registration, statutory audits, and commercial agreements.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-xs">
            <div className="bg-white p-4 rounded-lg border border-slate-200">
              <span className="text-slate-400 block font-medium">GST Identification:</span>
              <span className="font-bold text-slate-900 text-sm mt-1 block">
                {companyData.registrations.gst}
              </span>
            </div>
            <div className="bg-white p-4 rounded-lg border border-slate-200">
              <span className="text-slate-400 block font-medium">ESIC Registration:</span>
              <span className="font-bold text-slate-900 text-sm mt-1 block">
                {companyData.registrations.esic}
              </span>
            </div>
            <div className="bg-white p-4 rounded-lg border border-slate-200">
              <span className="text-slate-400 block font-medium">Provident Fund (PF):</span>
              <span className="font-bold text-slate-900 text-sm mt-1 block">
                {companyData.registrations.pf}
              </span>
            </div>
          </div>
        </div>

        {/* Call To Action */}
        <div className="text-center pt-6">
          <Link
            href="/contact"
            className="bg-brand-600 hover:bg-brand-700 text-white font-bold px-8 py-3.5 rounded-lg text-sm transition-all shadow-md inline-flex items-center space-x-2"
          >
            <span>Discuss a Project with UNIQUE ENGINEERS</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}

