import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },

    category: {
      type: String,
      required: true,
    },

    description: {
      type: String,
      required: true,
    },

    price: {
      type: Number,
      required: true,
    },

    originalPrice: {
      type: Number,
    },

    rating: {
      type: Number,
      default: 5,
    },

    reviews: {
      type: Number,
      default: 0,
    },

    image: {
      type: String,
      required: true,
    },

    tag: {
      type: String,
      default: "New",
    },

    stock: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Product", productSchema);