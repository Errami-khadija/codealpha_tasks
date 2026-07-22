import React, { useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import {
  FaEnvelope,
  FaLock,
  FaEye,
  FaEyeSlash,
  FaShieldAlt,
} from "react-icons/fa";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

const [formData, setFormData] = useState({
  email: "",
  password: "",
});

const handleChange = (e) => {
  setFormData({
    ...formData,
    [e.target.name]: e.target.value,
  });
};

const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const response = await fetch(
      "http://localhost:5000/api/auth/login",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      }
    );

    const data = await response.json();

    if (!response.ok) {
      Swal.fire({
        icon: "error",
        title: "Login Failed",
        text: data.message,
      });

      return;
    }

    localStorage.setItem("token", data.token);
    localStorage.setItem("user", JSON.stringify(data.user));

    Swal.fire({
      icon: "success",
      title: "Welcome Back!",
      text: data.message,
      timer: 1500,
      showConfirmButton: false,
    });

    setTimeout(() => {
      navigate("/");
    }, 1500);

  } catch (error) {
    Swal.fire({
      icon: "error",
      title: "Server Error",
      text: "Something went wrong.",
    });
  }
};
  return (
    <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center py-12 px-4 relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-indigo-600/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Main Container */}
      <div className="max-w-5xl w-full bg-slate-900/60 border border-slate-800/80 rounded-3xl shadow-2xl backdrop-blur-2xl overflow-hidden grid md:grid-cols-2 relative z-10">

        {/* Left Side - Hero / Welcome */}
        <div className="relative p-8 sm:p-12 flex flex-col justify-between overflow-hidden bg-gradient-to-br from-blue-900/40 via-slate-900/80 to-slate-900/90 border-b md:border-b-0 md:border-r border-slate-800/80">
          <div className="absolute top-0 left-0 w-full h-full bg-blue-600/5 blur-2xl pointer-events-none" />

          <div>
            <span className="text-blue-400 text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 inline-block mb-4">
              ShopSphere Member Access
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
              Welcome Back 
            </h1>
            <p className="text-slate-300 text-sm leading-relaxed mb-6">
              Sign in to manage your orders, access your saved wishlist, view reward points, and experience seamless checkout.
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-800/50 border border-slate-700/50 text-xs text-slate-300">
              <FaShieldAlt className="text-blue-400" />
              <span>256-bit SSL Encrypted Connection</span>
            </div>
          </div>

          <div className="relative mt-8 group">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-300" />
            <img
              src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=700&q=80"
              alt="Secure authentication visual"
              className="relative rounded-xl object-cover w-full h-48 sm:h-56 border border-slate-800"
            />
          </div>
        </div>

        {/* Right Side - Form */}
        <div className="p-8 sm:p-12 flex flex-col justify-center">
          <div className="mb-8">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Sign In
            </h2>
            <p className="text-slate-400 text-sm mt-1">
              Enter your credentials to access your account.
            </p>
          </div>

          <form className="space-y-4" onSubmit={handleSubmit}>

            {/* Email Input */}
            <div className="relative">
              <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 text-sm" />
              <input
                type="email"
                placeholder="Email Address"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full pl-11 pr-4 py-3.5 bg-slate-950/80 border border-slate-800 rounded-xl text-slate-100 placeholder-slate-500 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
              />
            </div>

            {/* Password Input */}
            <div className="relative">
              <FaLock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 text-sm" />
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full pl-11 pr-11 py-3.5 bg-slate-950/80 border border-slate-800 rounded-xl text-slate-100 placeholder-slate-500 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
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

            {/* Remember Me & Forgot Password */}
            <div className="flex items-center justify-between text-xs pt-1">
              <label className="flex items-center gap-2 text-slate-400 cursor-pointer select-none">
                <input
                  type="checkbox"
                  className="w-4 h-4 rounded bg-slate-950 border-slate-800 text-blue-600 focus:ring-blue-500/30 focus:ring-offset-0 cursor-pointer"
                />
                Remember Me
              </label>

              <a
                href="#forgot"
                className="text-blue-400 hover:underline font-semibold transition-all"
              >
                Forgot Password?
              </a>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full mt-2 bg-blue-600 hover:bg-blue-500 text-white py-3.5 rounded-xl font-bold text-sm transition-all shadow-lg shadow-blue-600/20 active:scale-[0.99]"
            >
              Sign In
            </button>

          </form>

          {/* Divider */}
          <div className="flex items-center my-6">
            <div className="flex-1 h-px bg-slate-800"></div>
            <span className="px-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">
              Or
            </span>
            <div className="flex-1 h-px bg-slate-800"></div>
          </div>

          {/* Google Login Button */}
          <button
            type="button"
            className="w-full bg-slate-950/80 hover:bg-slate-800/80 border border-slate-800 py-3 rounded-xl font-semibold text-sm text-slate-200 transition-all flex items-center justify-center gap-3 active:scale-[0.99]"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24">
              <path
                fill="#4285F4"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="#34A853"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="#FBBC05"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
              />
              <path
                fill="#EA4335"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
              />
            </svg>
            Continue with Google
          </button>

          {/* Register Redirection */}
          <p className="text-center mt-8 text-xs text-slate-400">
            Don't have an account?{" "}
            <Link
              to="/register"
              className="text-blue-400 font-bold hover:underline ml-1"
            >
              Create Account
            </Link>
          </p>
        </div>

      </div>
    </div>
  );
};

export default Login;