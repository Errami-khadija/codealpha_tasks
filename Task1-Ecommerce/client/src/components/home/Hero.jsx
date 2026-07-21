import React from 'react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-slate-950 text-white py-16 lg:py-24">
      {/* Background Decorative Ambient Glows */}
      <div className="absolute top-0 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 translate-x-1/2 translate-y-1/2 w-[500px] h-[500px] bg-indigo-600/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 items-center gap-12 lg:gap-8">
          
          {/* Left Column: Copy & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start">
            
            {/* Promo Tag */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-6 backdrop-blur-md">
              <span className="flex h-2 w-2 rounded-full bg-blue-400 animate-pulse" />
              New Collection 2026
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15]">
              Elevate Your Everyday Style & Experience
            </h1>

            {/* Subtitle */}
            <p className="mt-6 text-lg sm:text-xl text-slate-300 max-w-xl leading-relaxed">
              Explore curated premium essentials built for quality and everyday utility. Enjoy exclusive launch pricing for a limited time.
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
              <Link
                to="/shop"
                className="inline-flex items-center justify-center px-8 py-4 rounded-xl font-bold text-slate-950 bg-white hover:bg-slate-100 shadow-lg shadow-white/10 hover:shadow-white/20 active:scale-[0.98] transition-all duration-200"
              >
                Shop Now
                <svg className="w-5 h-5 ml-2 -mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>

              <Link
                to="/register"
                className="inline-flex items-center justify-center px-8 py-4 rounded-xl font-semibold text-white bg-slate-900/80 hover:bg-slate-800 border border-slate-700/80 hover:border-slate-600 transition-all duration-200"
              >
                Create Account
              </Link>
            </div>

            {/* Social Proof / Rating */}
            <div className="mt-10 pt-8 border-t border-slate-800/80 flex items-center gap-6 w-full">
              <div className="flex -space-x-2">
                <img className="inline-block h-9 w-9 rounded-full ring-2 ring-slate-950" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100" alt="Customer" />
                <img className="inline-block h-9 w-9 rounded-full ring-2 ring-slate-950" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100" alt="Customer" />
                <img className="inline-block h-9 w-9 rounded-full ring-2 ring-slate-950" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100" alt="Customer" />
              </div>
              <div>
                <div className="flex items-center gap-1 text-amber-400 text-sm">
                  ★★★★★
                  <span className="text-white font-bold ml-1">4.9/5</span>
                </div>
                <p className="text-xs text-slate-400 mt-0.5">Over 10,000+ satisfied shoppers</p>
              </div>
            </div>

          </div>

          {/* Right Column: Featured Image Display */}
          <div className="lg:col-span-5 relative mt-8 lg:mt-0">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Product Card Glass Wrapper */}
              <div className="relative rounded-3xl p-3 bg-gradient-to-b from-slate-800/60 to-slate-900/60 border border-slate-700/50 backdrop-blur-xl shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800"
                  alt="Featured Product"
                  className="w-full h-[420px] object-cover rounded-2xl"
                />

                {/* Floating Highlight Badge */}
                <div className="absolute top-8 right-8 bg-slate-950/80 backdrop-blur-md border border-slate-700 text-white px-4 py-2 rounded-2xl shadow-xl flex items-center gap-3">
                  <span className="flex h-3 w-3 rounded-full bg-emerald-500" />
                  <div>
                    <p className="text-[10px] text-slate-400 uppercase tracking-wider font-semibold">In Stock</p>
                    <p className="text-xs font-bold">Fast Shipping Available</p>
                  </div>
                </div>

                {/* Price / Product Tag Overlay */}
                <div className="absolute bottom-8 left-8 right-8 bg-slate-950/80 backdrop-blur-md border border-slate-800 p-4 rounded-2xl flex items-center justify-between">
                  <div>
                    <h3 className="text-sm font-semibold text-white">Minimalist Smart Watch</h3>
                    <p className="text-xs text-slate-400">Series 5 Edition</p>
                  </div>
                  <div className="text-right">
                    <span className="text-xs text-slate-400 line-through mr-1.5">$249</span>
                    <span className="text-lg font-bold text-white">$189</span>
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>

        {/* E-Commerce Value Props Bar */}
        <div className="mt-16 pt-8 border-t border-slate-800/60 grid grid-cols-2 md:grid-cols-4 gap-6 text-center md:text-left">
          <div className="flex items-center gap-3 justify-center md:justify-start">
            <svg className="w-5 h-5 text-blue-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/></svg>
            <span className="text-xs font-medium text-slate-300">Free Worldwide Delivery</span>
          </div>
          <div className="flex items-center gap-3 justify-center md:justify-start">
            <svg className="w-5 h-5 text-blue-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>
            <span className="text-xs font-medium text-slate-300">2-Year Warranty</span>
          </div>
          <div className="flex items-center gap-3 justify-center md:justify-start">
            <svg className="w-5 h-5 text-blue-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/></svg>
            <span className="text-xs font-medium text-slate-300">30-Day Easy Returns</span>
          </div>
          <div className="flex items-center gap-3 justify-center md:justify-start">
            <svg className="w-5 h-5 text-blue-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/></svg>
            <span className="text-xs font-medium text-slate-300">100% Secure Checkout</span>
          </div>
        </div>

      </div>
    </section>
  );
}