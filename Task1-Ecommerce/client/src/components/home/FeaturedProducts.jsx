import React from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart, FaStar, FaHeart, FaEye } from "react-icons/fa";

const featuredProducts = [
  {
    id: 1,
    title: "Wireless ANC Headphones",
    category: "Electronics",
    price: 199,
    originalPrice: 249,
    rating: 4.9,
    reviews: 128,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600",
    tag: "Best Seller",
  },
  {
    id: 2,
    title: "Minimalist Leather Watch",
    category: "Accessories",
    price: 149,
    originalPrice: 189,
    rating: 4.8,
    reviews: 95,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600",
    tag: "Sale",
  },
  {
    id: 3,
    title: "Smart Fitness Tracker",
    category: "Electronics",
    price: 89,
    originalPrice: 119,
    rating: 4.7,
    reviews: 210,
    image: "https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?w=600",
    tag: "New",
  },
  {
    id: 4,
    title: "Ergonomic Desk Lamp",
    category: "Home & Lifestyle",
    price: 65,
    originalPrice: 85,
    rating: 4.9,
    reviews: 64,
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=600",
    tag: "Popular",
  },
];

const FeaturedProducts = () => {
  return (
    <section className="bg-slate-950 text-white py-20 relative overflow-hidden">
      {/* Decorative Background Glows */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-indigo-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <span className="text-blue-400 text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 inline-block mb-3">
              Curated Selection
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
              Featured Products
            </h2>
          </div>
          <Link
            to="/shop"
            className="text-sm font-semibold text-blue-400 hover:text-blue-300 transition-colors flex items-center gap-1 self-start md:self-auto"
          >
            View All Products &rarr;
          </Link>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <div
              key={product.id}
              className="group relative rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-blue-500/50 backdrop-blur-xl overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-blue-500/10 flex flex-col justify-between"
            >
              {/* Image Container with Badges */}
              <div className="relative aspect-4/3 sm:aspect-square overflow-hidden bg-slate-800/50">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                />

                {/* Badge Tag */}
                <span className="absolute top-3 left-3 bg-slate-950/80 backdrop-blur-md text-blue-400 border border-slate-700/80 text-[10px] font-bold px-2.5 py-1 rounded-lg uppercase tracking-wider">
                  {product.tag}
                </span>

                {/* Quick Action Overlay Icons */}
                <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button 
                    aria-label="Add to Wishlist" 
                    className="p-2.5 rounded-xl bg-slate-950/80 border border-slate-700/80 text-slate-300 hover:text-rose-400 hover:bg-slate-900 transition-all shadow-md"
                  >
                    <FaHeart className="text-xs" />
                  </button>
                  <button 
                    aria-label="Quick View" 
                    className="p-2.5 rounded-xl bg-slate-950/80 border border-slate-700/80 text-slate-300 hover:text-blue-400 hover:bg-slate-900 transition-all shadow-md"
                  >
                    <FaEye className="text-xs" />
                  </button>
                </div>
              </div>

              {/* Details & Actions */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-2 text-xs text-slate-400 mb-1">
                    <span>{product.category}</span>
                    <div className="flex items-center gap-1 text-amber-400">
                      <FaStar className="text-[10px]" />
                      <span className="text-slate-200 font-semibold">{product.rating}</span>
                      <span className="text-slate-500">({product.reviews})</span>
                    </div>
                  </div>

                  <h3 className="font-bold text-base text-white group-hover:text-blue-400 transition-colors line-clamp-1">
                    {product.title}
                  </h3>
                </div>

                <div className="mt-6 flex items-center justify-between gap-2 pt-3 border-t border-slate-800/80">
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-xl font-black text-white">
                      ${product.price}
                    </span>
                    {product.originalPrice && (
                      <span className="text-xs text-slate-500 line-through">
                        ${product.originalPrice}
                      </span>
                    )}
                  </div>

                  <button
                    className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold transition-all shadow-lg shadow-blue-600/20 active:scale-95"
                  >
                    <FaShoppingCart className="text-xs" />
                    <span>Add</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FeaturedProducts;