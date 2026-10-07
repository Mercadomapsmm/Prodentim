'use client';
import React, { useState } from 'react';
import { CheckCircle2, ShieldCheck, Sparkles, Truck, Star, ArrowRight } from 'lucide-react';
import Image from 'next/image';

interface PricingSectionProps {
  onOpenCheckout: (pkgId: string) => void;
}

export default function PricingSection({ onOpenCheckout }: PricingSectionProps) {
  const [selectedPkg, setSelectedPkg] = useState('pkg-3'); // Default to 3 bottles (Best Value)

  const packages = [
    {
      id: 'pkg-1',
      title: 'Starter Supply',
      bottles: 2,
      duration: '60 Day Supply',
      pricePerBottle: 79,
      totalPrice: 158,
      savings: 'Save $200',
      popular: false,
      shipping: 'Small Shipping Fee',
      freeBonuses: false
    },
    {
      id: 'pkg-3',
      title: 'Best Value Pack',
      bottles: 3,
      duration: '90 Day Supply',
      pricePerBottle: 69,
      totalPrice: 207,
      savings: 'Save $330 + 2 Free E-Books',
      popular: true,
      shipping: 'FREE Shipping',
      freeBonuses: true
    },
    {
      id: 'pkg-6',
      title: 'Ultimate Discount Pack',
      bottles: 6,
      duration: '180 Day Supply',
      pricePerBottle: 59,
      totalPrice: 354,
      savings: 'Save $780 + 2 Free E-Books',
      popular: false,
      shipping: 'FREE Shipping',
      freeBonuses: true
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-slate-900 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/30 px-4 py-1.5 rounded-full text-emerald-400 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Special Discounted Pricing</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight">
            Claim Your ProDentim Package Below
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Select your package below with our 60-day 100% money-back guarantee. Order 3 or 6 bottles to receive free shipping and 2 exclusive bonus e-books!
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid lg:grid-cols-3 gap-8 items-stretch">
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              onClick={() => setSelectedPkg(pkg.id)}
              className={`rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 cursor-pointer relative ${
                pkg.popular 
                  ? 'bg-gradient-to-b from-slate-800 to-slate-950 border-2 border-emerald-400 shadow-2xl shadow-emerald-500/20 transform lg:-translate-y-4' 
                  : 'bg-slate-950 border border-slate-800 hover:border-slate-700'
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-emerald-500 to-teal-400 text-slate-950 font-black text-xs uppercase px-4 py-1.5 rounded-full shadow-lg tracking-wider">
                  ⭐ Most Popular Choice
                </div>
              )}

              <div>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-lg font-bold text-white">{pkg.title}</span>
                  <div className={`w-6 h-6 rounded-full border flex items-center justify-center ${
                    selectedPkg === pkg.id ? 'bg-emerald-500 border-emerald-400 text-slate-950 font-bold' : 'border-slate-700'
                  }`}>
                    {selectedPkg === pkg.id && <CheckCircle2 className="w-4 h-4 text-slate-950" />}
                  </div>
                </div>

                <div className="text-slate-400 text-sm font-medium mb-6">
                  {pkg.duration} ({pkg.bottles} {pkg.bottles === 1 ? 'Bottle' : 'Bottles'})
                </div>

                {/* Bottle Graphics */}
                <div className="bg-slate-900/80 p-4 rounded-2xl border border-slate-800/80 flex flex-col items-center justify-center mb-6">
                  {pkg.bottles === 6 ? (
                    <div className="grid grid-cols-3 gap-2 justify-items-center">
                      {[...Array(pkg.bottles)].map((_, i) => (
                        <div key={i} className="relative w-12 h-28 rounded-xl overflow-hidden shadow-2xl border border-emerald-500/30">
                          <Image
                            src="/prodentim-bottle-portrait.jpg"
                            alt="ProDentim Bottle"
                            fill
                            className="object-cover"
                            referrerPolicy="no-referrer"
                          />
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="flex items-center justify-center gap-2">
                      {[...Array(pkg.bottles)].map((_, i) => (
                        <div key={i} className={`relative ${pkg.bottles === 3 ? 'w-14 h-32' : 'w-20 h-36'} rounded-xl overflow-hidden shadow-2xl border border-emerald-500/30`}>
                          <Image
                            src="/prodentim-bottle-portrait.jpg"
                            alt="ProDentim Bottle"
                            fill
                            className="object-cover"
                            referrerPolicy="no-referrer"
                          />
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Price Display */}
                <div className="mb-6">
                  <div className="text-4xl sm:text-5xl font-black text-white flex items-baseline gap-1">
                    <span>${pkg.pricePerBottle}</span>
                    <span className="text-sm font-normal text-slate-400">/bottle</span>
                  </div>
                  <div className="text-xs text-emerald-400 font-semibold mt-1">
                    {pkg.savings}
                  </div>
                </div>

                {/* Features */}
                <ul className="space-y-3 text-sm text-slate-300 mb-8 border-t border-slate-800/80 pt-6">
                  <li className="flex items-center gap-2.5">
                    <Truck className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>{pkg.shipping}</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>60-Day Money Back Guarantee</span>
                  </li>
                  {pkg.freeBonuses && (
                    <li className="flex items-center gap-2.5 text-emerald-300 font-medium">
                      <Sparkles className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>Includes 2 Free Bonus E-Books</span>
                    </li>
                  )}
                </ul>
              </div>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onOpenCheckout(pkg.id);
                }}
                className={`w-full py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all shadow-lg ${
                  pkg.popular 
                    ? 'bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white shadow-emerald-500/30' 
                    : 'bg-slate-800 hover:bg-slate-700 text-white'
                }`}
              >
                <span>Add To Cart & Checkout</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>

        {/* Money Back Guarantee Banner */}
        <div className="mt-16 bg-slate-950 border border-slate-800 rounded-3xl p-8 flex flex-col md:flex-row items-center gap-6 shadow-xl">
          <div className="w-20 h-20 rounded-2xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center shrink-0">
            <ShieldCheck className="w-10 h-10" />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-white mb-2">60-Day 100% Money-Back Guarantee</h3>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Your order today is covered by our iron-clad 60-day 100% money-back guarantee. If you are not astonished by how fast your gums feel healthier and your breath stays fresh, simply return every bottle for a full, no-questions-asked refund.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
