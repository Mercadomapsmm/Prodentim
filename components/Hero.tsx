'use client';
import React, { useState, useEffect } from 'react';
import { Star, ShieldCheck, CheckCircle2, Sparkles, ArrowRight, Play, Award, Zap } from 'lucide-react';
import Image from 'next/image';

interface HeroProps {
  onOpenCheckout: (pkg: string) => void;
}

export default function Hero({ onOpenCheckout }: HeroProps) {
  const [timeLeft, setTimeLeft] = useState({ hours: 11, minutes: 42, seconds: 19 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return { hours: 12, minutes: 0, seconds: 0 };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 text-white py-16 lg:py-24">
      {/* Background glow elements */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/10 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-teal-500/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Copy & CTAs */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Top pill badge */}
            <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/30 px-4 py-1.5 rounded-full text-emerald-400 text-xs sm:text-sm font-semibold tracking-wide">
              <Sparkles className="w-4 h-4 text-emerald-400" />
              <span>Breakthrough 2026 Oral Microbiome Discovery</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1]">
              Rebuild Your Gums & Teeth With <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent">3.5 Billion Good Bacteria</span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl text-slate-300 leading-relaxed max-w-2xl">
              Recent clinical studies show that bad teeth aren't your fault. Traditional toothpastes & mouthwashes destroy your oral microbiome. ProDentim populates your mouth with <strong className="text-white font-semibold">3 specific probiotic strains</strong> for total dental rejuvenation.
            </p>

            {/* Checklist items */}
            <div className="grid sm:grid-cols-2 gap-3 pt-2 text-slate-200 text-sm font-medium">
              <div className="flex items-center gap-2.5">
                <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                </div>
                <span>Supports Long-Term Gum Health</span>
              </div>
              <div className="flex items-center gap-2.5">
                <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                </div>
                <span>Eliminates Bad Breath Naturally</span>
              </div>
              <div className="flex items-center gap-2.5">
                <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                </div>
                <span>Strengthens Tooth Enamel & Whiteness</span>
              </div>
              <div className="flex items-center gap-2.5">
                <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                </div>
                <span>Promotes Sinus & Respiratory Health</span>
              </div>
            </div>

            {/* CTA Box */}
            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={() => onOpenCheckout('pkg-3')}
                className="bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-600 hover:from-emerald-600 hover:to-teal-700 text-white font-black text-lg px-8 py-4 rounded-2xl shadow-xl shadow-emerald-500/30 flex items-center justify-center gap-3 transition-all transform hover:-translate-y-1 active:translate-y-0"
              >
                <span>Claim Your Discounted ProDentim</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              
              <div className="flex items-center justify-center gap-2 text-xs text-slate-400">
                <ShieldCheck className="w-5 h-5 text-emerald-400" />
                <span>60-Day 100% Money Back Guarantee</span>
              </div>
            </div>

            {/* Trust rating banner */}
            <div className="pt-4 flex items-center gap-4 border-t border-slate-800/80">
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="text-sm font-bold text-white">4.9/5 Rating</span>
              <span className="text-xs text-slate-400">Over 95,000 Verified Satisfied Users Worldwide</span>
            </div>

          </div>

          {/* Right Column: Product Showcase & Timer */}
          <div className="lg:col-span-5">
            <div className="bg-gradient-to-b from-slate-800/90 to-slate-900/90 p-6 sm:p-8 rounded-3xl border border-slate-700/80 shadow-2xl relative">
              
              {/* Limited time discount banner */}
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-black text-xs uppercase px-4 py-1.5 rounded-full shadow-md flex items-center gap-1.5">
                <Zap className="w-3.5 h-3.5" />
                <span>Limited Time Special Offer - Save $780</span>
              </div>

              {/* Product Visual Real Image */}
              <div className="mt-4 bg-gradient-to-b from-slate-900 to-slate-950 p-6 rounded-2xl border border-slate-800 flex flex-col items-center justify-center relative overflow-hidden group">
                <div className="absolute inset-0 bg-radial from-emerald-500/10 via-transparent to-transparent pointer-events-none" />
                
                <div className="relative w-48 h-64 rounded-2xl overflow-hidden shadow-2xl border border-emerald-500/30 group-hover:scale-105 transition-transform duration-500">
                  <Image
                    src="/prodentim-bottle-portrait.jpg"
                    alt="ProDentim Bottle"
                    fill
                    className="object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>

                <div className="mt-4 text-center">
                  <span className="text-xs text-emerald-400 font-semibold uppercase tracking-wider">Doctor Formulated & Clinically Tested</span>
                </div>
              </div>

              {/* Countdown timer */}
              <div className="mt-6 bg-slate-950/60 border border-slate-800 rounded-2xl p-4 text-center">
                <div className="text-xs text-slate-400 font-medium mb-2 uppercase tracking-wider">Special Discount Reserved For:</div>
                <div className="flex justify-center items-center gap-3 font-mono text-xl font-bold text-emerald-400">
                  <div className="bg-slate-900 px-3 py-1.5 rounded-xl border border-slate-800">
                    {String(timeLeft.hours).padStart(2, '0')}<span className="text-[10px] text-slate-400 block font-normal">HOURS</span>
                  </div>
                  <span>:</span>
                  <div className="bg-slate-900 px-3 py-1.5 rounded-xl border border-slate-800">
                    {String(timeLeft.minutes).padStart(2, '0')}<span className="text-[10px] text-slate-400 block font-normal">MINS</span>
                  </div>
                  <span>:</span>
                  <div className="bg-slate-900 px-3 py-1.5 rounded-xl border border-slate-800">
                    {String(timeLeft.seconds).padStart(2, '0')}<span className="text-[10px] text-slate-400 block font-normal">SECS</span>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <button
                onClick={() => onOpenCheckout('pkg-3')}
                className="w-full mt-6 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white font-bold py-4 rounded-xl shadow-lg shadow-emerald-500/25 flex items-center justify-center gap-2 transition-all"
              >
                <span>Select Best Value Package</span>
                <ArrowRight className="w-4 h-4" />
              </button>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

