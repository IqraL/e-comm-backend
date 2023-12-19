import { products } from "./products";
import { ExpressPostRequest, GetProductRequest } from "./types";

export const getAllProducts = (req: ExpressPostRequest<{}>) => async () => {
  return products;
};

export const getProduct = (req: GetProductRequest) => async () => {
  const { productId } = req.body;
  console.log("productId:", productId);
  const matchedProduct = products.filter(
    (product) => product.id === productId
  )?.[0];
  if (!matchedProduct) {
    throw new Error("No product matching the productId provided");
  }
  return matchedProduct;
};
