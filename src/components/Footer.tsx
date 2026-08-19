"use client";

import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white text-slate-900 border-t border-slate-200/90 pt-12 sm:pt-16 pb-12 sm:pb-16 relative">
      <div className="w-full max-w-[1800px] mx-auto px-4 sm:px-8 lg:px-16">

        {/* ── MAIN FOOTER LAYOUT ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-16 pb-10 sm:pb-12 border-b border-slate-200/80">

          {/* Column 1: Brand & Overview (Centered for mobile and desktop) */}
          <div className="sm:col-span-2 lg:col-span-6 space-y-4 text-center flex flex-col items-center">
            <div className="w-full py-1 text-center flex justify-center">
              <Link href="/" className="inline-block">
                <img
                  src="/logo-main.png"
                  alt="Mythron Pharma"
                  className="h-12 md:h-14 w-auto object-contain scale-[1.7] md:scale-[1.8] origin-center block transition-transform hover:scale-[1.85] mx-auto my-2"
                />
              </Link>
            </div>

            <p className="text-slate-600 lg:text-slate-500 text-xs sm:text-sm font-normal leading-relaxed max-w-md text-center mx-auto">
              Mythron Pharma Private Limited is a specialized pharmaceutical enterprise dedicated to targeted gynecological formulations, patient wellness, and quality excellence.
            </p>
          </div>

          {/* Column 2: Navigation Links (Spans 1 col on sm, 3 cols on lg) */}
          <div className="sm:col-span-1 lg:col-span-3 space-y-3 sm:space-y-4 text-left">
            <h4 className="text-[11px] sm:text-xs font-bold text-slate-900 uppercase tracking-widest">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm font-medium text-slate-600">
              <li><Link href="/" className="hover:text-emerald-600 transition-colors">Home</Link></li>
              <li><Link href="/products" className="hover:text-emerald-600 transition-colors">Products Catalog</Link></li>
              <li><Link href="/why-us" className="hover:text-emerald-600 transition-colors">Quality Standards</Link></li>
              <li><Link href="/values" className="hover:text-emerald-600 transition-colors">Corporate Values</Link></li>
              <li><Link href="/connect" className="hover:text-emerald-600 transition-colors">Distribution & Inquiries</Link></li>
            </ul>
          </div>

          {/* Column 3: Corporate HQ & Contact (Spans 1 col on sm, 3 cols on lg) */}
          <div className="sm:col-span-1 lg:col-span-3 space-y-3 sm:space-y-4 text-left">
            <h4 className="text-[11px] sm:text-xs font-bold text-slate-900 uppercase tracking-widest">
              Corporate HQ
            </h4>
            <div className="space-y-3 text-xs sm:text-sm text-slate-600">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span className="leading-relaxed">PLOT NO.373, HOUSE. NO. 2-23-358, HMT HIILS, OPP JNTU, KUKATPALLY, HYDERABAD - 500 085</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-emerald-600 shrink-0" />
                <span className="text-slate-800 font-semibold whitespace-nowrap">+91 40 4859 2900</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-emerald-600 shrink-0" />
                <a href="mailto:business@mythronpharma.in" className="text-emerald-600 font-bold hover:underline">
                  business@mythronpharma.in
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* ── FOOTER BOTTOM BAR ── */}
        <div className="pt-6 sm:pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-xs text-slate-500 font-medium">
          <p>© {new Date().getFullYear()} Mythron Pharma Private Limited. All Rights Reserved.</p>
          <div className="flex flex-wrap gap-4 sm:gap-6 text-slate-500 text-xs">
            <Link href="#" className="hover:text-emerald-600 transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-emerald-600 transition-colors">Terms of Compliance</Link>
            <Link href="#" className="hover:text-emerald-600 transition-colors">Quality Guidelines</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
