const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Order = new Schema(
  {
    product: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
      required: true,
    },
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
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.models.Order || mongoose.model("Order", Order);
