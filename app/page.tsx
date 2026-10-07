'use client';
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import MicrobiomeQuiz from '@/components/MicrobiomeQuiz';
import ScienceSection from '@/components/ScienceSection';
import IngredientsSection from '@/components/IngredientsSection';
import PricingSection from '@/components/PricingSection';
import BonusesSection from '@/components/BonusesSection';
import Testimonials from '@/components/Testimonials';
import FaqSection from '@/components/FaqSection';
import { Sparkles, Shield, Lock } from 'lucide-react';

export default function Page() {
  const handleOpenCheckout = (pkgId?: string) => {
    window.location.href = 'https://49778fqdifpifv6btcp2uiva45.hop.clickbank.net';
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white font-sans selection:bg-emerald-500 selection:text-white">
      {/* Navbar */}
      <Navbar onOpenCheckout={handleOpenCheckout} />

      {/* Hero Section */}
      <Hero onOpenCheckout={handleOpenCheckout} />

      {/* Microbiome Assessment Quiz */}
      <MicrobiomeQuiz onOpenCheckout={handleOpenCheckout} />

      {/* Science & Microbiome Section */}
      <ScienceSection />

      {/* Ingredients Breakdown */}
      <IngredientsSection />

      {/* Pricing Packages */}
      <PricingSection onOpenCheckout={handleOpenCheckout} />

      {/* Free Bonuses */}
      <BonusesSection />

      {/* Testimonials */}
      <Testimonials />

      {/* FAQ */}
      <FaqSection />

      {/* Footer */}
      <footer className="bg-slate-950 border-t border-slate-900 py-16 text-slate-400 text-xs leading-relaxed">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4 md:col-span-2">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-emerald-500 to-teal-400 flex items-center justify-center text-white">
                  <Sparkles className="w-4 h-4" />
                </div>
                <span className="text-xl font-black text-white">ProDentim™</span>
              </div>
              <p className="max-w-md text-slate-400">
                ProDentim is a specialized oral probiotic formula designed to support and rebalance the mouth's microbiome with 3.5 billion CFU and pure botanical extracts.
              </p>
            </div>

            <div className="space-y-3">
              <h4 className="font-bold text-white uppercase tracking-wider text-xs">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#science" className="hover:text-emerald-400">Science</a></li>
                <li><a href="#quiz" className="hover:text-emerald-400">Health Quiz</a></li>
                <li><a href="#ingredients" className="hover:text-emerald-400">Ingredients</a></li>
                <li><a href="#pricing" className="hover:text-emerald-400">Pricing Packages</a></li>
              </ul>
            </div>

            <div className="space-y-3">
              <h4 className="font-bold text-white uppercase tracking-wider text-xs">Secure Guarantee</h4>
              <div className="flex items-center gap-2 text-slate-300">
                <Shield className="w-4 h-4 text-emerald-400" />
                <span>60-Day 100% Money-Back Guarantee</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <Lock className="w-4 h-4 text-emerald-400" />
                <span>256-Bit Encrypted Checkout</span>
              </div>
            </div>
          </div>

          <div className="border-t border-slate-900 pt-8 text-center text-[11px] text-slate-500 space-y-3 max-w-4xl mx-auto">
            <p>
              * These statements have not been evaluated by the Food and Drug Administration. This product is not intended to diagnose, treat, cure, or prevent any disease. Results may vary based on individual usage and adherence to oral hygiene.
            </p>
            <p>
              © 2026 ProDentim™ Official Presentation & Interactive Portal. All Rights Reserved.
            </p>
          </div>

        </div>
      </footer>
    </div>
  );
}
