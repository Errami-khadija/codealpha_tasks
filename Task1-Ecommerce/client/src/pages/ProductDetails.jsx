import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { 
  FaStar, 
  FaShoppingCart, 
  FaHeart, 
  FaMinus, 
  FaPlus, 
  FaShieldAlt, 
  FaTruck, 
  FaUndoAlt 
} from "react-icons/fa";

const ProductDetails = () => {
  

 const { id } = useParams();

const [product, setProduct] = useState(null);
const [loading, setLoading] = useState(true);

const [quantity, setQuantity] = useState(1);
const [selectedImage, setSelectedImage] = useState("");
const [isWishlisted, setIsWishlisted] = useState(false);

useEffect(() => {
  fetchProduct();
}, [id]);

const fetchProduct = async () => {
  try {
    const res = await axios.get(
      `http://localhost:5000/api/products/${id}`
    );

    setProduct(res.data.product);
    setSelectedImage(res.data.product.image);

  } catch (error) {
    console.log(error);

  } finally {
    setLoading(false);
  }
};

if (loading) {
  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center text-white">
      Loading...
    </div>
  );
}

if (!product) {
  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center text-red-500">
      Product not found.
    </div>
  );
}

  return (
    <div className="bg-slate-950 text-white min-h-screen py-12 relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Main Product Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">

          {/* Left: Product Media Gallery */}
          <div className="space-y-4">
            {/* Main Preview Container */}
            <div className="bg-slate-900/60 border border-slate-800/80 rounded-2xl overflow-hidden backdrop-blur-xl relative aspect-square sm:aspect-[4/3] lg:aspect-square flex items-center justify-center p-4">
              <img
                src={selectedImage}
                alt={product.title}
                className="w-full h-full object-cover rounded-xl transition-all duration-300"
              />
              <span className="absolute top-4 left-4 bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold px-3 py-1 rounded-full backdrop-blur-md">
                In Stock
              </span>
            </div>

            {/* Thumbnails */}
            <div className="flex gap-4">
  <button
    className="w-24 h-24 rounded-xl overflow-hidden border-2 border-blue-500 p-1"
  >
    <img
      src={product.image}
      alt={product.title}
      className="w-full h-full object-cover rounded-lg"
    />
  </button>
</div>
          </div>

          {/* Right: Product Details & Purchase Controls */}
          <div>
            <div className="space-y-6">
              
              {/* Category & Title */}
              <div>
                <span className="text-blue-400 text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 inline-block mb-3">
                 {product.category}
                </span>
                <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
                  {product.title}
                </h1>
              </div>

              {/* Rating & Reviews */}
              <div className="flex items-center gap-3">
                <div className="flex text-amber-400 text-sm">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} />
                  ))}
                </div>
                <span className="text-sm text-slate-400 font-medium">
                  <strong className="text-white">{product.rating}</strong> ({product.reviews} customer reviews)
                </span>
              </div>

              {/* Price Display */}
              <div className="flex items-baseline gap-3">
                <p className="text-4xl font-black text-white">
                  ${product.price}
                </p>
                <span className="text-sm text-slate-500 line-through font-medium">
                 {product.originalPrice && (
    <span className="text-sm text-slate-500 line-through font-medium">
        ${product.originalPrice}
    </span>
)}
                </span>
              </div>

              {/* Description */}
              <p className="text-slate-300 text-sm leading-relaxed border-t border-b border-slate-800/80 py-6">
                {product.description}
              </p>

              {/* Quantity Selector */}
              <div>
                <label className="text-xs font-semibold text-slate-300 block mb-3">
                  Select Quantity
                </label>
                <div className="flex items-center gap-4">
                  <div className="inline-flex items-center rounded-xl bg-slate-900/80 border border-slate-800 p-1">
                    <button
                      onClick={() => quantity > 1 && setQuantity(quantity - 1)}
                      aria-label="Decrease quantity"
                      className="w-10 h-10 rounded-lg flex items-center justify-center text-slate-300 hover:text-white hover:bg-slate-800 transition-all"
                    >
                      <FaMinus className="text-xs" />
                    </button>

                    <span className="w-12 text-center font-bold text-white">
                      {quantity}
                    </span>

                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      aria-label="Increase quantity"
                      className="w-10 h-10 rounded-lg flex items-center justify-center text-slate-300 hover:text-white hover:bg-slate-800 transition-all"
                    >
                      <FaPlus className="text-xs" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4 pt-2">
                <button className="flex-1 bg-blue-600 hover:bg-blue-500 text-white py-4 rounded-xl font-bold flex justify-center items-center gap-3 transition-all shadow-lg shadow-blue-600/20 active:scale-[0.99]">
                  <FaShoppingCart />
                  <span>Add to Cart</span>
                </button>

                <button
                  onClick={() => setIsWishlisted(!isWishlisted)}
                  aria-label="Add to wishlist"
                  className={`w-14 h-14 rounded-xl border flex justify-center items-center transition-all ${
                    isWishlisted
                      ? "bg-rose-500/10 border-rose-500/30 text-rose-500"
                      : "bg-slate-900/60 border-slate-800 text-slate-400 hover:text-rose-400 hover:border-slate-700"
                  }`}
                >
                  <FaHeart size={20} />
                </button>
              </div>

              {/* Trust Badges */}
              <div className="grid grid-cols-3 gap-4 pt-4 text-center">
                <div className="p-3 rounded-xl bg-slate-900/40 border border-slate-800/60 text-slate-400 text-xs flex flex-col items-center gap-1.5">
                  <FaTruck className="text-blue-400 text-base" />
                  <span>Free Shipping</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-900/40 border border-slate-800/60 text-slate-400 text-xs flex flex-col items-center gap-1.5">
                  <FaShieldAlt className="text-blue-400 text-base" />
                  <span>2 Year Warranty</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-900/40 border border-slate-800/60 text-slate-400 text-xs flex flex-col items-center gap-1.5">
                  <FaUndoAlt className="text-blue-400 text-base" />
                  <span>30-Day Returns</span>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Specifications Section */}
        <div className="mt-16 bg-slate-900/60 border border-slate-800/80 rounded-2xl backdrop-blur-xl p-6 sm:p-8">
          <h2 className="text-xl font-bold text-white mb-6 pb-4 border-b border-slate-800/80">
            Technical Specifications
          </h2>

          <div className="grid md:grid-cols-2 gap-x-12 gap-y-4 text-sm">
            <div className="flex justify-between py-2 border-b border-slate-800/50">
              <span className="text-slate-400">Brand</span>
              <span className="font-semibold text-white">SoundMax</span>
            </div>

            <div className="flex justify-between py-2 border-b border-slate-800/50">
              <span className="text-slate-400">Color Options</span>
              <span className="font-semibold text-white">Matte Black</span>
            </div>

            <div className="flex justify-between py-2 border-b border-slate-800/50">
              <span className="text-slate-400">Connectivity</span>
              <span className="font-semibold text-white">Bluetooth 5.3</span>
            </div>

            <div className="flex justify-between py-2 border-b border-slate-800/50">
              <span className="text-slate-400">Battery Life</span>
              <span className="font-semibold text-white">Up to 30 Hours</span>
            </div>
          </div>
        </div>

        {/* Customer Reviews Section */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-white mb-8">
            Customer Reviews
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            
            {/* Review 1 */}
            <div className="bg-slate-900/60 border border-slate-800/80 rounded-2xl backdrop-blur-xl p-6">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-bold text-white">Sarah Johnson</h3>
                <div className="flex text-amber-400 text-xs">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} />
                  ))}
                </div>
              </div>
              <p className="text-slate-300 text-sm leading-relaxed">
                "Amazing sound quality and excellent battery life. Definitely worth the price! The active noise cancellation works wonders in noisy environments."
              </p>
            </div>

            {/* Review 2 */}
            <div className="bg-slate-900/60 border border-slate-800/80 rounded-2xl backdrop-blur-xl p-6">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-bold text-white">Michael Brown</h3>
                <div className="flex text-amber-400 text-xs">
                  {[...Array(4)].map((_, i) => (
                    <FaStar key={i} />
                  ))}
                </div>
              </div>
              <p className="text-slate-300 text-sm leading-relaxed">
                "Comfortable to wear for long hours and the noise cancellation works perfectly during travel. Build quality feels very premium."
              </p>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default ProductDetails;