import express from "express";
import cors from "cors";
import { productsRouter } from "./routes";

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = 5001;

app.use(productsRouter);

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
