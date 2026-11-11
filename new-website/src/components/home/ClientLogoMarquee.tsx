"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Building2, Handshake } from "lucide-react";

// Curated full-color client logos extracted from authentic PDF and company records
const clientLogos = [
  { name: "Mahindra & Mahindra", file: "/images/clients/mahindra.png" },
  { name: "TATA Motors", file: "/images/clients/tata_motors.png" },
  { name: "Toyota Kirloskar", file: "/images/clients/toyota.png" },
  { name: "Mercedes-Benz", file: "/images/clients/mercedes_benz.png" },
  { name: "Volkswagen", file: "/images/clients/volkswagen_full.png" },
  { name: "Volvo Eicher (VECV)", file: "/images/clients/eicher.png" },
  { name: "VOLVO India", file: "/images/clients/volvo.png" },
  { name: "India YAMAHA", file: "/images/clients/yamaha.png" },
  { name: "Royal Enfield", file: "/images/clients/royal_enfield.png" },
  { name: "OLA Electric", file: "/images/clients/ola_electric.png" },
  { name: "JCB India", file: "/images/clients/jcb.png" },
  { name: "John Deere", file: "/images/clients/john_deere.png" },
  { name: "New Holland CNH", file: "/images/clients/cnh.png" },
  { name: "Escorts India", file: "/images/clients/escorts.png" },
  { name: "Hero MotoCorp", file: "/images/clients/hero_honda.png" },
  { name: "Bajaj Auto", file: "/images/clients/bajaj.png" },
  { name: "Fiat Automobiles", file: "/images/clients/clients1.png" },
  { name: "General Motors India", file: "/images/clients/gm.png" },
  { name: "TATA Hitachi", file: "/images/clients/tata_hitachi.png" },
  { name: "Ashok Leyland", file: "/images/clients/ashok_leyland.png" },
  { name: "Wheels India Limited", file: "/images/clients/wheels_india.png" },
  { name: "JSW Steel", file: "/images/clients/jsw.png" },
  { name: "Forbes Marshall", file: "/images/clients/forbes_marshall.png" },
  { name: "Greaves Cotton", file: "/images/clients/greaves.png" },
  { name: "Motherson Group (MATE)", file: "/images/clients/motherson.png" },
  { name: "HUF India", file: "/images/clients/huf.png" },
  { name: "Tata Cummins", file: "/images/clients/cummins.jpg" },
  { name: "Piaggio", file: "/images/clients/piaggio.png" },
  { name: "Thermax", file: "/images/clients/thermax.png" },
  { name: "HYDAC India", file: "/images/clients/hydac.png" },
];

const epcPartners = [
  { name: "Dürr India", logo: "/images/clients/durr.png", country: "Germany", specialty: "Global Leader in Automated Paint Systems" },
  { name: "Eisenmann India", logo: "/images/clients/eisenmann.png", country: "Germany", specialty: "Automotive Finishing & Enameling Systems" },
  { name: "Bullows Paints", logo: "/images/clients/bullows.png", country: "India / UK", specialty: "Spray Booths, Pre-treatment & Finishing Systems" },
  { name: "Taikisha", logo: "/images/clients/taikisha.png", country: "Japan", specialty: "Japanese Automotive Paint Finishing Systems" },
  { name: "GEICO Paintshop", logo: "/images/clients/geico.png", country: "Italy", specialty: "Turnkey Automotive Paintshop Engineering" },
];

export function ClientLogoMarquee() {
  return (
    <section className="bg-slate-50 border-t border-b border-slate-200 py-10 sm:py-14">
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

        {/* Full-Color Client Logo Grid — ALWAYS vibrant original color, NO grayscale */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4 mb-10">
          {clientLogos.map((client) => (
            <div
              key={client.name}
              className="bg-white border border-slate-200 rounded-lg p-2.5 h-20 sm:h-22 flex items-center justify-center shadow-xs hover:border-[#1A3A6B] hover:shadow-md transition-all group relative overflow-hidden"
              title={client.name}
            >
              <div className="relative w-full h-full">
                <Image
                  src={client.file}
                  alt={`${client.name} Logo`}
                  fill
                  className="object-contain p-1"
                  sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 16vw"
                />
              </div>
            </div>
          ))}
        </div>

        {/* EPC Technology Partners Section */}
        <div className="bg-white border border-slate-200 rounded-xl p-5 sm:p-7 shadow-xs">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 mb-5 border-b border-slate-100">
            <div className="flex items-center space-x-2.5">
              <div className="w-8 h-8 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center text-[#1A3A6B]">
                <Handshake className="w-4 h-4" />
              </div>
              <div>
                <p className="text-[11px] font-bold uppercase tracking-widest text-[#1A3A6B]">
                  Global OEM &amp; EPC Vendor Registrations
                </p>
                <h3 className="text-base sm:text-lg font-bold font-heading text-slate-900">
                  Sub-Contractor to Leading Paint Shop Technology Providers
                </h3>
              </div>
            </div>
            <Link
              href="/clients"
              className="mt-3 sm:mt-0 inline-flex items-center space-x-1.5 text-xs font-bold text-[#1A3A6B] hover:text-blue-800"
            >
              <span>View full client credentials</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
            {epcPartners.map((partner) => (
              <div
                key={partner.name}
                className="bg-slate-50 border border-slate-200 rounded-lg p-3 flex flex-col items-center justify-center text-center hover:border-[#1A3A6B] hover:bg-white hover:shadow-sm transition-all"
              >
                <div className="h-12 w-full relative mb-2 flex items-center justify-center">
                  <Image
                    src={partner.logo}
                    alt={`${partner.name} Logo`}
                    fill
                    className="object-contain"
                    sizes="(max-width: 640px) 50vw, 20vw"
                  />
                </div>
                <p className="text-xs font-bold text-slate-900 font-heading">
                  {partner.name}
                </p>
                <p className="text-[10px] text-slate-500 font-medium">
                  {partner.country}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
