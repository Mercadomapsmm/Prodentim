import React from 'react';
import { ShieldAlert, ShieldCheck, Zap, Smile, HeartPulse } from 'lucide-react';

export default function ScienceSection() {
  return (
    <section id="science" className="py-20 bg-slate-900 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/30 px-4 py-1.5 rounded-full text-emerald-400 text-xs font-semibold uppercase tracking-wider">
            <Zap className="w-3.5 h-3.5" />
            <span>The Real Cause of Dental Decay</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight">
            Why Traditional Toothpastes Are Failing Your Teeth
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Did you know that most commercial toothpastes and mouthwashes contain toxic ingredients that wipe out all bacteria in your mouth—good and bad? This leaves your teeth defenseless.
          </p>
        </div>

        {/* Comparison Grid */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          
          {/* Traditional Way */}
          <div className="bg-slate-950/80 border border-red-500/30 rounded-3xl p-8 space-y-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-red-500/20 text-red-400 text-xs font-bold px-4 py-1.5 rounded-bl-2xl">
              Flawed Approach
            </div>

            <div className="w-12 h-12 bg-red-500/20 text-red-400 rounded-2xl flex items-center justify-center border border-red-500/30">
              <ShieldAlert className="w-6 h-6" />
            </div>

            <h3 className="text-2xl font-bold">The Harmful Loop of Commercial Dental Care</h3>

            <ul className="space-y-4 text-slate-300 text-sm sm:text-base">
              <li className="flex items-start gap-3">
                <span className="text-red-400 font-bold mt-0.5">✕</span>
                <span>Harsh chemicals kill the beneficial microflora that naturally protect your teeth and gums.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-400 font-bold mt-0.5">✕</span>
                <span>Bad bacteria quickly repopulate faster in the sterile environment, causing plaque buildup.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-400 font-bold mt-0.5">✕</span>
                <span>Leads to chronic gum inflammation, receding gums, bad breath, and expensive dental visits.</span>
              </li>
            </ul>
          </div>

          {/* ProDentim Way */}
          <div className="bg-gradient-to-b from-emerald-950/50 to-slate-950 border border-emerald-500/40 rounded-3xl p-8 space-y-6 relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 bg-emerald-500 text-slate-950 text-xs font-black px-4 py-1.5 rounded-bl-2xl">
              The ProDentim Solution
            </div>

            <div className="w-12 h-12 bg-emerald-500/20 text-emerald-400 rounded-2xl flex items-center justify-center border border-emerald-500/30">
              <ShieldCheck className="w-6 h-6" />
            </div>

            <h3 className="text-2xl font-bold text-white">Re-introducing Good Bacteria to Your Mouth</h3>

            <ul className="space-y-4 text-slate-200 text-sm sm:text-base">
              <li className="flex items-start gap-3">
                <span className="text-emerald-400 font-bold mt-0.5">✓</span>
                <span>Populates your mouth with <strong className="text-white">3.5 billion CFU</strong> of beneficial probiotic strains.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-emerald-400 font-bold mt-0.5">✓</span>
                <span>Supports natural teeth remineralization and strengthens tooth enamel from within.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-emerald-400 font-bold mt-0.5">✓</span>
                <span>Promotes long-lasting fresh breath, healthy gums, and even supports sinus health.</span>
              </li>
            </ul>
          </div>

        </div>

      </div>
    </section>
  );
}
