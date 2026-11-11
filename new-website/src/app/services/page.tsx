import React from "react";
import Link from "next/link";
import Image from "next/image";
import { servicesData, serviceCategories } from "@/data/services";
import { SectionHeader } from "@/components/common/SectionHeader";
import { ArrowRight, CheckCircle2, PhoneCall } from "lucide-react";

export const metadata = {
  title: "Engineering Services | All 24 Turnkey Industrial Disciplines",
  description:
    "Comprehensive turnkey services: Paint Finishing Systems, Power & Free Conveyors, MS Structures, Curing Ovens, Piping, Spray Booths, and Critical Shutdowns.",
};

export default function ServicesPage() {
  return (
    <div className="py-12 sm:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Page Header */}
        <div className="border-b border-slate-200 pb-10">
          <SectionHeader
            badge="Turnkey Capabilities"
            title="Our Engineering Services"
            subtitle="Design, Fabrication, Supply, Installation, and Commissioning of Paint & Process Systems for Automotive and Process Industries across India."
          />

          {/* Quick Anchor Jump Links */}
          <div className="flex flex-wrap gap-2 pt-2">
            {serviceCategories.map((cat) => (
              <a
                key={cat.id}
                href={`#${cat.id}`}
                className="px-4 py-2 rounded-lg text-xs font-bold bg-slate-100 hover:bg-brand-50 hover:text-brand-600 text-slate-700 transition-colors border border-slate-200"
              >
                {cat.name}
              </a>
            ))}
          </div>
        </div>

        {/* Categorized Services Groups */}
        {serviceCategories.map((category) => {
          const catServices = servicesData.filter(
            (s) => s.category === category.id
          );

          return (
            <div key={category.id} id={category.id} className="scroll-mt-24 space-y-8">
              <div className="border-l-4 border-brand-600 pl-4">
                <h3 className="text-2xl font-bold font-heading text-slate-900">
                  {category.name}
                </h3>
                <p className="text-sm text-slate-500 mt-1 max-w-3xl">
                  {category.description}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {catServices.map((service) => (
                  <div
                    key={service.slug}
                    className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-lg transition-all duration-200 flex flex-col justify-between group"
                  >
                    <div>
                      {/* Image Thumbnail */}
                      <div className="relative h-48 w-full bg-slate-100 overflow-hidden">
                        <Image
                          src={
                            service.images[0] ||
                            "/images/services/ms_structures/1.png"
                          }
                          alt={service.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>

                      {/* Content */}
                      <div className="p-6">
                        <h4 className="font-bold text-lg text-slate-900 font-heading group-hover:text-brand-600 transition-colors">
                          {service.title}
                        </h4>
                        <p className="text-xs text-slate-600 mt-2.5 leading-relaxed line-clamp-3">
                          {service.summary}
                        </p>

                        {/* Key Features Bullet List */}
                        <div className="mt-4 pt-3 border-t border-slate-100 space-y-1.5">
                          {service.keyFeatures.slice(0, 3).map((f) => (
                            <div
                              key={f}
                              className="flex items-start space-x-2 text-xs text-slate-500"
                            >
                              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                              <span className="line-clamp-1">{f}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="p-6 pt-0">
                      <Link
                        href={`/services/${service.slug}`}
                        className="inline-flex items-center justify-between w-full bg-slate-50 group-hover:bg-brand-50 text-slate-700 group-hover:text-brand-700 font-bold text-xs px-4 py-2.5 rounded-lg border border-slate-200 group-hover:border-brand-200 transition-colors"
                      >
                        <span>Full Scope & Gallery</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}

        {/* Bottom Help Banner */}
        <div className="bg-slate-900 rounded-2xl p-8 sm:p-12 text-white flex flex-col md:flex-row items-center justify-between shadow-xl">
          <div className="max-w-2xl mb-6 md:mb-0">
            <h3 className="text-2xl font-bold font-heading">
              Looking for a Complete Turnkey Automotive Paint Shop Package?
            </h3>
            <p className="text-slate-300 text-sm mt-2">
              We integrate civil coordination, mechanical fabrication, conveyor tracks,
              curing ovens, and robotic cells into a unified, high-performance plant handover.
            </p>
          </div>
          <Link
            href="/contact"
            className="bg-brand-600 hover:bg-brand-500 text-white font-bold px-6 py-3.5 rounded-lg text-sm transition-all shadow-md inline-flex items-center space-x-2 shrink-0"
          >
            <PhoneCall className="w-4 h-4 text-amber-400" />
            <span>Request Detailed Quotation</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

