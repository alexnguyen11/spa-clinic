const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Order = new Schema({
  products: [
    {
      productName: {
        type: String,
        required: true,
      },
      price: {
        type: Number,
        required: true,
      },
      description: {
        type: String,
        required: false,
      },
      img: { type: String },
    },
  ],
  customer: {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    address: {
      street: String,
      city: String,
      state: String,
      postalCode: String,
      country: String,
    },
    phone: {
      type: String,
    },
  },
});

module.exports = mongoose.models.Order || mongoose.model("Order", Order);
