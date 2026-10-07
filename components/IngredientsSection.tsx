import React from 'react';
import { Sparkles, CheckCircle2, Shield } from 'lucide-react';

export default function IngredientsSection() {
  const ingredients = [
    {
      name: "Lactobacillus Paracasei",
      category: "Probiotic Strain",
      description: "Supports the health of your gums and helps keep your sinuses free and open for effortless breathing.",
      badge: "Gum Support"
    },
    {
      name: "Bifidobacterium Lactis BL-04®",
      category: "Probiotic Strain",
      description: "Supports a balanced oral microbiome population while maintaining a healthy immune system response.",
      badge: "Microbiome Balance"
    },
    {
      name: "Lactobacillus Reuteri",
      category: "Probiotic Strain",
      description: "Helps with inflammation and provides an optimal environment for beneficial oral bacteria to thrive.",
      badge: "Anti-Inflammatory"
    },
    {
      name: "Inulin",
      category: "Prebiotic Fiber",
      description: "Nourishes the good bacteria in your mouth so they can multiply and outcompete harmful bacteria.",
      badge: "Prebiotic Fuel"
    },
    {
      name: "Malic Acid",
      category: "Natural Extract",
      description: "Sourced naturally from strawberries, helps maintain whiter teeth and supports natural tooth brightness.",
      badge: "Tooth Brightness"
    },
    {
      name: "Tricalcium Phosphate",
      category: "Mineral Support",
      description: "Directly aids in tooth enamel remineralization and strengthens overall structural tooth integrity.",
      badge: "Enamel Shield"
    },
    {
      name: "Peppermint",
      category: "Essential Herb",
      description: "Renowned for its natural anti-inflammatory properties and instant long-lasting fresh breath.",
      badge: "Fresh Breath"
    }
  ];

  return (
    <section id="ingredients" className="py-20 bg-slate-950 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/30 px-4 py-1.5 rounded-full text-emerald-400 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Proprietary Blend</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight">
            Inside Every ProDentim Chewable Tablet
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            A physician-formulated blend of 3.5 billion probiotic bacteria and powerful botanical nutrients, designed to dissolve gently in your mouth.
          </p>
        </div>

        {/* Ingredients Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ingredients.map((item, idx) => (
            <div 
              key={idx}
              className="bg-slate-900 border border-slate-800 hover:border-emerald-500/50 p-6 rounded-3xl transition-all duration-300 flex flex-col justify-between group shadow-xl"
            >
              <div>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
                    {item.badge}
                  </span>
                  <span className="text-xs text-slate-500 font-mono">{item.category}</span>
                </div>

                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-emerald-400 transition-colors">
                  {item.name}
                </h3>

                <p className="text-slate-300 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-800/80 flex items-center gap-2 text-xs text-slate-400">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Clinically tested & pure potency</span>
              </div>
            </div>
          ))}

          {/* Callout Card */}
          <div className="bg-gradient-to-br from-emerald-600 to-teal-700 rounded-3xl p-6 text-white flex flex-col justify-between shadow-2xl">
            <div className="space-y-3">
              <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
                <Shield className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-xl font-black">100% Natural & Safe</h3>
              <p className="text-emerald-100 text-sm leading-relaxed">
                ProDentim is non-GMO, gluten-free, manufactured in an FDA registered and GMP certified facility in the USA.
              </p>
            </div>
            <div className="pt-4 text-xs font-semibold tracking-wider uppercase text-emerald-200">
              Zero Artificial Stimulants
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
