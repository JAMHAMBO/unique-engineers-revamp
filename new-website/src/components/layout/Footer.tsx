import React from "react";
import Link from "next/link";
import Image from "next/image";
import { companyData } from "@/data/company";
import {
  MapPin,
  Phone,
  Mail,
  ShieldCheck,
  Building2,
  Factory,
  ArrowRight,
  ExternalLink,
} from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#071020] text-slate-300 pt-14 pb-10 border-t-4 border-amber-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 pb-14 border-b border-brand-900/60 align-center">
          {/* Column 1: Company Profile & Core Credentials */}
          <div className="space-y-4">
            <div className="relative w-48 h-12 bg-white rounded p-1.5 inline-block">
              <Image
                src="/images/logo.png"
                alt="UNIQUE ENGINEERS Logo"
                fill
                className="object-contain p-1"
              />
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              Operating continuously since 1999, UNIQUE ENGINEERS is a premier
              turnkey contractor for Automotive Paint Finishing Systems, Heavy
              Conveyors, MS Structures, and Industrial Facilities across India.
            </p>
            <div className="pt-2 space-y-2 text-xs">
              <div className="flex items-center space-x-2 text-slate-400">
                <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0" />
                <span>25+ Years of Engineering Excellence</span>
              </div>
              <div className="flex items-center space-x-2 text-slate-400">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>500+ Projects & Shutdowns Delivered</span>
              </div>
              <div className="flex items-center space-x-2 text-slate-400">
                <ShieldCheck className="w-4 h-4 text-blue-400 shrink-0" />
                <span>ZERO Safety Casualties Since Inception</span>
              </div>
            </div>
          </div>

          {/* Column 2: Registered Head Office */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2 text-white font-bold text-base border-l-2 border-brand-500 pl-2">
              <Building2 className="w-4 h-4 text-brand-400" />
              <span>Registered Head Office</span>
            </div>
            <div className="text-sm text-slate-400 space-y-2">
              <p className="font-semibold text-slate-200">
                {companyData.registeredOffice.addressLine1}
              </p>
              <p>{companyData.registeredOffice.addressLine2}</p>
              <p>
                {companyData.registeredOffice.city} –{" "}
                {companyData.registeredOffice.pincode},{" "}
                {companyData.registeredOffice.state}, India
              </p>
            </div>
            <div className="pt-2 space-y-2 text-xs">
              <div className="flex items-center space-x-2">
                <Phone className="w-3.5 h-3.5 text-brand-400 shrink-0" />
                <a
                  href={`tel:${companyData.keyContact.phone.replace(/[^0-9+]/g, "")}`}
                  className="hover:text-white transition-colors"
                >
                  {companyData.keyContact.phone} (Direct / WhatsApp)
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-3.5 h-3.5 text-brand-400 shrink-0" />
                <a
                  href={`tel:${companyData.keyContact.officePhone.replace(/[^0-9+]/g, "")}`}
                  className="hover:text-white transition-colors"
                >
                  {companyData.keyContact.officePhone} (Office Line)
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-3.5 h-3.5 text-brand-400 shrink-0" />
                <a
                  href={`mailto:${companyData.keyContact.email}`}
                  className="hover:text-white transition-colors"
                >
                  {companyData.keyContact.email}
                </a>
              </div>
            </div>
          </div>

          {/* Column 3: Works & Fabrication Facility */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2 text-white font-bold text-base border-l-2 border-amber-500 pl-2">
              <Factory className="w-4 h-4 text-amber-400" />
              <span>Works Facility</span>
            </div>
            <div className="text-sm text-slate-400 space-y-2">
              <p className="font-semibold text-slate-200">
                {companyData.worksAddress.addressLine1}
              </p>
              <p>{companyData.worksAddress.addressLine2}</p>
              <p>
                {companyData.worksAddress.city} –{" "}
                {companyData.worksAddress.pincode},{" "}
                {companyData.worksAddress.state}, India
              </p>
            </div>
            <div className="p-3 bg-brand-900/40 rounded-lg text-xs space-y-1.5 border border-brand-800/40">
              <p className="font-bold text-slate-200">Statutory Registrations:</p>
              <p className="text-slate-400">
                <span className="text-slate-300 font-semibold">GST IN:</span>{" "}
                {companyData.registrations.gst}
              </p>
              <p className="text-slate-400">
                <span className="text-slate-300 font-semibold">ESIC:</span>{" "}
                {companyData.registrations.esic}
              </p>
              <p className="text-slate-400">
                <span className="text-slate-300 font-semibold">PF:</span>{" "}
                {companyData.registrations.pf}
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Legal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 space-y-3 sm:space-y-0">
          <div>
            <p>
              © 1999 – {new Date().getFullYear()} {companyData.name}. All Rights
              Reserved. Characterized by Integrity, Competency & Reputation.
            </p>
          </div>
          <div className="flex items-center space-x-6">
            <Link
              href="/privacy-policy"
              className="hover:text-slate-300 transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms-of-use"
              className="hover:text-slate-300 transition-colors"
            >
              Terms of Use
            </Link>
            <Link
              href="/contact"
              className="text-brand-400 hover:text-white transition-colors"
            >
              Get In Touch
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

