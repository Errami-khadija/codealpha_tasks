import React, { useState } from "react";
import { Link } from "react-router-dom";
import { 
  FaArrowLeft, 
  FaCreditCard, 
  FaLock, 
  FaShieldAlt, 
  FaUserCheck, 
  FaTruck, 
  FaCcPaypal, 
  FaCcApplePay 
} from "react-icons/fa";

const Checkout = () => {
  const [paymentMethod, setPaymentMethod] = useState("card");

  return (
    <div className="bg-slate-950 text-white min-h-screen py-12 relative overflow-hidden">
      {/* Background Decorative Glows */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-10 w-96 h-96 bg-indigo-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Page Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10 pb-6 border-b border-slate-800/80">
          <div>
            <span className="text-blue-400 text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 inline-block mb-2">
              Final Step
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
              Checkout
            </h1>
          </div>

          <Link
            to="/cart"
            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-300 hover:text-blue-400 transition-colors"
          >
            <FaArrowLeft className="text-xs" />
            Back to Cart
          </Link>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-start">

          {/* Billing & Shipping Form */}
          <div className="lg:col-span-8 space-y-8">
            
            {/* Form Glass Container */}
            <div className="bg-slate-900/60 border border-slate-800/80 rounded-2xl backdrop-blur-xl p-6 sm:p-8">

              <form onSubmit={(e) => e.preventDefault()} className="space-y-8">
                
                {/* Section 1: Customer Info */}
                <div>
                  <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2.5">
                    <FaUserCheck className="text-blue-400 text-lg" />
                    <span>Contact & Billing Details</span>
                  </h2>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-2">
                        First Name
                      </label>
                      <input
                        type="text"
                        placeholder="John"
                        className="w-full bg-slate-950/80 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-2">
                        Last Name
                      </label>
                      <input
                        type="text"
                        placeholder="Doe"
                        className="w-full bg-slate-950/80 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6 mt-6">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        placeholder="john@example.com"
                        className="w-full bg-slate-950/80 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        placeholder="+1 (555) 000-0000"
                        className="w-full bg-slate-950/80 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                      />
                    </div>
                  </div>
                </div>

                <hr className="border-slate-800/80" />

                {/* Section 2: Shipping Address */}
                <div>
                  <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2.5">
                    <FaTruck className="text-blue-400 text-lg" />
                    <span>Shipping Address</span>
                  </h2>

                  <div className="space-y-6">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-2">
                        Street Address
                      </label>
                      <input
                        type="text"
                        placeholder="123 Shopping Blvd, Suite 100"
                        className="w-full bg-slate-950/80 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                      />
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                      <div>
                        <label className="block text-xs font-semibold text-slate-300 mb-2">
                          City
                        </label>
                        <input
                          type="text"
                          placeholder="New York"
                          className="w-full bg-slate-950/80 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-300 mb-2">
                          Postal / ZIP Code
                        </label>
                        <input
                          type="text"
                          placeholder="10001"
                          className="w-full bg-slate-950/80 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-300 mb-2">
                          Country
                        </label>
                        <input
                          type="text"
                          placeholder="United States"
                          className="w-full bg-slate-950/80 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <hr className="border-slate-800/80" />

                {/* Section 3: Payment Method */}
                <div>
                  <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2.5">
                    <FaCreditCard className="text-blue-400 text-lg" />
                    <span>Payment Selection</span>
                  </h2>

                  {/* Payment Tabs */}
                  <div className="grid grid-cols-3 gap-3 mb-6">
                    <button
                      type="button"
                      onClick={() => setPaymentMethod("card")}
                      className={`p-3.5 rounded-xl border text-xs font-semibold flex flex-col items-center gap-2 transition-all ${
                        paymentMethod === "card"
                          ? "bg-blue-600/20 border-blue-500 text-white shadow-lg shadow-blue-500/10"
                          : "bg-slate-950/80 border-slate-800 text-slate-400 hover:text-white"
                      }`}
                    >
                      <FaCreditCard className="text-lg" />
                      <span>Credit Card</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setPaymentMethod("paypal")}
                      className={`p-3.5 rounded-xl border text-xs font-semibold flex flex-col items-center gap-2 transition-all ${
                        paymentMethod === "paypal"
                          ? "bg-blue-600/20 border-blue-500 text-white shadow-lg shadow-blue-500/10"
                          : "bg-slate-950/80 border-slate-800 text-slate-400 hover:text-white"
                      }`}
                    >
                      <FaCcPaypal className="text-lg" />
                      <span>PayPal</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setPaymentMethod("applepay")}
                      className={`p-3.5 rounded-xl border text-xs font-semibold flex flex-col items-center gap-2 transition-all ${
                        paymentMethod === "applepay"
                          ? "bg-blue-600/20 border-blue-500 text-white shadow-lg shadow-blue-500/10"
                          : "bg-slate-950/80 border-slate-800 text-slate-400 hover:text-white"
                      }`}
                    >
                      <FaCcApplePay className="text-lg" />
                      <span>Apple Pay</span>
                    </button>
                  </div>

                  {/* Card Fields Conditional Display */}
                  {paymentMethod === "card" ? (
                    <div className="space-y-6">
                      <div>
                        <label className="block text-xs font-semibold text-slate-300 mb-2">
                          Card Number
                        </label>
                        <input
                          type="text"
                          placeholder="1234  5678  9012  3456"
                          className="w-full bg-slate-950/80 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                        />
                      </div>

                      <div className="grid grid-cols-2 gap-6">
                        <div>
                          <label className="block text-xs font-semibold text-slate-300 mb-2">
                            Expiration Date
                          </label>
                          <input
                            type="text"
                            placeholder="MM/YY"
                            className="w-full bg-slate-950/80 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-semibold text-slate-300 mb-2">
                            Security Code (CVV)
                          </label>
                          <input
                            type="password"
                            placeholder="***"
                            className="w-full bg-slate-950/80 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                          />
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="text-center py-6 border border-dashed border-slate-800 rounded-xl text-slate-400 text-xs">
                      You will be redirected to complete your authentication via {paymentMethod === "paypal" ? "PayPal" : "Apple Pay"}.
                    </div>
                  )}
                </div>

              </form>

            </div>

          </div>

          {/* Sticky Order Summary */}
          <div className="lg:col-span-4 bg-slate-900/60 border border-slate-800/80 rounded-2xl backdrop-blur-xl p-6 sticky top-24">
            <h2 className="text-xl font-bold text-white mb-6 pb-4 border-b border-slate-800/80">
              Order Review
            </h2>

            {/* Line Items List */}
            <div className="space-y-4 mb-6 pb-6 border-b border-slate-800/80">
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-2">
                  <span className="w-5 h-5 rounded-md bg-slate-800 text-slate-300 text-xs font-bold flex items-center justify-center border border-slate-700">1</span>
                  <span className="text-slate-300 font-medium">Wireless Headphones</span>
                </div>
                <span className="font-bold text-white">$89.99</span>
              </div>

              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-2">
                  <span className="w-5 h-5 rounded-md bg-slate-800 text-slate-300 text-xs font-bold flex items-center justify-center border border-slate-700">2</span>
                  <span className="text-slate-300 font-medium">Smart Watch</span>
                </div>
                <span className="font-bold text-white">$299.98</span>
              </div>
            </div>

            {/* Price Calculations */}
            <div className="space-y-3.5 text-sm text-slate-300">
              <div className="flex justify-between">
                <span className="text-slate-400">Subtotal</span>
                <span className="font-semibold text-white">$389.97</span>
              </div>

              <div className="flex justify-between">
                <span className="text-slate-400">Express Shipping</span>
                <span className="text-emerald-400 font-semibold">Free</span>
              </div>

              <div className="flex justify-between">
                <span className="text-slate-400">Estimated Tax</span>
                <span className="font-semibold text-white">$25.00</span>
              </div>

              <div className="pt-4 border-t border-slate-800/80 flex justify-between items-baseline">
                <span className="text-base font-bold text-white">Total Due</span>
                <div className="text-right">
                  <span className="text-2xl font-black text-white">
                    $414.97
                  </span>
                  <p className="text-[10px] text-slate-400">Includes $25.00 in taxes</p>
                </div>
              </div>
            </div>

            {/* Submit Action */}
            <button className="mt-8 w-full bg-blue-600 hover:bg-blue-500 text-white py-4 rounded-xl font-bold transition-all shadow-lg shadow-blue-600/20 flex items-center justify-center gap-2 active:scale-[0.99]">
              <FaLock className="text-xs" />
              <span>Place Order ($414.97)</span>
            </button>

            {/* Security Note */}
            <div className="mt-6 pt-6 border-t border-slate-800/80 flex items-center justify-center gap-2 text-xs text-slate-400">
              <FaShieldAlt className="text-blue-400" />
              <span>Protected by 256-Bit SSL Encryption</span>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

export default Checkout;