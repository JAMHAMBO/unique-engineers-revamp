import React from "react";
import Link from "next/link";
import { HeroSlider } from "@/components/home/HeroSlider";
import { FeaturedServices } from "@/components/home/FeaturedServices";
import { ClientLogoMarquee } from "@/components/home/ClientLogoMarquee";
import { companyData, toTelHref } from "@/data/company";
import { projectsData } from "@/data/projects";
import { CheckCircle2, ArrowRight, Factory, Users } from "lucide-react";

export default function HomePage() {
  const featuredProjects = projectsData.filter((p) => p.featured).slice(0, 4);

  return (
    <div>
      {/* 1. Above-the-Fold Industrial Hero with 4-Card Credentials Matrix */}
      <HeroSlider />

      {/* 2. Full-Color Authentic Client & EPC Partners Grid */}
      <ClientLogoMarquee />

      {/* 3. About Company Overview Section */}
      <section className="py-16 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-5">
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-[#1A3A6B] mb-2">Who We Are</p>
                <h2 className="text-3xl font-bold text-slate-900 leading-tight">
                  Engineering with Integrity, Competency &amp; Reputation Since 1999
                </h2>
              </div>
              <p className="text-slate-600 leading-relaxed">
                UNIQUE ENGINEERS is a premier Indian turnkey engineering contractor specialising in
                Plant Installation, Heavy Steel Fabrication, Manpower Supply, Plant Maintenance,
                and Conveyor Installation for Automotive Paint Shops and Industrial facilities nationwide.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Headquartered in <strong className="text-slate-800">Fort, Mumbai</strong> with an in-house
                fabrication facility in <strong className="text-slate-800">Bhiwandi, Maharashtra</strong>,
                we bring 25+ years of hands-on expertise to every engagement, consistently meeting
                global EPC standards.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="border-l-2 border-[#1A3A6B] pl-4 py-1">
                  <div className="flex items-center space-x-2">
                    <Factory className="w-4 h-4 text-[#1A3A6B] shrink-0" />
                    <h3 className="font-semibold text-slate-900 text-sm">In-House Fabrication Works</h3>
                  </div>
                  <p className="text-xs text-slate-500 mt-1">
                    Gala-106, Priya Complex, Bhiwandi — modern welding, cutting &amp; lifting fleet.
                  </p>
                </div>
                <div className="border-l-2 border-[#1A3A6B] pl-4 py-1">
                  <div className="flex items-center space-x-2">
                    <Users className="w-4 h-4 text-[#1A3A6B] shrink-0" />
                    <h3 className="font-semibold text-slate-900 text-sm">200+ Skilled Personnel</h3>
                  </div>
                  <p className="text-xs text-slate-500 mt-1">
                    Certified welders, riggers, fitters, supervisors — all ESIC &amp; PF compliant.
                  </p>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  href="/about"
                  className="inline-flex items-center space-x-2 text-sm font-semibold text-[#1A3A6B] hover:text-blue-900 border-b border-[#1A3A6B]/30 hover:border-[#1A3A6B] pb-0.5 transition-colors"
                >
                  <span>Learn about our heritage &amp; mission</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Right: Advantage list */}
            <div className="bg-[#0e2140] text-white rounded-sm p-7 border-l-4 border-amber-400">
              <div className="border-b border-slate-700 pb-5 mb-5">
                <p className="text-xs font-bold text-amber-400 uppercase tracking-widest mb-1">The UNIQUE ENGINEERS Advantage</p>
                <h3 className="text-xl font-bold text-white">Why Leading Automotive OEMs Choose Us</h3>
              </div>

              <div className="space-y-5">
                {[
                  {
                    title: "Zero Safety Casualties Since 1999",
                    desc: "Stringent PPE compliance, ISO fire gear, and fall-protection protocols on every site.",
                  },
                  {
                    title: "Silicon-Free & Non-Toxic Paint Shop Compliance",
                    desc: "100% silicone-free tools and gaskets ensuring zero crater defects on automotive finishes.",
                  },
                  {
                    title: "Scalable Multi-Site Operations",
                    desc: "In-house machinery fleet and 200+ workforce for simultaneous parallel project execution.",
                  },
                  {
                    title: "Global EPC Collaboration Standards",
                    desc: "25+ years co-executing with German, Japanese, and European technology suppliers.",
                  },
                ].map((item) => (
                  <div key={item.title} className="flex items-start space-x-3">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-semibold text-white">{item.title}</p>
                      <p className="text-xs text-slate-400 mt-0.5 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-5 border-t border-slate-700 flex items-center justify-between text-xs">
                <span className="text-slate-400">ESIC · PF · GST Fully Compliant</span>
                <Link
                  href="/safety"
                  className="text-amber-400 hover:text-amber-300 font-semibold inline-flex items-center space-x-1"
                >
                  <span>View Safety Record</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Core Services Showcase */}
      <FeaturedServices />

      {/* 5. Project Track Record Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3 bg-brand-50 text-brand-700 border border-brand-200">
                <span>Proven Execution</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-heading tracking-tight">
                Featured Turnkey Installations
              </h2>
              <p className="mt-3 text-base text-slate-600 max-w-2xl">
                A selection from our track record of over 500+ projects and shutdowns
                delivered for leading Indian and international automotive manufacturers.
              </p>
            </div>
            <div className="mt-4 md:mt-0">
              <Link
                href="/projects"
                className="inline-flex items-center space-x-2 text-sm font-bold text-brand-600 hover:text-brand-700"
              >
                <span>View Full 500+ Project Portfolio</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {featuredProjects.map((project) => (
              <div
                key={project.id}
                className="bg-slate-50 border border-slate-200 rounded-xl p-6 hover:border-brand-500 hover:shadow-md transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between text-xs text-slate-500 mb-2">
                    <span className="font-bold text-brand-600 uppercase tracking-wide">
                      {project.client}
                    </span>
                    <span>{project.location}</span>
                  </div>
                  <h3 className="font-bold text-lg text-slate-900 mb-2">
                    {project.scope.split(":")[0] || project.scope.slice(0, 50)}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {project.scope}
                  </p>
                </div>

                <div className="mt-4 pt-4 border-t border-slate-200/60 flex items-center justify-between text-xs text-slate-500">
                  <span>{project.timeframe || "Completed"}</span>
                  {project.epcPartner && (
                    <span className="font-semibold text-slate-700">
                      Ref: {project.epcPartner}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Final Conversion Section */}
      <section className="py-16 bg-[#0e2140] text-white border-t-4 border-amber-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs font-bold uppercase tracking-widest text-amber-400 mb-3">Get In Touch</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Ready to Partner on Your Next Industrial Project?
          </h2>
          <p className="mt-4 text-slate-300 max-w-2xl mx-auto">
            Contact our business development and engineering team directly to discuss
            tender specifications, project schedules, or site surveys.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="bg-amber-500 hover:bg-amber-400 text-slate-900 font-bold px-8 py-3.5 rounded-sm shadow-lg transition-all text-sm inline-flex items-center space-x-2"
            >
              <span>Request a Project Quotation</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href={toTelHref(companyData.keyContact.phone)}
              className="border border-slate-500 hover:border-white text-white font-semibold px-8 py-3.5 rounded-sm transition-all text-sm inline-flex items-center space-x-2"
            >
              <span>Call: {companyData.keyContact.phone}</span>
            </a>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400">
            <span>Direct: {companyData.keyContact.name} · {companyData.keyContact.phone}</span>
            <span className="text-slate-600">·</span>
            <span>Registered Office: Fort, Mumbai – 400 001</span>
            <span className="text-slate-600">·</span>
            <span>Works: Bhiwandi – 421 302</span>
          </div>
        </div>
      </section>
    </div>
  );
}

