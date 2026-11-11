"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { companyData } from "@/data/company";
import { serviceCategories } from "@/data/services";
import {
  Phone,
  Mail,
  ShieldCheck,
  Menu,
  X,
  ChevronDown,
  ArrowRight,
  MessageCircle,
  FileText,
} from "lucide-react";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-sm border-b border-slate-200">
      {/* 2. Main Navigation Bar — Proportionate, Clean, Expanded Width, Never Wraps */}
      <div className="max-w-[1440px] 2xl:max-w-[1560px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[70px] sm:h-[74px] lg:h-[78px]">

          {/* Logo — Left Aligned, Proportionate & Crisp */}
          <Link href="/" className="flex items-center group shrink-0 py-1">
            <div className="relative w-48 sm:w-56 lg:w-60 h-11 sm:h-[50px] lg:h-[58px]">
              <Image
                src="/images/logo.png"
                alt="UNIQUE ENGINEERS Logo"
                fill
                priority
                className="object-contain object-left"
              />
            </div>
          </Link>

          {/* Desktop Navigation Links — All items on ONE unified line with whitespace-nowrap */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-1.5 2xl:space-x-2">
            <Link
              href="/"
              className="px-2 xl:px-2.5 py-1.5 text-xs xl:text-[13px] font-semibold text-slate-700 hover:text-[#1A3A6B] hover:bg-slate-50 rounded transition-colors whitespace-nowrap"
            >
              Home
            </Link>

            <Link
              href="/about"
              className="px-2 xl:px-2.5 py-1.5 text-xs xl:text-[13px] font-semibold text-slate-700 hover:text-[#1A3A6B] hover:bg-slate-50 rounded transition-colors whitespace-nowrap"
            >
              About Us
            </Link>

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setServicesDropdownOpen(true)}
              onMouseLeave={() => setServicesDropdownOpen(false)}
            >
              <Link
                href="/services"
                className="px-2 xl:px-2.5 py-1.5 text-xs xl:text-[13px] font-semibold text-slate-700 hover:text-[#1A3A6B] hover:bg-slate-50 rounded transition-colors inline-flex items-center space-x-1 whitespace-nowrap"
              >
                <span>Services</span>
                <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
              </Link>

              {servicesDropdownOpen && (
                <div className="absolute top-full left-0 w-80 bg-white rounded-lg shadow-xl border border-slate-200 py-3 px-2 z-50">
                  <div className="px-3 py-1.5 border-b border-slate-100 mb-2">
                    <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                      Turnkey Industrial Disciplines
                    </p>
                  </div>
                  {serviceCategories.map((cat) => (
                    <Link
                      key={cat.id}
                      href={`/services#${cat.id}`}
                      className="block px-3 py-2 rounded-md hover:bg-blue-50 group transition-colors"
                    >
                      <p className="text-xs xl:text-sm font-semibold text-slate-800 group-hover:text-[#1A3A6B]">
                        {cat.name}
                      </p>
                      <p className="text-[11px] text-slate-500 line-clamp-1 mt-0.5">
                        {cat.description}
                      </p>
                    </Link>
                  ))}
                  <div className="pt-2 mt-2 border-t border-slate-100 px-3">
                    <Link
                      href="/services"
                      className="inline-flex items-center text-xs font-bold text-[#1A3A6B] hover:text-blue-800 space-x-1"
                    >
                      <span>Explore all 24 turnkey disciplines</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link
              href="/projects"
              className="px-2 xl:px-2.5 py-1.5 text-xs xl:text-[13px] font-semibold text-slate-700 hover:text-[#1A3A6B] hover:bg-slate-50 rounded transition-colors whitespace-nowrap"
            >
              Projects
            </Link>

            <Link
              href="/capabilities"
              className="px-2 xl:px-2.5 py-1.5 text-xs xl:text-[13px] font-semibold text-slate-700 hover:text-[#1A3A6B] hover:bg-slate-50 rounded transition-colors whitespace-nowrap"
            >
              Capabilities
            </Link>

            <Link
              href="/safety"
              className="px-2 xl:px-2.5 py-1.5 text-xs xl:text-[13px] font-semibold text-slate-700 hover:text-[#1A3A6B] hover:bg-slate-50 rounded transition-colors whitespace-nowrap"
            >
              Safety (EHS)
            </Link>

            <Link
              href="/clients"
              className="px-2 xl:px-2.5 py-1.5 text-xs xl:text-[13px] font-semibold text-slate-700 hover:text-[#1A3A6B] hover:bg-slate-50 rounded transition-colors whitespace-nowrap"
            >
              Clients
            </Link>

            <Link
              href="/gallery"
              className="px-2 xl:px-2.5 py-1.5 text-xs xl:text-[13px] font-semibold text-slate-700 hover:text-[#1A3A6B] hover:bg-slate-50 rounded transition-colors whitespace-nowrap"
            >
              Gallery
            </Link>

            <Link
              href="/contact"
              className="px-2 xl:px-2.5 py-1.5 text-xs xl:text-[13px] font-semibold text-slate-700 hover:text-[#1A3A6B] hover:bg-slate-50 rounded transition-colors whitespace-nowrap"
            >
              Contact
            </Link>
          </nav>

          {/* Desktop Right CTA Area — Aligned, Professional */}
          <div className="hidden lg:flex items-center space-x-2.5 xl:space-x-3 shrink-0">
            <a
              href="/Unique_Engineers_Company_Profile.pdf"
              download
              target="_blank"
              rel="noopener noreferrer"
              className="bg-slate-50 hover:bg-slate-100 border border-slate-300 hover:border-[#1A3A6B] text-slate-800 hover:text-[#1A3A6B] font-semibold px-3.5 py-2 rounded text-xs xl:text-[13px] transition-colors inline-flex items-center space-x-1.5 whitespace-nowrap shadow-2xs"
              title="Download Official 2026 Company Profile (PDF)"
            >
              <FileText className="w-3.5 h-3.5 text-[#1A3A6B] shrink-0" />
              <span>Brochure (PDF)</span>
            </a>

            <Link
              href="/contact"
              className="bg-[#1A3A6B] hover:bg-[#122d56] text-white font-semibold px-4 xl:px-4.5 py-2 rounded text-xs xl:text-[13px] shadow-sm transition-all duration-150 inline-flex items-center space-x-1.5 whitespace-nowrap"
            >
              <span>Request Quote</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden items-center space-x-2">
            <a
              href={`tel:${companyData.keyContact.phone.replace(/[^0-9+]/g, "")}`}
              className="p-2 text-[#1A3A6B] hover:bg-blue-50 rounded-full"
              aria-label="Call UNIQUE ENGINEERS"
            >
              <Phone className="w-5 h-5" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 hover:bg-slate-100 rounded-lg focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-slate-200 px-4 pt-3 pb-6 space-y-2 shadow-2xl">
          <div className="bg-slate-50 border border-slate-200 p-3 rounded-lg text-xs space-y-1 mb-3">
            <p className="font-bold text-[#1A3A6B]">
              UNIQUE ENGINEERS · Since 1999
            </p>
            <p className="text-slate-700">25+ Yrs · 500+ Projects · Zero Casualties</p>
            <p className="text-slate-600 pt-1">
              Contact: {companyData.keyContact.phone}
            </p>
          </div>

          {[
            { href: "/", label: "Home" },
            { href: "/about", label: "About Us" },
            { href: "/services", label: "Services (All 24 Disciplines)" },
            { href: "/projects", label: "Projects (500+ Delivered)" },
            { href: "/capabilities", label: "Workforce & Equipment" },
            { href: "/safety", label: "Safety (EHS Record)" },
            { href: "/clients", label: "Client Portfolio (50+ OEMs)" },
            { href: "/gallery", label: "Photo Gallery" },
            { href: "/careers", label: "Careers" },
            { href: "/contact", label: "Contact & Office Details" },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-sm font-semibold text-slate-800 hover:bg-slate-50 hover:text-[#1A3A6B] rounded-md transition-colors"
            >
              {item.label}
            </Link>
          ))}

          <div className="pt-4 border-t border-slate-100 flex flex-col space-y-2">
            <a
              href="/Unique_Engineers_Company_Profile.pdf"
              download
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-center border border-slate-300 text-slate-800 font-semibold py-2.5 rounded-lg inline-flex items-center justify-center space-x-2 hover:bg-slate-50 text-xs"
            >
              <FileText className="w-4 h-4 text-[#1A3A6B]" />
              <span>Download Company Brochure (PDF)</span>
            </a>
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center bg-[#1A3A6B] hover:bg-[#122d56] text-white font-semibold py-3 rounded-lg shadow-sm text-sm"
            >
              Request a Project Quote
            </Link>
            <a
              href={companyData.keyContact.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-center bg-emerald-600 hover:bg-emerald-500 text-white font-semibold py-2.5 rounded-lg inline-flex items-center justify-center space-x-2 text-sm"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Chat on WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
