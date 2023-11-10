import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import categoryRoutes from "./routes/category.routes.js";
import productRoutes from "./routes/product.routes.js";
dotenv.config();
const app = express();
const PORT = process.env.PORT || 8000;

const connectDb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {});
    console.log("Connect database");
  } catch (error) {
    console.log("Errors", error);
  }
};
mongoose.set("strictQuery", false);
app.use(express.json());
app.use(cors());
app.use(cookieParser());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// routes API

app.use("/api", categoryRoutes);
app.use("/api", productRoutes);

app.listen(PORT, () => {
  connectDb();
  console.log(`Sever running port ${PORT}`);
});
