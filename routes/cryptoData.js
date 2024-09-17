import mongoose from "mongoose";
import express from "express";
import axios from "axios";
const router = express.Router();

const CryptoDataSchema = new mongoose.Schema({
  name: { type: String },
  last: { type: String },
  buy: { type: String },
  sell: { type: String },
  volume: { type: String },
  base_unit: { type: String },
});

const cryptoData = mongoose.model("table", CryptoDataSchema);

const getTableData = async (req, res) => {
  try {
    const response = await axios.get("https://api.wazirx.com/api/v2/tickers");
    const data = response.data;

    let updateData = [];
    updateData = Object.values(data)
      .slice(0, 10)
      .map((item) => ({
        name: item.name,
        last: item.last,
        buy: item.buy,
        sell: item.sell,
        volume: item.volume,
        base_unit: item.base_unit,
      }));
    res.status(200).json({ top10Data: updateData });
    // Save the top 10 data into MongoDB
    await cryptoData.insertMany(updateData); //
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

router.get("/getTop10", getTableData);
export default router;
