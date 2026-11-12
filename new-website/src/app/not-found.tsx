import React from "react";
import Link from "next/link";
import { Home, PhoneCall } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center py-20 px-4 bg-slate-50">
      <div className="max-w-md w-full bg-white border border-slate-200 rounded-2xl p-8 sm:p-10 text-center shadow-lg space-y-5">
        <span className="text-5xl font-extrabold text-brand-600 font-heading block">
          404
        </span>
        <h1 className="text-2xl font-bold font-heading text-slate-900">
          Page Not Found
        </h1>
        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
          The requested industrial page or legacy URL could not be located.
          Please use our navigation or return to the homepage.
        </p>
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/"
            className="w-full sm:w-auto bg-brand-600 hover:bg-brand-700 text-white font-bold px-5 py-2.5 rounded-lg text-xs inline-flex items-center justify-center space-x-1.5 transition-colors"
          >
            <Home className="w-4 h-4" />
            <span>Return Home</span>
          </Link>
          <Link
            href="/contact"
            className="w-full sm:w-auto bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold px-5 py-2.5 rounded-lg text-xs inline-flex items-center justify-center space-x-1.5 transition-colors"
          >
            <PhoneCall className="w-4 h-4 text-brand-600" />
            <span>Contact Desk</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

