import React from "react";
import { Link } from "react-router-dom";
import { 
  FaFacebookF, 
  FaTwitter, 
  FaInstagram, 
  FaLinkedinIn, 
  FaPaperPlane, 
  FaCcVisa, 
  FaCcMastercard, 
  FaCcPaypal, 
  FaCcApplePay 
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-white border-t border-slate-800/80 pt-16 pb-12 relative overflow-hidden">
      {/* Ambient Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[200px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800/80">
          
          {/* Brand Info (Spans 2 Columns on Large Screens) */}
          <div className="lg:col-span-2 space-y-4">
            <Link
              to="/"
              className="text-2xl font-black tracking-tight text-white inline-flex items-center gap-2 group"
            >
              <span className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white text-base font-bold shadow-lg shadow-blue-500/30 group-hover:bg-blue-500 transition-colors">
                S
              </span>
              <span>Shop<span className="text-blue-500">Sphere</span></span>
            </Link>

            <p className="text-slate-400 text-sm max-w-sm leading-relaxed">
              Your one-stop destination for quality products. Delivering premium collections and an effortless shopping experience worldwide.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-3 pt-2">
              <a href="#" aria-label="Facebook" className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-blue-600 hover:border-blue-500 transition-all">
                <FaFacebookF className="text-sm" />
              </a>
              <a href="#" aria-label="Twitter" className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-blue-600 hover:border-blue-500 transition-all">
                <FaTwitter className="text-sm" />
              </a>
              <a href="#" aria-label="Instagram" className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-blue-600 hover:border-blue-500 transition-all">
                <FaInstagram className="text-sm" />
              </a>
              <a href="#" aria-label="LinkedIn" className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-blue-600 hover:border-blue-500 transition-all">
                <FaLinkedinIn className="text-sm" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li><Link to="/shop" className="hover:text-blue-400 transition-colors">All Products</Link></li>
              <li><Link to="/categories" className="hover:text-blue-400 transition-colors">Featured Categories</Link></li>
              <li><Link to="/deals" className="hover:text-blue-400 transition-colors">Hot Deals</Link></li>
              <li><Link to="/about" className="hover:text-blue-400 transition-colors">About Us</Link></li>
            </ul>
          </div>

          {/* Customer Support */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
              Customer Care
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li><Link to="/help" className="hover:text-blue-400 transition-colors">Help Center / FAQ</Link></li>
              <li><Link to="/shipping" className="hover:text-blue-400 transition-colors">Shipping & Delivery</Link></li>
              <li><Link to="/returns" className="hover:text-blue-400 transition-colors">Returns & Refunds</Link></li>
              <li><Link to="/contact" className="hover:text-blue-400 transition-colors">Contact Support</Link></li>
            </ul>
          </div>

          {/* Newsletter Subscription */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
              Stay Updated
            </h4>
            <p className="text-xs text-slate-400 mb-3">
              Subscribe to get special offers, free giveaways, and once-in-a-lifetime deals.
            </p>
            <form onSubmit={(e) => e.preventDefault()} className="space-y-2">
              <div className="relative">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full bg-slate-900 text-sm text-slate-200 placeholder-slate-500 rounded-xl pl-4 pr-10 py-2.5 border border-slate-800 focus:outline-none focus:border-blue-500 transition-all"
                  required
                />
                <button
                  type="submit"
                  aria-label="Subscribe"
                  className="absolute right-1.5 top-1.5 bottom-1.5 px-3 bg-blue-600 hover:bg-blue-500 text-white rounded-lg transition-colors flex items-center justify-center"
                >
                  <FaPaperPlane className="text-xs" />
                </button>
              </div>
            </form>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Payment Icons */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} ShopSphere. All rights reserved.</p>

          {/* Payment Methods */}
          <div className="flex items-center gap-4 text-2xl text-slate-400">
            <FaCcVisa className="hover:text-white transition-colors" />
            <FaCcMastercard className="hover:text-white transition-colors" />
            <FaCcPaypal className="hover:text-white transition-colors" />
            <FaCcApplePay className="hover:text-white transition-colors" />
          </div>

          {/* Policy Links */}
          <div className="flex gap-4">
            <Link to="/privacy" className="hover:text-slate-300 transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-slate-300 transition-colors">Terms of Service</Link>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;