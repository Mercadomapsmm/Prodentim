import React from 'react';
import { Star, CheckCircle2, Sparkles } from 'lucide-react';

export default function Testimonials() {
  const reviews = [
    {
      name: "Sam Davis",
      location: "Chester, UK",
      rating: 5,
      date: "Verified Purchase",
      text: "My gums have never felt this healthy. For years I tried every toothpaste on the market and still had bleeding when flossing. Within 3 weeks of taking ProDentim every morning, the difference is night and day!"
    },
    {
      name: "Portia McAllister",
      location: "Nevada, USA",
      rating: 5,
      date: "Verified Purchase",
      text: "My breath is so fresh now, and I feel so much more confident. Plus, my dentist noticed a huge improvement during my checkup last week. Absolutely incredible formula!"
    },
    {
      name: "Theo Wright",
      location: "Sydney, Australia",
      rating: 5,
      date: "Verified Purchase",
      text: "I was skeptical about chewable probiotics for teeth, but the science made sense. Ordering the 6-bottle pack was the best health decision I've made this year. Highly recommended."
    }
  ];

  return (
    <section id="reviews" className="py-20 bg-slate-950 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center space-y-4 max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/30 px-4 py-1.5 rounded-full text-emerald-400 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Real Success Stories</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight">
            Loved by Over 95,000 Customers Worldwide
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            See how ProDentim has transformed dental hygiene for everyday people.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((rev, idx) => (
            <div 
              key={idx}
              className="bg-slate-900 border border-slate-800 rounded-3xl p-8 flex flex-col justify-between shadow-xl"
            >
              <div className="space-y-4">
                <div className="flex text-amber-400">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                <p className="text-slate-300 text-sm sm:text-base leading-relaxed italic">
                  &ldquo;{rev.text}&rdquo;
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-800/80 flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-white text-sm">{rev.name}</h4>
                  <span className="text-xs text-slate-500">{rev.location}</span>
                </div>
                <div className="flex items-center gap-1 text-xs text-emerald-400 font-medium bg-emerald-500/10 px-2.5 py-1 rounded-full">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>{rev.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
