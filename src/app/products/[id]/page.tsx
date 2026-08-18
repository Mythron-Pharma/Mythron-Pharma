"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Plus,
  Minus,
  CheckCircle2, 
  ArrowLeft, 
  ShieldCheck, 
  FlaskConical,
  ArrowRight,
  ChevronRight
} from "lucide-react";
import Link from "next/link";
import { products } from "@/data/products";

export default function ProductDetailPage() {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
    const timer = setTimeout(() => window.scrollTo(0, 0), 10);
    return () => clearTimeout(timer);
  }, [id]);

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-white p-6">
        <FlaskConical className="w-16 h-16 text-slate-100 mb-6 animate-pulse" />
        <h1 className="text-2xl font-serif font-bold text-gray-900 mb-4">Molecule Not Found</h1>
        <Link href="/products" className="flex items-center gap-2 text-brand-blue font-bold uppercase tracking-widest text-[10px]">
          <ArrowLeft className="w-4 h-4" /> Return to Portfolio
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-emerald-500/20">
      
      {/* ── 1. CLINICAL DOSSIER HEADER ── */}
      <section className="relative pt-40 pb-16 lg:pt-52 lg:pb-28 bg-gradient-to-b from-slate-50 via-emerald-50/20 to-white border-b border-slate-200/80 overflow-hidden">
        {/* Deep Field Accents */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-emerald-400/15 rounded-full blur-[140px] pointer-events-none -translate-y-1/2 translate-x-1/4" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-cyan-400/15 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-12 relative z-10">
          <div className="flex flex-col lg:grid lg:grid-cols-12 gap-10 lg:gap-24 items-center">
            
            {/* Content Stage - Order 1 on Mobile */}
            <div className="lg:col-span-7 order-1 lg:order-2 px-2 sm:px-0">
               <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                  <div className="inline-flex items-center gap-3 bg-emerald-50 px-4 py-1.5 lg:px-5 lg:py-2 rounded-full mb-6 lg:mb-10 border border-emerald-200">
                     <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                     <span className="text-emerald-700 font-black tracking-[0.2em] uppercase text-[9px] lg:text-[10px]">{product.focus}</span>
                  </div>

                  <h1 className="text-4xl lg:text-7xl font-sans font-black text-slate-900 mb-6 lg:mb-8 tracking-tighter leading-tight">
                    {product.name.split(' ')[0]} <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 via-teal-400 to-cyan-500 italic font-light">{product.name.split(' ').slice(1).join(' ')}</span>
                  </h1>

                  <p className="text-slate-600 text-lg lg:text-2xl mb-10 lg:mb-12 leading-relaxed font-normal">
                    {product.tagline}
                  </p>

                  <div className="hidden lg:grid grid-cols-2 gap-y-5 gap-x-12 mb-16">
                    {product.benefits.map((benefit, i) => (
                      <div key={i} className="flex gap-4 items-start">
                         <div className="w-5 h-5 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center shrink-0 mt-0.5">
                           <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                         </div>
                         <p className="text-slate-600 text-base font-medium leading-snug">{benefit}</p>
                      </div>
                    ))}
                  </div>
               </motion.div>
            </div>

            {/* Specimen Visual Area - Order 2 on Mobile */}
            <div className="lg:col-span-5 order-2 lg:order-1 flex justify-center lg:justify-start w-full">
               <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} className="relative group w-full">
                  <div className="aspect-[4/3] bg-white rounded-[2.5rem] lg:rounded-[3rem] border border-slate-200 shadow-xl flex items-center justify-center p-6 lg:p-8 relative overflow-hidden">
                     <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-cyan-500/5 rounded-[2.5rem] lg:rounded-[3rem]" />
                     <motion.img 
                       src={product.image}
                       alt={product.name}
                       className="relative z-10 max-h-[90%] max-w-[90%] w-auto h-auto object-contain transition-transform duration-700 group-hover:scale-105 mix-blend-multiply"
                     />
                  </div>
                  {/* Verification Badge */}
                  <div className="absolute -bottom-3 -right-3 lg:-bottom-4 lg:-right-4 bg-white px-4 py-2 lg:px-6 lg:py-3 rounded-xl lg:rounded-2xl shadow-xl border border-slate-200 flex items-center gap-2 lg:gap-3 z-20">
                     <ShieldCheck className="w-4 h-4 lg:w-5 lg:h-5 text-emerald-500" />
                     <span className="text-[9px] lg:text-[10px] font-black text-slate-900 uppercase tracking-widest leading-none">Clinical Integrity Certified</span>
                  </div>
               </motion.div>
            </div>

            {/* Mobile-Only Benefit Grid */}
            <div className="lg:hidden order-3 mt-4">
               <div className="grid grid-cols-1 gap-y-4 mb-10">
                 {product.benefits.map((benefit, i) => (
                   <div key={i} className="flex gap-4 items-start">
                      <div className="w-5 h-5 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center shrink-0 mt-0.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                      </div>
                      <p className="text-slate-600 text-[15px] font-normal leading-snug">{benefit}</p>
                   </div>
                 ))}
               </div>

               <button className="w-full flex items-center justify-center gap-4 px-8 py-4 bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 text-slate-950 rounded-full font-black uppercase tracking-[0.2em] text-[10px] shadow-[0_0_20px_rgba(0,200,117,0.35)] active:scale-95 transition-all">
                 Access Technical Dossier
                 <ArrowRight className="w-4 h-4 text-slate-950 stroke-[2.5]" />
               </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. DATA DOSSIER (STREAMLINED ACCORDIONS) ── */}
      <section className="py-12 sm:py-20 lg:py-24 bg-white">
         <div className="max-w-[1600px] mx-auto px-5 sm:px-10 lg:px-12">
            
            <div className="border border-slate-200 rounded-3xl overflow-hidden shadow-sm">
               
               {/* DESCRIPTION */}
               <AccordionItem title="Description" initialOpen={true}>
                  <div className="pt-2">
                     <h3 className="text-emerald-700 font-bold text-xl sm:text-2xl mb-5 tracking-tight">Why {product.name} Health?</h3>
                     <p className="text-slate-600 text-[15px] sm:text-base leading-relaxed mb-10">
                       {product.description}
                     </p>

                     <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-8 mb-10">
                        {product.nutrition.slice(0, 6).map((item) => (
                          <div key={item.component} className="flex gap-4">
                             <div className="w-2 h-2 rounded-full bg-emerald-500 mt-2 shrink-0" />
                             <div>
                                <h4 className="text-slate-900 font-bold text-[14px] sm:text-[15px] mb-1 leading-tight">{item.component}</h4>
                                <p className="text-slate-500 text-[12px] sm:text-[13px] leading-relaxed">
                                   Precision measured for optimal clinical synergy.
                                </p>
                             </div>
                          </div>
                        ))}
                     </div>

                     <div className="mt-10 p-6 bg-slate-50 border border-slate-200/80 rounded-2xl text-center">
                        <p className="text-[11px] text-slate-500 italic mx-auto leading-relaxed">
                          * Therapeutic Nutritional Interventions are carefully integrated to address specific metabolic pathways.
                        </p>
                     </div>
                  </div>
               </AccordionItem>

               {/* COMPOSITION TABLE */}
               <AccordionItem title="Nutritional Information">
                  <div className="border border-slate-200 rounded-[2rem] overflow-hidden mt-2">
                     <table className="w-full text-left font-sans">
                        <thead className="bg-slate-100">
                           <tr>
                              <th className="px-6 sm:px-10 py-5 font-black text-slate-900 uppercase tracking-widest text-[9px] sm:text-[10px]">Each Capsule Contains</th>
                              <th className="px-6 sm:px-10 py-5 font-black text-slate-900 uppercase tracking-widest text-[9px] sm:text-[10px]">Amount</th>
                              <th className="hidden sm:table-cell px-6 sm:px-10 py-5 font-black text-slate-900 uppercase tracking-widest text-[9px] sm:text-[10px] text-right">RDA %</th>
                           </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">
                           {product.nutrition.map((item) => (
                             <tr key={item.component} className="hover:bg-emerald-50/40 transition-colors">
                                <td className="px-6 sm:px-10 py-5 font-bold text-slate-800 text-[14px] sm:text-[15px]">{item.component}</td>
                                <td className="px-6 sm:px-10 py-5 font-black text-emerald-600 text-[14px] sm:text-[15px]">{item.amount}</td>
                                <td className="hidden sm:table-cell px-6 sm:px-10 py-5 text-slate-300 text-right">—</td>
                             </tr>
                           ))}
                           <tr className="bg-slate-50/50">
                              <td className="px-6 sm:px-10 py-4.5 text-slate-600 font-bold text-sm">Excipients</td>
                              <td className="px-6 sm:px-10 py-4.5 text-emerald-600 font-bold text-sm">q.s.</td>
                              <td className="hidden sm:table-cell px-6 sm:px-10 py-4.5 text-slate-300 text-right">—</td>
                           </tr>
                        </tbody>
                      </table>
                  </div>
               </AccordionItem>

               {/* CLINICAL FAQ */}
               <AccordionItem title="FAQ">
                  <div className="space-y-10 py-2">
                     {product.faq.map((item, i) => (
                       <div key={i}>
                          <h4 className="text-emerald-700 font-bold text-[15px] sm:text-[17px] mb-2 leading-tight">
                             {i + 1}. {item.question}
                          </h4>
                          <p className="text-slate-600 text-[14px] sm:text-[15px] leading-relaxed pl-6 border-l-2 border-emerald-400">
                             {item.answer}
                          </p>
                       </div>
                     ))}
                  </div>
               </AccordionItem>
            </div>
         </div>
      </section>

    </div>
  );
}

function AccordionItem({ title, children, initialOpen = false }: { title: string, children: React.ReactNode, initialOpen?: boolean }) {
  const [isOpen, setIsOpen] = useState(initialOpen);

  return (
    <div className="border-b border-slate-50 last:border-0 bg-white">
       <button 
         onClick={() => setIsOpen(!isOpen)}
         className="w-full px-6 py-6 sm:px-10 flex items-center gap-6 hover:bg-slate-50/30 transition-all text-left group"
       >
          <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${isOpen ? 'bg-slate-100 text-slate-900' : 'bg-slate-50 text-slate-300'}`}>
             {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight">{title}</h3>
       </button>
       <AnimatePresence>
          {isOpen && (
            <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }} className="overflow-hidden">
               <div className="px-6 pb-12 sm:px-20 pt-2 border-t border-slate-50/50">
                  {children}
               </div>
            </motion.div>
          )}
       </AnimatePresence>
    </div>
  );
}
