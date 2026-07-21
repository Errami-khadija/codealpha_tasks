import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaLock,
  FaEye,
  FaEyeSlash,
  FaCheckCircle,
} from "react-icons/fa";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  return (
    <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center py-12 px-4 relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-indigo-600/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Main Container */}
      <div className="max-w-5xl w-full bg-slate-900/60 border border-slate-800/80 rounded-3xl shadow-2xl backdrop-blur-2xl overflow-hidden grid md:grid-cols-2 relative z-10">

        {/* Left Side - Brand & Feature Highlights */}
        <div className="relative p-8 sm:p-12 flex flex-col justify-between overflow-hidden bg-gradient-to-br from-blue-900/40 via-slate-900/80 to-slate-900/90 border-b md:border-b-0 md:border-r border-slate-800/80">
          <div className="absolute top-0 left-0 w-full h-full bg-blue-600/5 blur-2xl pointer-events-none" />

          <div>
            <span className="text-blue-400 text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 inline-block mb-4">
              Welcome to ShopSphere
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
              Join our exclusive community
            </h1>
            <p className="text-slate-300 text-sm leading-relaxed mb-6">
              Create your account to enjoy seamless checkout, priority order tracking, member-only discounts, and personalized recommendations.
            </p>

            <ul className="space-y-3 text-xs text-slate-300 font-medium">
              <li className="flex items-center gap-2.5">
                <FaCheckCircle className="text-blue-400 text-sm flex-shrink-0" />
                <span>Fast & encrypted checkout process</span>
              </li>
              <li className="flex items-center gap-2.5">
                <FaCheckCircle className="text-blue-400 text-sm flex-shrink-0" />
                <span>Earn reward points on every purchase</span>
              </li>
              <li className="flex items-center gap-2.5">
                <FaCheckCircle className="text-blue-400 text-sm flex-shrink-0" />
                <span>24/7 Priority customer support</span>
              </li>
            </ul>
          </div>

          <div className="relative mt-8 group">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-300" />
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=700"
              alt="Register visual"
              className="relative rounded-xl object-cover w-full h-48 sm:h-56 border border-slate-800"
            />
          </div>
        </div>

        {/* Right Side - Form */}
        <div className="p-8 sm:p-12 flex flex-col justify-center">
          <div className="mb-8">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Create Account
            </h2>
            <p className="text-slate-400 text-sm mt-1">
              Please enter your details to register.
            </p>
          </div>

          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>

            {/* Name Input */}
            <div className="relative">
              <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 text-sm" />
              <input
                type="text"
                placeholder="Full Name"
                className="w-full pl-11 pr-4 py-3 bg-slate-950/80 border border-slate-800 rounded-xl text-slate-100 placeholder-slate-500 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
              />
            </div>

            {/* Email Input */}
            <div className="relative">
              <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 text-sm" />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full pl-11 pr-4 py-3 bg-slate-950/80 border border-slate-800 rounded-xl text-slate-100 placeholder-slate-500 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
              />
            </div>

            {/* Phone Input */}
            <div className="relative">
              <FaPhone className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 text-sm" />
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full pl-11 pr-4 py-3 bg-slate-950/80 border border-slate-800 rounded-xl text-slate-100 placeholder-slate-500 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
              />
            </div>

            {/* Password Input */}
            <div className="relative">
              <FaLock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 text-sm" />
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className="w-full pl-11 pr-11 py-3 bg-slate-950/80 border border-slate-800 rounded-xl text-slate-100 placeholder-slate-500 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-300 transition-colors"
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>

            {/* Confirm Password Input */}
            <div className="relative">
              <FaLock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 text-sm" />
              <input
                type={showConfirm ? "text" : "password"}
                placeholder="Confirm Password"
                className="w-full pl-11 pr-11 py-3 bg-slate-950/80 border border-slate-800 rounded-xl text-slate-100 placeholder-slate-500 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
              />
              <button
                type="button"
                onClick={() => setShowConfirm(!showConfirm)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-300 transition-colors"
                aria-label={showConfirm ? "Hide confirm password" : "Show confirm password"}
              >
                {showConfirm ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>

            {/* Terms Checkbox */}
            <div className="flex items-center gap-3 pt-2">
              <input
                type="checkbox"
                id="terms"
                className="w-4 h-4 rounded bg-slate-950 border-slate-800 text-blue-600 focus:ring-blue-500/30 focus:ring-offset-0 cursor-pointer"
              />
              <label htmlFor="terms" className="text-xs text-slate-400 cursor-pointer select-none">
                I agree to the{" "}
                <a href="#terms" className="text-blue-400 hover:underline font-semibold">
                  Terms & Conditions
                </a>
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full mt-4 bg-blue-600 hover:bg-blue-500 text-white py-3.5 rounded-xl font-bold text-sm transition-all shadow-lg shadow-blue-600/20 active:scale-[0.99]"
            >
              Create Account
            </button>

          </form>

          {/* Login Redirection */}
          <p className="text-center mt-8 text-xs text-slate-400">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-blue-400 font-bold hover:underline ml-1"
            >
              Log in
            </Link>
          </p>
        </div>

      </div>
    </div>
  );
};

export default Register;