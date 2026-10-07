'use client';
import React, { useState } from 'react';
import { ChevronDown, Sparkles } from 'lucide-react';

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "What is ProDentim and how does it work?",
      a: "ProDentim is an advanced oral probiotic supplement containing 3.5 billion CFU of beneficial bacteria strains (L. Paracasei, B. lactis BL-04, L. Reuteri) along with prebiotics and botanical extracts. It dissolves slowly in your mouth to repopulate your oral microbiome and support teeth and gum health."
    },
    {
      q: "Are there any side effects?",
      a: "ProDentim is 100% natural, non-GMO, and formulated in an FDA-registered, GMP-certified facility in the USA. It is gentle, safe, and free from artificial stimulants or harmful chemicals."
    },
    {
      q: "How many bottles should I order?",
      a: "Clinical tests show the best results occur when taking ProDentim for 3 to 6 months or longer to allow the beneficial probiotic strains to fully colonize and protect your oral microbiome. Therefore, we highly recommend our 3 or 6 bottle discount packages."
    },
    {
      q: "What is the money-back guarantee?",
      a: "Every order of ProDentim is covered by our 60-day 100% money-back guarantee. If you are not completely satisfied with your results, return the bottles for a full refund with zero hassle."
    },
    {
      q: "How do I take ProDentim?",
      a: "Simply chew one soft tablet every morning to support your entire body, oral health, gums, and fresh breath throughout the day."
    }
  ];

  return (
    <section id="faq" className="py-20 bg-slate-900 text-white relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/30 px-4 py-1.5 rounded-full text-emerald-400 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Got Questions?</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-400 text-base">
            Everything you need to know about ProDentim ordering, ingredients, and results.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="bg-slate-950 border border-slate-800 rounded-2xl overflow-hidden transition-all"
            >
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full text-left p-6 flex justify-between items-center gap-4 font-bold text-base sm:text-lg hover:text-emerald-400 transition-colors"
              >
                <span>{faq.q}</span>
                <ChevronDown className={`w-5 h-5 text-emerald-400 shrink-0 transition-transform duration-300 ${openIndex === idx ? 'rotate-180' : ''}`} />
              </button>

              {openIndex === idx && (
                <div className="px-6 pb-6 text-slate-300 text-sm sm:text-base leading-relaxed border-t border-slate-800/60 pt-4">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
