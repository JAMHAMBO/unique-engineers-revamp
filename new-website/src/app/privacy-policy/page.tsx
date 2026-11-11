import React from "react";
import Link from "next/link";
import { companyData } from "@/data/company";
import { SectionHeader } from "@/components/common/SectionHeader";
import { ShieldCheck, ArrowRight } from "lucide-react";

export const metadata = {
  title: "Privacy Policy | UNIQUE ENGINEERS",
  description: "Privacy policy and personal data protection principles for UNIQUE ENGINEERS.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="py-12 sm:py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <SectionHeader
          badge="Legal & Compliance"
          title="Privacy Policy"
          subtitle="Last updated: November 2026. How UNIQUE ENGINEERS handles corporate and personal information."
        />

        <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed text-sm space-y-6">
          <p>
            At <strong>{companyData.name}</strong> (&ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;), we are committed to safeguarding the privacy and confidentiality of our website visitors, clients, and partners. This Privacy Policy outlines our practices regarding the collection, use, and protection of information obtained through our website (<strong>uniqueengineers.com</strong>).
          </p>

          <h3 className="text-lg font-bold font-heading text-slate-900 mt-6">
            1. Information We Collect
          </h3>
          <p>
            We collect information strictly when you voluntarily submit it to us via our Request for Quote (RFQ) forms, candidate application forms, or direct email inquiries. This may include:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Your name, job title, and organization</li>
            <li>Corporate contact details: phone number, email address, and office location</li>
            <li>Project specifications, technical drawings, and tender documents</li>
            <li>For job applicants: CVs, resumes, work history, and trade certifications</li>
          </ul>

          <h3 className="text-lg font-bold font-heading text-slate-900 mt-6">
            2. How We Use Your Information
          </h3>
          <p>
            The information we collect is utilized exclusively for legitimate business purposes:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Preparing commercial and technical quotations in response to your RFQ</li>
            <li>Communicating regarding site inspections, fabrication schedules, and project tenders</li>
            <li>Evaluating employment applications and scheduling technical trade interviews</li>
            <li>Statutory compliance, audit reporting, and legal recordkeeping</li>
          </ul>

          <h3 className="text-lg font-bold font-heading text-slate-900 mt-6">
            3. Data Confidentiality & Non-Disclosure
          </h3>
          <p>
            We do not sell, rent, or trade your contact information or engineering project specifications to any third-party marketing companies. Information is shared only with internal technical estimation leads and project managers who require it to prepare your engineering quote. Where required by EPC contractors, standard non-disclosure agreements (NDAs) govern all tender materials.
          </p>

          <h3 className="text-lg font-bold font-heading text-slate-900 mt-6">
            4. Security Controls
          </h3>
          <p>
            We implement industry-standard administrative and technical security measures to protect your submissions against unauthorized access, loss, or alteration. All web transmissions over our portal utilize Transport Layer Security (TLS/HTTPS).
          </p>

          <h3 className="text-lg font-bold font-heading text-slate-900 mt-6">
            5. Contacting Our Data Officer
          </h3>
          <p>
            If you have questions regarding this Privacy Policy or wish to review, update, or remove your contact information from our active records, please contact us at:
          </p>
          <div className="bg-slate-50 p-4 rounded-lg border border-slate-200 text-xs">
            <p className="font-bold text-slate-900">{companyData.name}</p>
            <p className="text-slate-600">{companyData.registeredOffice.fullAddress}</p>
            <p className="text-slate-600 mt-1">
              Email:{" "}
              <a href={`mailto:${companyData.keyContact.email}`} className="text-brand-600 underline">
                {companyData.keyContact.email}
              </a>
            </p>
          </div>
        </div>

        <div className="pt-6 border-t border-slate-200">
          <Link
            href="/contact"
            className="inline-flex items-center space-x-1.5 text-xs font-bold text-brand-600 hover:text-brand-700"
          >
            <span>Have a privacy query? Reach out directly</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}

