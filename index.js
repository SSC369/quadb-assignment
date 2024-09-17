import express from "express";
import cors from "cors";
import { configDotenv } from "dotenv";
import mongoose from "mongoose";
configDotenv();
import cryptoData from "./routes/cryptoData.js";

const app = express();
const port = 5000;

app.use(cors());
app.use(cryptoData);
app.get("/", (req, res) => {
  res.send("Api Working...");
});

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB connected...");
  })
  .catch((e) => console.log(e.message));

app.listen(port, () => {
  console.log(`Server Started at http://localhost:${port}`);
});
