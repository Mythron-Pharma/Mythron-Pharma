"use client";

import Link from "next/link";
import { ShieldCheck, MapPin, Phone, Mail } from "lucide-react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Values", href: "#values" },
  { name: "Portfolio", href: "/products" },
  { name: "Clinical", href: "#why-us" },
  { name: "Connect", href: "/connect" },
];

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 pt-20 pb-10 overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6 flex flex-col items-center text-center">
        
        {/* ── BRAND ANCHOR ── */}
        <Link href="/" className="inline-block mb-8 hover:opacity-80 transition-opacity">
           <img
             src="/logo-main.png"
             alt="Mythron Pharma"
             className="h-12 w-auto object-contain mx-auto"
           />
        </Link>

        {/* ── CENTRAL NAVIGATION ── */}
        <nav className="mb-10 w-full">
           <ul className="flex flex-wrap justify-center gap-x-10 gap-y-4">
              {navLinks.map(link => (
                <li key={link.name}>
                   <Link href={link.href} className="text-[11px] font-black uppercase tracking-[0.2em] text-gray-400 hover:text-brand-blue transition-colors">
                      {link.name}
                   </Link>
                </li>
              ))}
           </ul>
        </nav>

        {/* ── COMPACT CLINICAL CONTACTS ── */}
        <div className="flex flex-wrap justify-center gap-x-12 gap-y-6 mb-12 border-y border-gray-50 py-8 w-full max-w-4xl">
           <div className="flex items-center gap-2 group cursor-default">
              <MapPin className="w-3.5 h-3.5 text-brand-blue/30 group-hover:text-brand-blue transition-colors" />
              <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Hyderabad, Telangana</span>
           </div>
           <div className="flex items-center gap-2 group cursor-default">
              <Phone className="w-3.5 h-3.5 text-brand-blue/30 group-hover:text-brand-blue transition-colors" />
              <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">+91 40 4859 2900</span>
           </div>
           <div className="flex items-center gap-2 group cursor-default">
              <Mail className="w-3.5 h-3.5 text-brand-blue/30 group-hover:text-brand-blue transition-colors" />
              <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest text-brand-blue">info@mythronpharma.com</span>
           </div>
        </div>

        {/* ── INSTITUTIONAL BADGE ── */}
        <div className="flex items-center gap-3 px-5 py-2 bg-gray-50 border border-gray-100 rounded-full mb-10">
           <ShieldCheck className="w-4 h-4 text-brand-green" />
           <span className="text-[9px] font-black uppercase tracking-[0.3em] text-brand-blue/40">WHO-GMP & ISO 9001 Certified Institution</span>
        </div>

        {/* ── LEGAL ── */}
        <div className="flex flex-col items-center gap-4 text-[9px] font-bold text-gray-300 uppercase tracking-[0.25em]">
           <p>© {new Date().getFullYear()} Mythron Pharma Private Limited. All Scientific Rights Reserved.</p>
           <div className="flex gap-8">
              <Link href="#" className="hover:text-brand-blue transition-colors">Privacy</Link>
              <Link href="#" className="hover:text-brand-blue transition-colors">Compliance</Link>
              <Link href="#" className="hover:text-brand-blue transition-colors">Liability</Link>
           </div>
        </div>

      </div>
    </footer>
  );
}
