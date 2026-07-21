import React from "react";
import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaShoppingBag,
  FaEdit,
  FaBoxOpen,
  FaStar,
} from "react-icons/fa";

const Profile = () => {
  const orders = [
    {
      id: "#ORD-1001",
      date: "20 July 2026",
      total: "$149.99",
      status: "Delivered",
    },
    {
      id: "#ORD-1002",
      date: "15 July 2026",
      total: "$89.99",
      status: "Processing",
    },
    {
      id: "#ORD-1003",
      date: "08 July 2026",
      total: "$210.50",
      status: "Delivered",
    },
  ];

  return (
    <div className="bg-slate-950 text-white min-h-screen py-12 relative overflow-hidden">
      {/* Background Glow Effects */}
      <div className="absolute top-0 left-1/3 w-96 h-96 bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-indigo-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Profile Header Banner */}
        <div className="bg-slate-900/60 border border-slate-800/80 rounded-2xl backdrop-blur-xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left">
            {/* Avatar Container with Glow */}
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full blur opacity-75 group-hover:opacity-100 transition" />
              <img
                src="https://i.pravatar.cc/150?img=12"
                alt="Profile"
                className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full border-2 border-blue-500 object-cover"
              />
            </div>

            <div>
              <div className="flex items-center justify-center sm:justify-start gap-3 mb-1">
                <h1 className="text-2xl sm:text-3xl font-extrabold text-white">
                  John Doe
                </h1>
                <span className="text-blue-400 text-[10px] font-semibold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-blue-500/10 border border-blue-500/20">
                  VIP
                </span>
              </div>
              <p className="text-slate-400 text-sm font-medium">
                Premium Customer • Member since 2024
              </p>
            </div>
          </div>

          <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-5 py-3 rounded-xl font-bold text-sm transition-all shadow-lg shadow-blue-600/20 active:scale-[0.99]">
            <FaEdit className="text-xs" />
            <span>Edit Profile</span>
          </button>
        </div>

        {/* Quick Stats Grid */}
        <div className="grid md:grid-cols-3 gap-6 mt-8">
          {/* Stat 1 */}
          <div className="bg-slate-900/60 border border-slate-800/80 rounded-2xl backdrop-blur-xl p-6 flex items-center justify-between">
            <div>
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">
                Total Orders
              </p>
              <h2 className="text-3xl font-black text-white">15</h2>
            </div>
            <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 text-xl">
              <FaShoppingBag />
            </div>
          </div>

          {/* Stat 2 */}
          <div className="bg-slate-900/60 border border-slate-800/80 rounded-2xl backdrop-blur-xl p-6 flex items-center justify-between">
            <div>
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">
                Delivered
              </p>
              <h2 className="text-3xl font-black text-white">8</h2>
            </div>
            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 text-xl">
              <FaBoxOpen />
            </div>
          </div>

          {/* Stat 3 */}
          <div className="bg-slate-900/60 border border-slate-800/80 rounded-2xl backdrop-blur-xl p-6 flex items-center justify-between">
            <div>
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">
                Reward Points
              </p>
              <h2 className="text-3xl font-black text-white">1,200</h2>
            </div>
            <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 text-xl">
              <FaStar />
            </div>
          </div>
        </div>

        {/* Info & History Layout */}
        <div className="grid lg:grid-cols-12 gap-8 mt-8">

          {/* Personal Information Sidebar */}
          <div className="lg:col-span-4 bg-slate-900/60 border border-slate-800/80 rounded-2xl backdrop-blur-xl p-6 sm:p-8">
            <h2 className="text-xl font-bold text-white mb-6 pb-4 border-b border-slate-800/80">
              Personal Information
            </h2>

            <div className="space-y-5">
              <div className="flex items-start gap-4">
                <div className="p-2.5 rounded-xl bg-slate-800/80 border border-slate-700/60 text-blue-400 mt-0.5">
                  <FaUser className="text-sm" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Full Name</p>
                  <p className="font-semibold text-white text-sm mt-0.5">John Doe</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-2.5 rounded-xl bg-slate-800/80 border border-slate-700/60 text-blue-400 mt-0.5">
                  <FaEnvelope className="text-sm" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Email Address</p>
                  <p className="font-semibold text-white text-sm mt-0.5">john@example.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-2.5 rounded-xl bg-slate-800/80 border border-slate-700/60 text-blue-400 mt-0.5">
                  <FaPhone className="text-sm" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Phone Number</p>
                  <p className="font-semibold text-white text-sm mt-0.5">+212 600000000</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-2.5 rounded-xl bg-slate-800/80 border border-slate-700/60 text-blue-400 mt-0.5">
                  <FaMapMarkerAlt className="text-sm" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Default Address</p>
                  <p className="font-semibold text-white text-sm mt-0.5">Casablanca, Morocco</p>
                </div>
              </div>
            </div>
          </div>

          {/* Order History Panel */}
          <div className="lg:col-span-8 bg-slate-900/60 border border-slate-800/80 rounded-2xl backdrop-blur-xl p-6 sm:p-8">
            <h2 className="text-xl font-bold text-white mb-6 pb-4 border-b border-slate-800/80">
              Recent Orders
            </h2>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="border-b border-slate-800/80 text-xs font-semibold uppercase tracking-wider text-slate-400">
                    <th className="pb-4">Order ID</th>
                    <th className="pb-4">Date</th>
                    <th className="pb-4">Total</th>
                    <th className="pb-4 text-right">Status</th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-slate-800/50">
                  {orders.map((order) => (
                    <tr
                      key={order.id}
                      className="group hover:bg-slate-800/30 transition-colors"
                    >
                      <td className="py-4 font-mono font-bold text-blue-400">
                        {order.id}
                      </td>

                      <td className="py-4 text-slate-300">
                        {order.date}
                      </td>

                      <td className="py-4 font-bold text-white">
                        {order.total}
                      </td>

                      <td className="py-4 text-right">
                        <span
                          className={`inline-block px-3 py-1 rounded-full text-xs font-bold ${
                            order.status === "Delivered"
                              ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
                              : "bg-amber-500/10 text-amber-400 border border-amber-500/20"
                          }`}
                        >
                          {order.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

export default Profile;