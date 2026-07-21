import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaShoppingCart, FaUser, FaSearch, FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-slate-950/80 backdrop-blur-xl border-b border-slate-800/80 transition-all">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between gap-6">

        {/* Brand Logo */}
        <Link
          to="/"
          className="text-2xl font-black tracking-tight text-white flex items-center gap-2 group"
        >
          <span className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white text-base font-bold shadow-lg shadow-blue-500/30 group-hover:bg-blue-500 transition-colors">
            S
          </span>
          <span>Shop<span className="text-blue-500">Sphere</span></span>
        </Link>

        {/* Navigation Links (Desktop) */}
        <nav className="hidden md:flex items-center gap-8 font-medium text-sm text-slate-300">
          <NavLink 
            to="/" 
            className={({ isActive }) => 
              `hover:text-white transition-colors relative py-1 ${isActive ? "text-white font-semibold after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-blue-500 after:rounded-full" : ""}`
            }
          >
            Home
          </NavLink>
          <NavLink 
            to="/shop" 
            className={({ isActive }) => 
              `hover:text-white transition-colors relative py-1 ${isActive ? "text-white font-semibold after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-blue-500 after:rounded-full" : ""}`
            }
          >
            Shop
          </NavLink>
          <NavLink 
            to="/categories" 
            className={({ isActive }) => 
              `hover:text-white transition-colors relative py-1 ${isActive ? "text-white font-semibold after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-blue-500 after:rounded-full" : ""}`
            }
          >
            Categories
          </NavLink>
        </nav>

        {/* Search Bar (Desktop) */}
        <div className="hidden lg:flex items-center relative w-72">
          <FaSearch className="absolute left-3.5 text-slate-500 text-sm pointer-events-none" />
          <input
            type="text"
            placeholder="Search products..."
            className="w-full bg-slate-900/90 text-sm text-slate-200 placeholder-slate-500 rounded-xl pl-10 pr-10 py-2.5 border border-slate-800 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
          />
          <kbd className="absolute right-3 hidden sm:inline-block px-1.5 py-0.5 text-[10px] font-semibold text-slate-500 bg-slate-800 rounded border border-slate-700">
            ⌘K
          </kbd>
        </div>

        {/* Action Buttons & Icons */}
        <div className="flex items-center gap-4">

          {/* Cart Icon */}
          <Link
            to="/cart"
            aria-label="Shopping Cart"
            className="relative p-2.5 rounded-xl text-slate-300 hover:text-white hover:bg-slate-900 border border-transparent hover:border-slate-800 transition-all"
          >
            <FaShoppingCart className="text-lg" />
            <span className="absolute top-1.5 right-1.5 bg-blue-600 text-white font-bold rounded-full h-4 min-w-4 px-1 text-[10px] flex items-center justify-center shadow-md shadow-blue-500/50">
              2
            </span>
          </Link>

          {/* User Profile / Auth */}
          <Link
            to="/login"
            aria-label="User Account"
            className="p-2.5 rounded-xl text-slate-300 hover:text-white hover:bg-slate-900 border border-transparent hover:border-slate-800 transition-all"
          >
            <FaUser className="text-lg" />
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2.5 rounded-xl text-slate-300 hover:text-white hover:bg-slate-900 border border-transparent hover:border-slate-800 transition-all"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <FaTimes className="text-xl" /> : <FaBars className="text-xl" />}
          </button>

        </div>

      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-800/80 bg-slate-950 px-6 py-6 space-y-4">
          <div className="relative w-full mb-4">
            <FaSearch className="absolute left-3.5 top-3 text-slate-500 text-sm pointer-events-none" />
            <input
              type="text"
              placeholder="Search products..."
              className="w-full bg-slate-900 text-sm text-slate-200 placeholder-slate-500 rounded-xl pl-10 pr-4 py-2.5 border border-slate-800 focus:outline-none focus:border-blue-500"
            />
          </div>
          <nav className="flex flex-col space-y-3 font-medium text-slate-300">
            <Link 
              to="/" 
              onClick={() => setMobileMenuOpen(false)} 
              className="hover:text-white py-2 transition-colors"
            >
              Home
            </Link>
            <Link 
              to="/shop" 
              onClick={() => setMobileMenuOpen(false)} 
              className="hover:text-white py-2 transition-colors"
            >
              Shop
            </Link>
            <Link 
              to="/categories" 
              onClick={() => setMobileMenuOpen(false)} 
              className="hover:text-white py-2 transition-colors"
            >
              Categories
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;