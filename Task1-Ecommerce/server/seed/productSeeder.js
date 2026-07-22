import dotenv from "dotenv";
import mongoose from "mongoose";
import Product from "../models/Product.js";
import connectDB from "../config/db.js";

dotenv.config();

connectDB();

const products = [
  {
    title: "Wireless ANC Headphones",
    category: "Electronics",
    description: "Premium wireless headphones with Active Noise Cancellation.",
    price: 199,
    originalPrice: 249,
    rating: 4.9,
    reviews: 128,
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600",
    tag: "Best Seller",
    stock: 20,
  },

  {
    title: "Minimalist Leather Watch",
    category: "Accessories",
    description: "Elegant leather watch for everyday wear.",
    price: 149,
    originalPrice: 189,
    rating: 4.8,
    reviews: 95,
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600",
    tag: "Sale",
    stock: 15,
  },

  {
    title: "Smart Fitness Tracker",
    category: "Electronics",
    description: "Track your health and daily activities with precision.",
    price: 89,
    originalPrice: 119,
    rating: 4.7,
    reviews: 210,
    image:
      "https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?w=600",
    tag: "New",
    stock: 30,
  },

  {
    title: "Ergonomic Desk Lamp",
    category: "Home & Lifestyle",
    description: "Modern LED desk lamp with adjustable brightness.",
    price: 65,
    originalPrice: 85,
    rating: 4.9,
    reviews: 64,
    image:
      "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=600",
    tag: "Popular",
    stock: 25,
  },
];

const importData = async () => {
  try {
    await Product.deleteMany();

    await Product.insertMany(products);

    console.log("Products inserted successfully!");

    process.exit();
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

importData();