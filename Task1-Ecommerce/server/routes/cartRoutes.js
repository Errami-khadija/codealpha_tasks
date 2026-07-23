import express from "express";
import { addToCart, getCart ,updateCart,removeFromCart} from "../controllers/cartController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/add", protect, addToCart);
router.get("/", protect, getCart);
router.put("/update/:productId", protect, updateCart);
router.delete("/remove/:productId", protect, removeFromCart);
export default router;