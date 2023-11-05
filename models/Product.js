const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Product = new Schema(
  {
    productName: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    desc: {
      type: String,
      required: false,
    },
    image: { type: Object },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.models.Product || mongoose.model("Product", Product);
