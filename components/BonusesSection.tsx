import React from 'react';
import { BookOpen, Sparkles, CheckCircle2 } from 'lucide-react';

export default function BonusesSection() {
  const bonuses = [
    {
      title: "Bonus #1: Bad Breath Gone. One Day Detox",
      retailPrice: "$99",
      description: "Kickstart your ProDentim journey with 7 unexpected spice and herb mixes from your kitchen that instantly freshen your breath and assist your oral microbiome.",
      imageBadge: "FREE E-BOOK"
    },
    {
      title: "Bonus #2: Hollywood White Teeth at Home",
      retailPrice: "$79",
      description: "Discover the 10-second brushing trick that famous actors use to keep their teeth dazzling white, along with little-known secrets to remove stains naturally.",
      imageBadge: "FREE E-BOOK"
    }
  ];

  return (
    <section className="py-20 bg-slate-950 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center space-y-4 max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/30 px-4 py-1.5 rounded-full text-emerald-400 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Exclusive Free Gifts</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight">
            Included Free With 3 & 6 Bottle Orders Today
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            When you order multi-bottle packages today, you will instantly receive two bestselling digital guides to accelerate your dental health results.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {bonuses.map((bonus, idx) => (
            <div 
              key={idx}
              className="bg-slate-900 border border-slate-800 rounded-3xl p-8 flex flex-col sm:flex-row items-center gap-6 shadow-2xl relative overflow-hidden"
            >
              <div className="w-32 h-44 bg-gradient-to-br from-emerald-600 via-teal-700 to-slate-900 rounded-2xl shadow-xl border border-emerald-400/40 flex flex-col justify-between p-4 shrink-0 text-white">
                <span className="text-[10px] font-black tracking-wider bg-black/40 px-2 py-0.5 rounded text-emerald-300 w-max">
                  {bonus.imageBadge}
                </span>
                <div className="space-y-1">
                  <div className="text-xs font-bold leading-tight">DIGITAL GUIDE</div>
                  <div className="text-[9px] text-slate-300">Instant Access</div>
                </div>
                <div className="text-[10px] text-emerald-200 font-mono line-through">
                  Value {bonus.retailPrice}
                </div>
              </div>

              <div className="space-y-4 text-center sm:text-left">
                <div className="inline-block bg-emerald-500/20 text-emerald-400 text-xs font-bold px-3 py-1 rounded-full">
                  Worth {bonus.retailPrice} - Yours FREE Today
                </div>
                <h3 className="text-xl sm:text-2xl font-black">{bonus.title}</h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  {bonus.description}
                </p>
                <div className="flex items-center justify-center sm:justify-start gap-2 text-xs text-emerald-400 font-medium">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Instant digital download after checkout</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
