import React from "react";
import Link from "next/link";
import Image from "next/image";
import { servicesData, serviceCategories } from "@/data/services";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export function FeaturedServices() {
  const featured = servicesData.filter((s) => s.featured).slice(0, 8);

  return (
    <section className="py-16 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-[#1A3A6B] mb-2">
              Turnkey Industrial Contracting
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
              Our Core Engineering Services
            </h2>
            <p className="mt-2 text-sm text-slate-600 max-w-2xl">
              From heavy fabrication and turnkey automotive paint shops to complex
              overhead Power &amp; Free conveyors and critical shutdowns.
            </p>
          </div>
          <div className="mt-4 md:mt-0 shrink-0">
            <Link
              href="/services"
              className="inline-flex items-center space-x-2 text-sm font-semibold text-[#1A3A6B] hover:text-blue-900 border-b border-[#1A3A6B]/30 hover:border-[#1A3A6B] pb-0.5 transition-colors"
            >
              <span>View All 24 Services</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* 4 Category Filter Bar / Tabs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {serviceCategories.map((cat) => (
            <div
              key={cat.id}
              className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm hover:border-brand-500 hover:shadow-md transition-all group"
            >
              <h3 className="font-bold text-base text-slate-900 group-hover:text-brand-600 transition-colors">
                {cat.name}
              </h3>
              <p className="text-xs text-slate-500 mt-1 line-clamp-2">
                {cat.description}
              </p>
              <Link
                href={`/services#${cat.id}`}
                className="mt-3 inline-flex items-center space-x-1 text-xs font-bold text-brand-600 group-hover:translate-x-0.5 transition-transform"
              >
                <span>View Disciplines</span>
                <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          ))}
        </div>

        {/* Featured Service Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featured.map((service) => (
            <div
              key={service.slug}
              className="bg-white rounded-xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-lg transition-all duration-200 flex flex-col group"
            >
              {/* Image Preview */}
              <div className="relative h-48 w-full bg-slate-100 overflow-hidden">
                <Image
                  src={service.images[0] || "/images/services/ms_structures/1.png"}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-3 left-3">
                  <span className="bg-brand-950/80 text-white text-[11px] font-semibold px-2.5 py-1 rounded backdrop-blur-sm">
                    {service.categoryName.split(" ")[0]}
                  </span>
                </div>
              </div>

              {/* Service Info */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h4 className="font-bold text-base text-slate-900 group-hover:text-brand-600 transition-colors line-clamp-2">
                    {service.title}
                  </h4>
                  <p className="text-xs text-slate-600 mt-2 line-clamp-3 leading-relaxed">
                    {service.summary}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-100">
                  <Link
                    href={`/services/${service.slug}`}
                    className="inline-flex items-center justify-between w-full text-xs font-bold text-brand-600 group-hover:text-brand-700"
                  >
                    <span>Technical Scope & Photos</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner CTA */}
        <div className="mt-12 bg-[#0e2140] border-l-4 border-amber-400 rounded-sm p-7 sm:p-9 text-white flex flex-col md:flex-row items-center justify-between shadow-lg">
          <div className="max-w-2xl mb-5 md:mb-0">
            <h3 className="text-xl font-bold">
              Have a Custom Industrial Project or Urgent Plant Shutdown?
            </h3>
            <p className="text-slate-300 text-sm mt-1">
              Our 200+ workforce and specialized equipment fleet can be mobilized rapidly
              across India with zero startup delay.
            </p>
          </div>
          <div className="flex items-center space-x-3 shrink-0">
            <Link
              href="/contact"
              className="bg-amber-500 hover:bg-amber-400 text-slate-900 font-bold px-6 py-3 rounded-sm text-sm transition-colors shadow-md"
            >
              Discuss Your Project
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

