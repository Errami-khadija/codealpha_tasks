import api from "./api";

export const addToCart = async (productId, quantity = 1) => {
  return await api.post("/cart/add", {
    productId,
    quantity,
  });
};

export const getCart = async () => {
  return await api.get("/cart");
};

export const updateCart = async (productId, quantity) => {
  return await api.put(`/cart/update/${productId}`, {
    quantity,
  });
};

export const removeFromCart = async (productId) => {
  return await api.delete(`/cart/remove/${productId}`);
};

export const getCartCount = async () => {
  return await api.get("/cart/count");
};