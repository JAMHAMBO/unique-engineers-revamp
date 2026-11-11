import React from "react";
import Link from "next/link";
import Image from "next/image";
import { clientsData, epcPartnersData } from "@/data/clients";
import { SectionHeader } from "@/components/common/SectionHeader";
import { Building2, Handshake, Globe2, ArrowRight } from "lucide-react";

export const metadata = {
  title: "Client Portfolio | 50+ Major Tier-1 OEMs & Global EPC Partners",
  description:
    "Trusted by India's leading automotive OEMs (Mahindra, Tata Motors, Toyota, Mercedes-Benz, OLA Electric) and global EPC contractors (Eisenmann, Dürr, Taikisha, Bullows).",
};

export default function ClientsPage() {
  const oemClients = clientsData.filter((c) => c.category === "oem");
  const industrialClients = clientsData.filter((c) => c.category === "industrial");

  return (
    <div className="py-12 sm:py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <div className="bg-white p-8 sm:p-10 rounded-xl border border-slate-200 shadow-sm">
          <SectionHeader
            badge="Client Footprint"
            title="Trusted by 50+ Leading OEMs & EPC Partners"
            subtitle="Building long-term engineering partnerships with India's marquee automotive brands, heavy engineering enterprises, and global paint finishing technology leaders."
          />
        </div>

        {/* 1. Automotive OEMs Section */}
        <div className="space-y-6">
          <div className="border-l-4 border-[#1A3A6B] pl-4">
            <h2 className="text-2xl font-bold font-heading text-slate-900 flex items-center space-x-2">
              <Building2 className="w-5 h-5 text-[#1A3A6B]" />
              <span>Automotive OEMs, Tractors &amp; Electric Mobility</span>
            </h2>
            <p className="text-sm text-slate-500 mt-1">
              Passenger cars, commercial haulage, utility vehicles, agricultural machinery, two-wheelers, and electric vehicle gigafactories.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {oemClients.map((client) => (
              <div
                key={client.name}
                className="bg-white border border-slate-200 rounded-xl p-5 hover:border-[#1A3A6B] hover:shadow-lg transition-all group flex flex-col justify-between"
              >
                <div>
                  {/* Client Logo Header */}
                  <div className="h-16 w-full bg-slate-50 rounded-lg p-2.5 mb-4 flex items-center justify-center border border-slate-100 group-hover:border-blue-100 transition-colors">
                    {client.logo ? (
                      <div className="relative w-full h-full">
                        <Image
                          src={client.logo}
                          alt={`${client.name} Logo`}
                          fill
                          className="object-contain"
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        />
                      </div>
                    ) : (
                      <span className="font-extrabold text-sm text-[#1A3A6B] tracking-wide">
                        {client.name}
                      </span>
                    )}
                  </div>

                  <div className="flex items-start justify-between">
                    <h3 className="font-bold text-base text-slate-900 group-hover:text-[#1A3A6B] transition-colors">
                      {client.name}
                    </h3>
                    <span className="text-[10px] font-semibold bg-blue-50 text-[#1A3A6B] px-2 py-0.5 rounded shrink-0 ml-2">
                      OEM
                    </span>
                  </div>
                  <p className="text-xs text-[#1A3A6B] font-medium mt-1">
                    {client.sector}
                  </p>
                </div>

                {client.highlightProject && (
                  <p className="text-xs text-slate-500 mt-3 pt-3 border-t border-slate-100 line-clamp-2">
                    <span className="font-semibold text-slate-700">Project Highlights:</span>{" "}
                    {client.highlightProject}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* 2. Global EPC Contractors Section */}
        <div className="bg-[#0e2140] text-white rounded-2xl p-8 sm:p-12 shadow-xl space-y-8 border-l-4 border-amber-400">
          <div>
            <div className="inline-flex items-center space-x-1.5 text-amber-400 text-xs font-bold uppercase tracking-wider mb-2">
              <Handshake className="w-4 h-4" />
              <span>Sub-Contractor Relationships</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold font-heading text-white">
              Global OEM &amp; EPC Vendor Registrations
            </h2>
            <p className="text-slate-300 text-sm mt-1 max-w-3xl">
              UNIQUE ENGINEERS has operated as a preferred mechanical sub-contractor and registered vendor to the world&apos;s foremost paint shop and material handling technology companies:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {epcPartnersData.map((partner) => (
              <div
                key={partner.name}
                className="bg-slate-900/80 border border-slate-700 rounded-xl p-5 space-y-3 hover:border-amber-400 transition-colors flex flex-col justify-between"
              >
                <div>
                  {partner.logo ? (
                    <div className="h-12 w-full bg-white rounded p-2 mb-3 flex items-center justify-center">
                      <div className="relative w-full h-full">
                        <Image
                          src={partner.logo}
                          alt={`${partner.name} Logo`}
                          fill
                          className="object-contain"
                          sizes="(max-width: 640px) 100vw, 25vw"
                        />
                      </div>
                    </div>
                  ) : null}

                  <div className="flex items-center justify-between">
                    <h3 className="font-bold text-base text-white font-heading">
                      {partner.name}
                    </h3>
                    <span className="text-[10px] text-amber-300 font-semibold bg-slate-800 px-2 py-0.5 rounded border border-amber-400/30">
                      {partner.country}
                    </span>
                  </div>
                  <p className="text-xs text-slate-300 mt-1">{partner.specialty}</p>
                </div>

                <div className="pt-3 border-t border-slate-700/80 space-y-1 text-xs">
                  <p className="text-amber-400 font-semibold">
                    {partner.projectCount}
                  </p>
                  <p className="text-slate-400 text-[11px] line-clamp-2">
                    <span className="text-slate-300 font-medium">Projects:</span>{" "}
                    {partner.collaborations}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 3. Industrial, Tier-1 & Infrastructure Partners */}
        <div className="space-y-6">
          <div className="border-l-4 border-emerald-600 pl-4">
            <h2 className="text-2xl font-bold font-heading text-slate-900 flex items-center space-x-2">
              <Globe2 className="w-5 h-5 text-emerald-600" />
              <span>Industrial Giants, Tier-1 Systems &amp; Pipelines</span>
            </h2>
            <p className="text-sm text-slate-500 mt-1">
              Steel processing, power, heavy mining, polymer manufacturing, and high-pressure natural gas pipelines.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {industrialClients.map((client) => (
              <div
                key={client.name}
                className="bg-white border border-slate-200 rounded-xl p-5 hover:border-emerald-500 hover:shadow-lg transition-all group flex flex-col justify-between"
              >
                <div>
                  {/* Logo Container */}
                  <div className="h-14 w-full bg-slate-50 rounded-lg p-2 mb-3 flex items-center justify-center border border-slate-100 group-hover:border-emerald-100 transition-colors">
                    {client.logo ? (
                      <div className="relative w-full h-full">
                        <Image
                          src={client.logo}
                          alt={`${client.name} Logo`}
                          fill
                          className="object-contain"
                          sizes="(max-width: 640px) 100vw, 33vw"
                        />
                      </div>
                    ) : (
                      <span className="font-bold text-xs text-slate-700 tracking-wide">
                        {client.name}
                      </span>
                    )}
                  </div>

                  <div className="flex items-start justify-between">
                    <h3 className="font-bold text-base text-slate-900 group-hover:text-emerald-700 transition-colors">
                      {client.name}
                    </h3>
                    <span className="text-[10px] font-semibold bg-emerald-50 text-emerald-700 px-2 py-0.5 rounded shrink-0 ml-2">
                      Tier-1 / EPC
                    </span>
                  </div>
                  <p className="text-xs text-slate-600 font-semibold mt-1">
                    {client.sector}
                  </p>
                </div>

                {client.highlightProject && (
                  <p className="text-xs text-slate-500 mt-3 pt-3 border-t border-slate-100 line-clamp-2">
                    <span className="font-medium text-slate-700">Project Highlights:</span>{" "}
                    {client.highlightProject}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Call to action */}
        <div className="text-center pt-4">
          <Link
            href="/contact"
            className="bg-[#1A3A6B] hover:bg-[#122d56] text-white font-bold px-8 py-3.5 rounded-lg text-sm inline-flex items-center space-x-2 shadow-md transition-all"
          >
            <span>Partner with UNIQUE ENGINEERS on Your Next Plant</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
