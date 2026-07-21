import React from "react";
import { Link } from "react-router-dom";
import { FaLaptop, FaTshirt, FaCouch, FaBasketballBall, FaArrowRight } from "react-icons/fa";

const categories = [
  { name: "Electronics", itemCount: "1,200+ Products", icon: <FaLaptop size={24} />, path: "/shop?category=electronics" },
  { name: "Fashion", itemCount: "3,500+ Products", icon: <FaTshirt size={24} />, path: "/shop?category=fashion" },
  { name: "Furniture", itemCount: "850+ Products", icon: <FaCouch size={24} />, path: "/shop?category=furniture" },
  { name: "Sports", itemCount: "600+ Products", icon: <FaBasketballBall size={24} />, path: "/shop?category=sports" },
];

const Categories = () => {
  return (
    <section className="bg-slate-950 text-white py-20 relative overflow-hidden">
      {/* Decorative Ambient Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-blue-400 text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 inline-block mb-3">
            Collections
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Shop by Category
          </h2>
          <p className="text-slate-400 mt-3 text-sm sm:text-base">
            Find exactly what you are looking for by exploring our top-trending departments.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <Link
              to={category.path}
              key={category.name}
              className="group relative rounded-2xl p-6 bg-slate-900/60 border border-slate-800/80 hover:border-blue-500/50 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-500/10 flex flex-col justify-between"
            >
              {/* Icon Container & Badge */}
              <div>
                <div className="w-12 h-12 rounded-xl bg-slate-800/80 border border-slate-700/60 text-blue-400 flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-500 transition-all duration-300 shadow-inner">
                  {category.icon}
                </div>

                <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                  {category.name}
                </h3>
                <p className="text-xs text-slate-400 mt-1">
                  {category.itemCount}
                </p>
              </div>

              {/* Action Link Footer */}
              <div className="mt-8 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs font-semibold text-slate-400 group-hover:text-white transition-colors">
                <span>Browse Category</span>
                <FaArrowRight className="text-blue-400 transform group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Categories;