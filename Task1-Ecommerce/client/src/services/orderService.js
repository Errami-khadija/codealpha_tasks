import api from "./api";

export const placeOrder = async (orderData) => {
  return await api.post("/orders", orderData);
};