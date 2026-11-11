"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { servicesData } from "@/data/services";
import { SectionHeader } from "@/components/common/SectionHeader";
import { Filter, ArrowRight, ExternalLink } from "lucide-react";

interface GalleryPhoto {
  src: string;
  serviceTitle: string;
  category: string;
  slug: string;
}

export default function GalleryPage() {
  const [selectedFilter, setSelectedFilter] = useState<string>("all");

  // Collect all photos from servicesData
  const allPhotos: GalleryPhoto[] = servicesData.flatMap((service) =>
    service.images.map((img) => ({
      src: img,
      serviceTitle: service.shortTitle,
      category: service.category,
      slug: service.slug,
    }))
  );

  const filterTabs = [
    { id: "all", label: "All Project Photos" },
    { id: "paint-finishing", label: "Paint Finishing & Booths" },
    { id: "conveyors-handling", label: "Conveyors & Handling" },
    { id: "structural-piping", label: "Structures & Piping" },
    { id: "plant-operations", label: "Plant Ops & Shutdowns" },
  ];

  const displayedPhotos =
    selectedFilter === "all"
      ? allPhotos
      : allPhotos.filter((p) => p.category === selectedFilter);

  return (
    <div className="py-12 sm:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="border-b border-slate-200 pb-10">
          <SectionHeader
            badge="Project Archive"
            title="Installation & Project Gallery"
            subtitle="Photographic record of our structural fabrications, automated conveyor loops, spray booths, industrial ovens, and turnkey plant installations across India."
          />

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 pt-2">
            <Filter className="w-4 h-4 text-slate-400 mr-1" />
            {filterTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedFilter(tab.id)}
                className={`px-4 py-2 rounded-lg text-xs font-bold transition-all border ${
                  selectedFilter === tab.id
                    ? "bg-brand-600 text-white border-brand-600 shadow-sm"
                    : "bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {displayedPhotos.map((photo, index) => (
            <div
              key={`${photo.slug}-${index}`}
              className="group relative h-64 rounded-xl overflow-hidden bg-slate-100 border border-slate-200 shadow-sm hover:shadow-lg transition-all duration-300"
            >
              <Image
                src={photo.src}
                alt={`${photo.serviceTitle} site photo`}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-4">
                <span className="text-xs font-bold text-white">
                  {photo.serviceTitle}
                </span>
                <Link
                  href={`/services/${photo.slug}`}
                  className="mt-1 inline-flex items-center space-x-1 text-[11px] font-semibold text-brand-300 hover:text-white"
                >
                  <span>View Specifications</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8 text-center max-w-2xl mx-auto">
          <h3 className="font-bold text-lg text-slate-900 font-heading">
            Need High-Resolution Engineering Drawings or Reference Albums?
          </h3>
          <p className="text-xs text-slate-600 mt-2">
            Detailed layout diagrams, general arrangement drawings, and site walkthrough
            records are available for prospective tender discussions.
          </p>
          <div className="mt-4">
            <Link
              href="/contact"
              className="inline-flex items-center space-x-1.5 text-xs font-bold text-brand-600 hover:text-brand-700"
            >
              <span>Contact Business Development</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

