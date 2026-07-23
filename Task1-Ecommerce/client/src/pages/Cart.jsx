import React from "react";
import { useEffect, useState } from "react";
import { getCart, updateCart } from "../services/cartService";
import { Link } from "react-router-dom";
import { 
  FaTrashAlt, 
  FaArrowLeft, 
  FaLock, 
  FaShieldAlt, 
  FaMinus, 
  FaPlus,
  FaTag 
} from "react-icons/fa";



const Cart = () => {
 const [cartItems, setCartItems] = useState([]);
 useEffect(() => {
  fetchCart();
}, []);

const fetchCart = async () => {
  try {
    const res = await getCart();

    setCartItems(res.data.cart?.items || []);
  } catch (error) {
    console.log(error);
  }
};

const handleQuantityChange = async (productId, currentQuantity, delta) => {
  const newQuantity = currentQuantity + delta;

  if (newQuantity < 1) return;

  try {
    await updateCart(productId, newQuantity);
    await fetchCart();
  } catch (error) {
    console.error(error);
  }
};

  const handleRemove = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const tax = subtotal > 0 ? 12.50 : 0;
  const total = subtotal + tax;

  return (
    <div className="bg-slate-950 text-white min-h-screen py-12 relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-10 w-96 h-96 bg-indigo-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Page Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10 pb-6 border-b border-slate-800/80">
          <div>
            <span className="text-blue-400 text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 inline-block mb-2">
              Your Order
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
              Shopping Cart ({cartItems.length})
            </h1>
          </div>

          <Link
            to="/shop"
            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-300 hover:text-blue-400 transition-colors"
          >
            <FaArrowLeft className="text-xs" />
            Continue Shopping
          </Link>
        </div>

        {cartItems.length === 0 ? (
          /* Empty Cart State */
          <div className="text-center py-20 bg-slate-900/60 border border-slate-800/80 rounded-3xl backdrop-blur-xl">
            <h2 className="text-2xl font-bold text-white mb-3">Your cart is empty</h2>
            <p className="text-slate-400 text-sm mb-6">Looks like you haven't added anything to your cart yet.</p>
            <Link
              to="/shop"
              className="inline-flex items-center justify-center px-6 py-3 rounded-xl font-bold text-slate-950 bg-white hover:bg-slate-100 transition-all"
            >
              Start Shopping
            </Link>
          </div>
        ) : (
          /* Main Cart Content */
          <div className="grid lg:grid-cols-12 gap-8 items-start">

            {/* Cart Items List */}
            <div className="lg:col-span-8 space-y-4">
              {cartItems.map((item) => (
                <div
                  key={item.product._id}
                  className="group relative rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-slate-700/80 backdrop-blur-xl p-5 flex flex-col sm:flex-row items-center gap-6 transition-all"
                >
                  {/* Product Image */}
                  <div className="w-full sm:w-28 h-28 shrink-0 bg-slate-800/50 rounded-xl overflow-hidden border border-slate-700/50">
                    <img
                      src={item.product.image}
                      alt={item.product.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  {/* Product Info */}
                  <div className="flex-1 w-full text-center sm:text-left">
                    <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider">
                      {item.product.category}
                    </span>
                    <h2 className="text-base sm:text-lg font-bold text-white mt-0.5">
                      {item.product.title}
                    </h2>
                    <p className="text-blue-400 font-extrabold text-lg mt-1">
                      ${item.product.price.toFixed(2)}
                    </p>

                    {/* Quantity Controls */}
                    <div className="flex items-center justify-center sm:justify-start gap-3 mt-4">
                      <div className="inline-flex items-center rounded-xl bg-slate-800/80 border border-slate-700/60 p-1">
                        <button
                           onClick={() =>
                                  handleQuantityChange(
                                    item.product._id,
                                    item.quantity,
                                    -1
                                  )
                                }
                          aria-label="Decrease quantity"
                          className="w-8 h-8 rounded-lg flex items-center justify-center text-slate-300 hover:text-white hover:bg-slate-700/80 transition-all"
                        >
                          <FaMinus className="text-[10px]" />
                        </button>

                        <span className="w-10 text-center font-bold text-sm text-white">
                          {item.quantity}
                        </span>

                        <button
                           onClick={() =>
                                    handleQuantityChange(
                                      item.product._id,
                                      item.quantity,
                                      1
                                    )
                                  }
                          aria-label="Increase quantity"
                          className="w-8 h-8 rounded-lg flex items-center justify-center text-slate-300 hover:text-white hover:bg-slate-700/80 transition-all"
                        >
                          <FaPlus className="text-[10px]" />
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Item Total & Delete Button */}
                  <div className="flex sm:flex-col items-center justify-between w-full sm:w-auto gap-4 pt-4 sm:pt-0 border-t sm:border-t-0 border-slate-800/80">
                    <span className="text-sm font-bold text-slate-300 sm:hidden">Item Subtotal:</span>
                    <span className="text-lg font-bold text-white hidden sm:block">
                      ${(item.product.price * item.quantity).toFixed(2)}
                    </span>

                    <button
                      onClick={() => handleRemove(item.id)}
                      aria-label="Remove item"
                      className="p-2.5 rounded-xl text-slate-500 hover:text-rose-400 hover:bg-rose-500/10 border border-transparent hover:border-rose-500/20 transition-all"
                    >
                      <FaTrashAlt className="text-sm" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Order Summary Sidebar */}
            <div className="lg:col-span-4 bg-slate-900/60 border border-slate-800/80 rounded-2xl backdrop-blur-xl p-6 sticky top-24">
              <h2 className="text-xl font-bold text-white mb-6 pb-4 border-b border-slate-800/80">
                Order Summary
              </h2>

              {/* Promo Code Input */}
              <div className="mb-6">
                <label className="text-xs font-semibold text-slate-400 mb-2 block">
                  Have a Promo Code?
                </label>
                <div className="relative flex items-center">
                  <FaTag className="absolute left-3.5 text-slate-500 text-xs pointer-events-none" />
                  <input
                    type="text"
                    placeholder="Enter code"
                    className="w-full bg-slate-950/80 text-xs text-white placeholder-slate-500 rounded-xl pl-9 pr-20 py-3 border border-slate-800 focus:outline-none focus:border-blue-500"
                  />
                  <button className="absolute right-1.5 px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-white rounded-lg text-xs font-semibold transition-colors">
                    Apply
                  </button>
                </div>
              </div>

              {/* Price Calculation Breakdown */}
              <div className="space-y-3.5 text-sm text-slate-300">
                <div className="flex justify-between">
                  <span className="text-slate-400">Subtotal</span>
                  <span className="font-semibold text-white">${subtotal.toFixed(2)}</span>
                </div>

                <div className="flex justify-between">
                  <span className="text-slate-400">Estimated Shipping</span>
                  <span className="text-emerald-400 font-semibold">Free</span>
                </div>

                <div className="flex justify-between">
                  <span className="text-slate-400">Estimated Tax</span>
                  <span className="font-semibold text-white">${tax.toFixed(2)}</span>
                </div>

                <div className="pt-4 border-t border-slate-800/80 flex justify-between items-baseline">
                  <span className="text-base font-bold text-white">Total</span>
                  <div className="text-right">
                    <span className="text-2xl font-black text-white">
                      ${total.toFixed(2)}
                    </span>
                    <p className="text-[10px] text-slate-400">USD inclusive of all taxes</p>
                  </div>
                </div>
              </div>

              {/* Checkout Action Button */}
              <button className="mt-6 w-full bg-blue-600 hover:bg-blue-500 text-white py-4 rounded-xl font-bold transition-all shadow-lg shadow-blue-600/20 flex items-center justify-center gap-2 active:scale-[0.99]">
                <FaLock className="text-xs" />
                <span>Proceed to Checkout</span>
              </button>

              {/* Guarantees / Security Badges */}
              <div className="mt-6 pt-6 border-t border-slate-800/80 flex items-center justify-center gap-2 text-xs text-slate-400">
                <FaShieldAlt className="text-blue-400" />
                <span>Encrypted 256-Bit SSL Secure Checkout</span>
              </div>
            </div>

          </div>
        )}

      </div>
    </div>
  );
};

export default Cart;