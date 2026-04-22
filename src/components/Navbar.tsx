"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Share2, Search, ArrowRight } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Our Values", href: "/values" },
  { name: "Products", href: "/products" },
  { name: "Why Us", href: "/why-us" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  const isActive = (href: string) => pathname === href;

  return (
    <>
      <nav className="fixed left-0 w-full z-50 pointer-events-none top-4 md:top-6">
        <div className="max-w-[1700px] mx-auto px-4 md:px-10 flex items-center justify-center">
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="pointer-events-auto flex items-center justify-between px-3 md:px-4 rounded-full border w-full md:w-[75%] lg:w-[60%] h-14 md:h-16 bg-white/90 backdrop-blur-2xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] border-brand-blue/10"
          >
            {/* Logo Section */}
            <div className="pl-2 md:pl-6 flex items-center">
              <Link href="/" className="group flex items-center">
                <div className="relative">
                  <img
                    src="/logo-main.png"
                    alt="Mythron Pharma"
                    className="w-auto object-contain h-11 md:h-13 lg:h-14 scale-[1.3] origin-left transition-transform duration-500 hover:scale-[1.4]"
                  />
                </div>
              </Link>
            </div>

            {/* Navigation Links (Desktop) */}
            <div className="hidden lg:flex items-center rounded-full px-2 py-1.5 gap-1 transition-all duration-500 bg-brand-blue/5 border border-brand-blue/5">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`relative px-6 py-2.5 text-[10px] font-bold uppercase tracking-[0.2em] transition-all duration-500 rounded-full group
                    ${isActive(link.href)
                      ? "text-white"
                      : "text-brand-blue/60 hover:text-brand-blue"}`}
                >
                  <span className="relative z-10">{link.name}</span>
                  {isActive(link.href) && (
                    <motion.div
                      layoutId="nav-pill"
                      className="absolute inset-0 bg-brand-blue rounded-full z-0"
                      transition={{ type: "spring", bounce: 0, duration: 0.6 }}
                    />
                  )}
                </Link>
              ))}
            </div>

            {/* Right Action Section */}
            <div className="flex items-center gap-2">
              <div className="hidden md:flex items-center gap-2 pr-4 border-r border-brand-blue/10 mr-2">
                <button className="p-2.5 text-brand-blue/40 hover:text-brand-blue hover:bg-brand-blue/5 rounded-full transition-all">
                  <Search className="w-4 h-4" />
                </button>
              </div>
              <Link
                href="/connect"
                className={`hidden md:flex items-center gap-8 px-10 h-10 md:h-12 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all duration-500
                ${isScrolled
                    ? "bg-brand-blue text-white"
                    : "bg-white border border-gray-200 text-brand-blue hover:bg-gray-50"
                  }`}
              >
                Connect
                <Share2 className="w-3.5 h-3.5" />
              </Link>

              {/* Mobile Menu Button - Pill Style */}
              <button
                onClick={() => setIsOpen(true)}
                className="lg:hidden flex items-center gap-2 bg-brand-blue text-white pl-4 pr-3 py-2 rounded-full text-[9px] font-bold uppercase tracking-widest shadow-lg active:scale-95 transition-transform"
              >
                Menu
                <div className="bg-white/20 p-1.5 rounded-full">
                  <Menu className="w-3.5 h-3.5 text-white" />
                </div>
              </button>
            </div>
          </motion.div>
        </div>
      </nav>

      {/* ── MOBILE DRAWER ── */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 z-[100] bg-brand-blue/40 backdrop-blur-md lg:hidden"
            />

            {/* Slide-in Menu */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 bottom-0 w-[85%] max-w-[400px] z-[110] bg-white shadow-2xl flex flex-col lg:hidden"
            >
              <div className="p-8 flex items-center justify-between border-b border-gray-100">
                <img src="/logo-main.png" alt="Mythron" className="h-10" />
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-3 bg-gray-50 rounded-full text-brand-blue shadow-inner"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="flex-grow p-8 flex flex-col gap-4 overflow-y-auto">
                <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-gray-300 mb-4">Core Sections</p>
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <Link
                      href={link.href}
                      className={`flex items-center justify-between py-4 text-2xl font-light tracking-tight transition-all border-b border-transparent hover:border-brand-blue/10 ${isActive(link.href) ? "text-brand-blue font-semibold px-4 bg-brand-blue/5 rounded-2xl" : "text-gray-400"
                        }`}
                      onClick={() => setIsOpen(false)}
                    >
                      {link.name}
                      {isActive(link.href) && <ArrowRight className="w-5 h-5" />}
                    </Link>
                  </motion.div>
                ))}
              </div>

              <div className="p-8 border-t border-gray-100 bg-gray-50/50">
                <Link
                  href="/connect"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center gap-4 w-full py-5 bg-brand-blue text-white rounded-2xl font-bold uppercase tracking-[0.2em] text-[10px] shadow-xl shadow-brand-blue/20 mb-8"
                >
                  Initiate Global Connection
                  <Share2 className="w-4 h-4" />
                </Link>

                <div className="flex justify-between items-center px-2">
                  <div className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-brand-blue/5 flex items-center justify-center text-brand-blue hover:bg-brand-blue/10 transition-colors cursor-pointer">
                      <Search className="w-4 h-4" />
                    </div>
                  </div>
                  <div className="text-[9px] font-bold uppercase tracking-[0.2em] text-gray-300">
                    © 2024 MYTHRON
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
