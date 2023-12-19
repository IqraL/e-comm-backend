import express from "express";
import { responseWrapper } from "../utils";
import { ExpressPostRequest, GetProductRequest, Product } from "./types";
import { getAllProducts, getProduct } from "./logic";
const productsRouter = express.Router();

productsRouter.post(
  "/product",
  async (req: GetProductRequest, res) =>
    await responseWrapper<Product>(getProduct(req), res)
);

productsRouter.get(
  "/all-products",
  async (req: ExpressPostRequest<{}>, res) =>
    await responseWrapper<Product[]>(getAllProducts(req), res)
);

export { productsRouter };
