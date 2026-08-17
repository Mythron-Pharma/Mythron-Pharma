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
      <nav className="fixed top-0 left-0 w-full z-50 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-sm transition-all duration-300">
        <div className="w-full max-w-[1800px] mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">

          {/* Logo Section (Left - Optimal Zoom) */}
          <div className="flex items-center shrink-0">
            <Link href="/" className="group flex items-center py-1">
              <img
                src="/logo-main.png"
                alt="Mythron Pharma"
                className="h-12 md:h-14 w-auto object-contain scale-[1.7] md:scale-[1.8] origin-left block transition-transform group-hover:scale-[1.85]"
              />
            </Link>
          </div>

          {/* Navigation Links (Desktop Middle) */}
          <div className="hidden lg:flex items-center gap-1.5 bg-slate-100/90 p-1.5 rounded-full border border-slate-200/80">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`relative px-5 py-2 text-xs font-bold uppercase tracking-wider transition-all duration-300 rounded-full ${isActive(link.href)
                    ? "text-slate-900 font-extrabold"
                    : "text-slate-600 hover:text-emerald-600"
                  }`}
              >
                <span className="relative z-10">{link.name}</span>
                {isActive(link.href) && (
                  <motion.div
                    layoutId="nav-pill"
                    className="absolute inset-0 bg-white rounded-full z-0 shadow-sm border border-slate-200"
                    transition={{ type: "spring", bounce: 0, duration: 0.5 }}
                  />
                )}
              </Link>
            ))}
          </div>

          {/* Right Action Section */}
          <div className="flex items-center gap-4">
            <Link
              href="/connect"
              className="hidden md:flex items-center gap-2.5 px-6 py-3 rounded-xl bg-slate-900 hover:bg-emerald-600 text-white text-xs font-bold uppercase tracking-wider transition-all duration-300 shadow-md hover:shadow-emerald-500/20"
            >
              <span>Connect</span>
              <Share2 className="w-3.5 h-3.5" />
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(true)}
              className="lg:hidden p-2.5 rounded-xl bg-slate-100 border border-slate-200 text-slate-900 active:scale-95 transition-transform"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>

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
              className="fixed inset-0 z-[100] bg-slate-950/40 backdrop-blur-md lg:hidden"
            />

            {/* Slide-in Menu */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 220 }}
              className="fixed right-0 top-0 bottom-0 w-[88%] max-w-[380px] z-[110] bg-white shadow-2xl flex flex-col justify-between lg:hidden border-l border-slate-200/80"
            >
              {/* Drawer Top Header */}
              <div className="p-6 flex items-center justify-between border-b border-slate-100">
                <Link href="/" onClick={() => setIsOpen(false)} className="py-1">
                  <img
                    src="/logo-main.png"
                    alt="Mythron Pharma"
                    className="h-10 w-auto object-contain scale-[1.5] origin-left"
                  />
                </Link>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2.5 rounded-xl bg-slate-100 border border-slate-200 text-slate-700 hover:text-slate-900 active:scale-95 transition-all"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Navigation Links List */}
              <div className="flex-grow p-6 flex flex-col gap-2 overflow-y-auto">
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-emerald-600 mb-2">
                  Navigation Menu
                </p>
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.08 }}
                  >
                    <Link
                      href={link.href}
                      className={`flex items-center justify-between py-3.5 px-4 text-base font-bold transition-all rounded-xl ${
                        isActive(link.href)
                          ? "text-emerald-700 font-black bg-emerald-50/80 border border-emerald-200/80 shadow-xs"
                          : "text-slate-700 hover:text-emerald-600 hover:bg-slate-50"
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      <span>{link.name}</span>
                      <ArrowRight className={`w-4 h-4 transition-transform ${isActive(link.href) ? "text-emerald-600 translate-x-0.5" : "text-slate-300"}`} />
                    </Link>
                  </motion.div>
                ))}
              </div>

              {/* Drawer Bottom Actions */}
              <div className="p-6 border-t border-slate-100 bg-slate-50/60 space-y-4">
                <Link
                  href="/connect"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center gap-2.5 w-full py-3.5 bg-slate-900 hover:bg-emerald-600 text-white rounded-xl font-bold uppercase tracking-wider text-xs shadow-md transition-all duration-300 active:scale-[0.98]"
                >
                  <span>Connect With Us</span>
                  <Share2 className="w-3.5 h-3.5" />
                </Link>

                <div className="flex justify-between items-center pt-2 px-1 text-slate-400 text-[10px] font-bold uppercase tracking-widest">
                  <span>Mythron Pharma</span>
                  <span>© {new Date().getFullYear()}</span>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
