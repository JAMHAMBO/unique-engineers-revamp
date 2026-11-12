import React from "react";
import Link from "next/link";
import { teamData } from "@/data/team";
import { SectionHeader } from "@/components/common/SectionHeader";
import {
  GraduationCap,
  Briefcase,
  CheckCircle2,
  Mail,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";

// " | UNIQUE ENGINEERS" is appended automatically by the root layout title template.
export const metadata = {
  title: "Leadership & Engineering Team",
  description:
    "Meet our seasoned engineering leadership: Mr. Murtaza, Mr. Gautam Basu, Mr. Vijay Bhide, and Mr. D.G. Bhatt — bringing over 100+ combined years of automotive paint shop execution.",
};

export default function TeamPage() {
  return (
    <div className="py-12 sm:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <div className="border-b border-slate-200 pb-10">
          <SectionHeader
            badge="Engineering Heritage"
            title="Leadership & Engineering Expertise"
            subtitle="Led by veterans of global paint finishing and material handling giants (Eisenmann, Haden International, Josts) with over a century of cumulative site execution experience."
          />
        </div>

        {/* Executive Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {teamData.map((member) => (
            <div
              key={member.name}
              className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm hover:border-brand-500 hover:shadow-lg transition-all duration-200 flex flex-col justify-between"
            >
              <div className="space-y-4">
                {/* Header Profile */}
                <div className="border-b border-slate-100 pb-4">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-xl font-bold font-heading text-slate-900">
                        {member.name}
                      </h3>
                      <p className="text-sm font-semibold text-brand-600 mt-0.5">
                        {member.role}
                      </p>
                    </div>
                    <span className="text-[11px] font-bold bg-brand-50 text-brand-700 px-3 py-1 rounded-full border border-brand-200 shrink-0">
                      {member.experience}
                    </span>
                  </div>

                  {/* Education & Credentials */}
                  <div className="flex items-center space-x-2 text-xs text-slate-500 mt-3">
                    <GraduationCap className="w-4 h-4 text-slate-400 shrink-0" />
                    <span className="font-medium text-slate-700">
                      {member.education}
                    </span>
                  </div>
                </div>

                {/* Background Narrative */}
                <p className="text-sm text-slate-600 leading-relaxed">
                  {member.background}
                </p>

                {/* Key Expertise Bullets */}
                <div className="pt-2">
                  <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2">
                    Core Technical Domains
                  </h4>
                  <ul className="space-y-1.5 text-xs text-slate-600">
                    {member.expertise.map((exp, idx) => (
                      <li key={idx} className="flex items-start space-x-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{exp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Key Projects if present */}
                {member.keyProjects && member.keyProjects.length > 0 && (
                  <div className="pt-2 border-t border-slate-100">
                    <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2 flex items-center space-x-1.5">
                      <Briefcase className="w-3.5 h-3.5 text-slate-400" />
                      <span>Notable Career Projects</span>
                    </h4>
                    <ul className="space-y-1 text-xs text-slate-500">
                      {member.keyProjects.map((proj, idx) => (
                        <li key={idx} className="line-clamp-2">
                          • {proj}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* Direct Inquiries Link */}
              <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between text-xs">
                {member.email ? (
                  <a
                    href={`mailto:${member.email}`}
                    className="text-brand-600 hover:text-brand-700 font-semibold flex items-center space-x-1.5"
                  >
                    <Mail className="w-3.5 h-3.5" />
                    <span>{member.email}</span>
                  </a>
                ) : (
                  <span className="text-slate-400">UNIQUE ENGINEERS Executive</span>
                )}
                <Link
                  href="/contact"
                  className="font-bold text-slate-700 hover:text-brand-600 flex items-center space-x-1"
                >
                  <span>Consult</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8 sm:p-12 text-center max-w-3xl mx-auto space-y-4">
          <ShieldCheck className="w-10 h-10 text-brand-600 mx-auto" />
          <h3 className="text-2xl font-bold font-heading text-slate-900">
            Decades of Engineering Leadership Backing Every Project
          </h3>
          <p className="text-sm text-slate-600 leading-relaxed">
            Our consultants and site leaders bring unmatched institutional memory from
            historic projects with PAL Peugeot, Fiat India, Tata Motors, John Deere,
            Mercedes-Benz, and Yamaha.
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="bg-brand-600 hover:bg-brand-700 text-white font-bold px-8 py-3 rounded-lg text-sm inline-flex items-center space-x-2 shadow transition-all"
            >
              <span>Schedule a Technical Meeting</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

