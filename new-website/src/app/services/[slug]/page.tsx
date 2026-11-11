import React from "react";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { servicesData, ServiceItem } from "@/data/services";
import { companyData } from "@/data/company";
import {
  CheckCircle2,
  ArrowRight,
  PhoneCall,
  ShieldCheck,
  ChevronRight,
  MessageCircle,
  FileText,
} from "lucide-react";

interface ServicePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return servicesData.map((s) => ({
    slug: s.slug,
  }));
}

export async function generateMetadata({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = servicesData.find((s) => s.slug === slug);
  if (!service) return { title: "Service Not Found" };

  return {
    title: `${service.title} | UNIQUE ENGINEERS`,
    description: service.summary,
  };
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = servicesData.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  const relatedServices = servicesData
    .filter((s) => s.category === service.category && s.slug !== service.slug)
    .slice(0, 4);

  return (
    <div className="py-10 sm:py-14 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center space-x-2 text-xs text-slate-500">
          <Link href="/" className="hover:text-brand-600 transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <Link href="/services" className="hover:text-brand-600 transition-colors">
            Services
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <span className="font-semibold text-slate-800 line-clamp-1">
            {service.shortTitle}
          </span>
        </nav>

        {/* Top Header Card */}
        <div className="bg-gradient-to-br from-brand-950 via-slate-900 to-brand-900 text-white rounded-2xl p-8 sm:p-12 shadow-xl">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-brand-900/80 border border-brand-700/60 text-xs font-semibold text-brand-300">
              <span>{service.categoryName}</span>
            </div>
            <h1 className="text-2xl sm:text-4xl font-extrabold font-heading text-white leading-tight">
              {service.title}
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              {service.summary}
            </p>
          </div>
        </div>

        {/* Main Content Layout with Sticky Sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Main Column (8 cols) */}
          <div className="lg:col-span-8 space-y-10">
            {/* Overview Narrative */}
            <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed text-base">
              <h2 className="text-2xl font-bold font-heading text-slate-900 mb-4">
                Service Overview & Capabilities
              </h2>
              <p>{service.description}</p>
            </div>

            {/* Scope of Work */}
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 sm:p-8 space-y-4">
              <h3 className="text-xl font-bold font-heading text-slate-900 flex items-center space-x-2">
                <FileText className="w-5 h-5 text-brand-600" />
                <span>Technical Scope of Work</span>
              </h3>
              <ul className="space-y-3 pt-2">
                {service.scopeOfWork.map((scope, idx) => (
                  <li
                    key={idx}
                    className="flex items-start space-x-3 text-sm text-slate-700"
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span>{scope}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Key Engineering Features */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold font-heading text-slate-900">
                Key Engineering Highlights
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {service.keyFeatures.map((feature, idx) => (
                  <div
                    key={idx}
                    className="border border-slate-200 rounded-lg p-4 bg-white shadow-sm flex items-start space-x-3"
                  >
                    <div className="w-6 h-6 rounded-md bg-brand-50 text-brand-600 flex items-center justify-center shrink-0 mt-0.5">
                      <ShieldCheck className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-xs sm:text-sm font-semibold text-slate-800">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Project Photo Gallery */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold font-heading text-slate-900">
                  Site Installation Photographs
                </h3>
                <span className="text-xs text-slate-500">
                  {service.images.length} Verified Photos
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {service.images.map((img, idx) => (
                  <div
                    key={idx}
                    className="relative h-64 w-full rounded-xl overflow-hidden bg-slate-100 border border-slate-200 shadow-sm group"
                  >
                    <Image
                      src={img}
                      alt={`${service.shortTitle} project installation photo ${idx + 1}`}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                      <p className="text-xs text-white font-medium">
                        {service.shortTitle} · Site Photo {idx + 1}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar Column (4 cols) */}
          <div className="lg:col-span-4 space-y-8">
            {/* Direct RFQ / Contact Box */}
            <div className="bg-brand-950 text-white rounded-2xl p-6 sm:p-8 shadow-xl border border-brand-800 space-y-6">
              <div>
                <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">
                  Request a Quote
                </span>
                <h4 className="text-xl font-bold font-heading text-white mt-1">
                  Inquire for {service.shortTitle}
                </h4>
                <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                  Discuss project schedules, technical specifications, or request an
                  on-site engineering evaluation.
                </p>
              </div>

              <div className="space-y-3 pt-2">
                <Link
                  href="/contact"
                  className="w-full bg-brand-600 hover:bg-brand-500 text-white font-bold py-3 px-4 rounded-lg text-sm text-center block shadow transition-colors"
                >
                  Request a Formal Quotation
                </Link>
                <a
                  href={`https://wa.me/919920555852?text=${encodeURIComponent(`Hello Mr. Murtaza, I am inquiring about ${service.title} from UNIQUE ENGINEERS.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-2.5 px-4 rounded-lg text-xs text-center inline-flex items-center justify-center space-x-2 transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp Mr. Murtaza</span>
                </a>
              </div>

              <div className="pt-4 border-t border-brand-800 space-y-2 text-xs text-slate-400">
                <div className="flex items-center space-x-2">
                  <PhoneCall className="w-3.5 h-3.5 text-brand-400 shrink-0" />
                  <span>Direct: {companyData.keyContact.phone}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <PhoneCall className="w-3.5 h-3.5 text-brand-400 shrink-0" />
                  <span>Office: {companyData.keyContact.officePhone}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Zero Casualty Safety Certified</span>
                </div>
              </div>
            </div>

            {/* Related Services in Same Category */}
            {relatedServices.length > 0 && (
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 space-y-4">
                <h4 className="font-bold text-base text-slate-900 font-heading">
                  Related {service.categoryName.split(" ")[0]} Services
                </h4>
                <div className="space-y-2">
                  {relatedServices.map((rel) => (
                    <Link
                      key={rel.slug}
                      href={`/services/${rel.slug}`}
                      className="block p-3 rounded-lg bg-white border border-slate-200 hover:border-brand-500 hover:shadow-sm transition-all group"
                    >
                      <p className="text-xs font-bold text-slate-800 group-hover:text-brand-600 transition-colors">
                        {rel.title}
                      </p>
                      <span className="text-[11px] text-slate-400 flex items-center space-x-1 mt-1 group-hover:text-brand-500">
                        <span>View specifications</span>
                        <ArrowRight className="w-3 h-3" />
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

