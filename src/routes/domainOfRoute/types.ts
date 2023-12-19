import { Request } from "express";
export type ExpressPostRequest<T> = Request<{}, {}, T, {}>;

type GetProduct = {
  productId: string;
};
export type GetProductRequest = ExpressPostRequest<GetProduct>;
export type Product = {
  id: string,
  name: string,
  price: number,
  imgUrl: string
  quantity: number,
  description: string,
}