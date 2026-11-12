import React from "react";
import Link from "next/link";
import { companyData } from "@/data/company";
import { SectionHeader } from "@/components/common/SectionHeader";
import { ArrowRight } from "lucide-react";

// " | UNIQUE ENGINEERS" is appended automatically by the root layout title template.
export const metadata = {
  title: "Terms of Use",
  description: "Terms and conditions governing the use of the UNIQUE ENGINEERS website and services.",
};

export default function TermsOfUsePage() {
  return (
    <div className="py-12 sm:py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <SectionHeader
          badge="Legal Agreement"
          title="Terms of Use"
          subtitle="Please read these terms carefully before utilizing our website or submitting project inquiries."
        />

        <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed text-sm space-y-6">
          <p>
            Welcome to the official website of <strong>{companyData.name}</strong>. By accessing or browsing <strong>uniqueengineers.com</strong>, you agree to comply with and be bound by the following terms and conditions of use.
          </p>

          <h3 className="text-lg font-bold font-heading text-slate-900 mt-6">
            1. Informational Purpose Only
          </h3>
          <p>
            The content on this website is for general informational purposes relating to our turnkey engineering capabilities, project track record, and industrial services. While we endeavor to keep specifications up to date, technical parameters, tonnages, and scopes for active contracts are governed exclusively by formal bilateral purchase orders, master service agreements, and technical annexures signed between UNIQUE ENGINEERS and the client.
          </p>

          <h3 className="text-lg font-bold font-heading text-slate-900 mt-6">
            2. Intellectual Property Rights
          </h3>
          <p>
            The UNIQUE ENGINEERS name, brand logos, technical photographs, project descriptions, and website design assets are the intellectual property of UNIQUE ENGINEERS or utilized under client consent. Third-party brand names, OEM client trademarks, and EPC partner logos displayed on this site (e.g. Mahindra, Tata Motors, Toyota, Eisenmann, Dürr) remain the exclusive trademarks of their respective owners and are referenced solely to identify delivered contractual engagements.
          </p>

          <h3 className="text-lg font-bold font-heading text-slate-900 mt-6">
            3. Limitation of Liability
          </h3>
          <p>
            UNIQUE ENGINEERS shall not be liable for any indirect, incidental, or consequential damages arising from the use of this website, temporary site unavailability, or reliance on information presented herein without direct commercial confirmation from our authorized engineering executives.
          </p>

          <h3 className="text-lg font-bold font-heading text-slate-900 mt-6">
            4. Jurisdiction & Governing Law
          </h3>
          <p>
            These Terms of Use and any commercial transactions or disputes arising out of the website shall be governed by and construed in accordance with the laws of the Republic of India, subject to the exclusive jurisdiction of the competent courts in <strong>Mumbai, Maharashtra</strong>.
          </p>
        </div>

        <div className="pt-6 border-t border-slate-200">
          <Link
            href="/contact"
            className="inline-flex items-center space-x-1.5 text-xs font-bold text-brand-600 hover:text-brand-700"
          >
            <span>Have questions regarding these terms? Contact us</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}

