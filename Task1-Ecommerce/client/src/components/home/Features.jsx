import React from "react";
import { FaShippingFast, FaLock, FaUndoAlt } from "react-icons/fa";

const features = [
  {
    icon: <FaShippingFast className="text-2xl" />,
    title: "Fast Delivery",
    badge: "Express",
    description: "Receive your order quickly and safely with real-time tracking.",
  },
  {
    icon: <FaLock className="text-2xl" />,
    title: "Secure Payment",
    badge: "256-Bit SSL",
    description: "100% protected and encrypted transactions guaranteed.",
  },
  {
    icon: <FaUndoAlt className="text-2xl" />,
    title: "Easy Returns",
    badge: "30-Day Risk-Free",
    description: "Hassle-free, money-back return policy within 30 days.",
  },
];

const Features = () => {
  return (
    <section className="bg-slate-950 text-white py-16 relative overflow-hidden">
      {/* Decorative Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[200px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="group relative rounded-2xl p-8 bg-slate-900/60 border border-slate-800/80 hover:border-blue-500/50 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-500/10 flex flex-col items-start"
            >
              {/* Header inside Card */}
              <div className="w-full flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-xl bg-slate-800/80 border border-slate-700/60 text-blue-400 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-500 transition-all duration-300 shadow-inner">
                  {feature.icon}
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 bg-slate-800/50 border border-slate-700/50 px-2.5 py-1 rounded-full">
                  {feature.badge}
                </span>
              </div>

              {/* Title & Description */}
              <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                {feature.title}
              </h3>
              <p className="text-sm text-slate-400 mt-2 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;