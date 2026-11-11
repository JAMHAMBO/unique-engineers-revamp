import React from "react";

interface SectionHeaderProps {
  badge?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  dark?: boolean;
}

export function SectionHeader({
  badge,
  title,
  subtitle,
  centered = false,
  dark = false,
}: SectionHeaderProps) {
  return (
    <div className={`mb-12 ${centered ? "text-center mx-auto max-w-3xl" : "max-w-2xl"}`}>
      {badge && (
        <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3 bg-brand-50 text-brand-700 border border-brand-200">
          <span>{badge}</span>
        </div>
      )}
      <h2
        className={`text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight font-heading leading-tight ${
          dark ? "text-white" : "text-slate-900"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-3 text-base sm:text-lg leading-relaxed ${
            dark ? "text-slate-300" : "text-slate-600"
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}

