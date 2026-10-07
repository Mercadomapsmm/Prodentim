'use client';
import React, { useState } from 'react';
import { Sparkles, Shield, ShoppingCart, Menu, X } from 'lucide-react';

interface NavbarProps {
  onOpenCheckout: (packageId?: string) => void;
}

export default function Navbar({ onOpenCheckout }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-slate-900/95 backdrop-blur-md border-b border-slate-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand */}
        <div className="flex items-center gap-3 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-500 to-teal-400 flex items-center justify-center shadow-lg shadow-emerald-500/30">
            <Sparkles className="w-6 h-6 text-white" />
          </div>
          <div>
            <span className="text-2xl font-black tracking-tight bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent">
              ProDentim™
            </span>
            <span className="block text-[10px] text-emerald-400 font-semibold tracking-widest uppercase">
              Official Microbiome Formula
            </span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
          <a href="#science" className="hover:text-emerald-400 transition-colors">Science</a>
          <a href="#quiz" className="hover:text-emerald-400 transition-colors">Health Quiz</a>
          <a href="#ingredients" className="hover:text-emerald-400 transition-colors">Ingredients</a>
          <a href="#pricing" className="hover:text-emerald-400 transition-colors">Special Packages</a>
          <a href="#reviews" className="hover:text-emerald-400 transition-colors">Reviews</a>
          <a href="#faq" className="hover:text-emerald-400 transition-colors">FAQ</a>
        </nav>

        {/* Action Button */}
        <div className="hidden lg:flex items-center gap-4">
          <div className="flex items-center gap-2 text-xs text-slate-400 border-r border-slate-700 pr-4">
            <Shield className="w-4 h-4 text-emerald-400" />
            <span>60-Day Guarantee</span>
          </div>
          <button
            onClick={() => onOpenCheckout('pkg-3')}
            className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white font-bold px-6 py-2.5 rounded-xl shadow-lg shadow-emerald-500/25 flex items-center gap-2 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
          >
            <ShoppingCart className="w-4 h-4" />
            <span>Order Now</span>
          </button>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-slate-900 border-b border-slate-800 px-4 pt-2 pb-6 space-y-3">
          <a
            href="#science"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-slate-300 hover:text-emerald-400 font-medium border-b border-slate-800/60"
          >
            Science & Microbiome
          </a>
          <a
            href="#quiz"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-slate-300 hover:text-emerald-400 font-medium border-b border-slate-800/60"
          >
            Take Health Quiz
          </a>
          <a
            href="#ingredients"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-slate-300 hover:text-emerald-400 font-medium border-b border-slate-800/60"
          >
            Ingredients
          </a>
          <a
            href="#pricing"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-slate-300 hover:text-emerald-400 font-medium border-b border-slate-800/60"
          >
            Special Packages
          </a>
          <a
            href="#reviews"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-slate-300 hover:text-emerald-400 font-medium border-b border-slate-800/60"
          >
            Customer Reviews
          </a>
          <a
            href="#faq"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-slate-300 hover:text-emerald-400 font-medium"
          >
            FAQ
          </a>
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenCheckout('pkg-3');
            }}
            className="w-full mt-3 bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-3 rounded-xl flex items-center justify-center gap-2 shadow-lg"
          >
            <ShoppingCart className="w-5 h-5" />
            <span>Claim Discounted Bottles</span>
          </button>
        </div>
      )}
    </header>
  );
}
