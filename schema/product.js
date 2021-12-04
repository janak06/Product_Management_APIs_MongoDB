const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let Product = new Schema({
  product_id: String,
  title: String,
  price: String,
  category: [
    {
      type: String,
    },
  ],
  company_id: String,
  seller_id: [
    {
      type: String,
    },
  ],
});
module.exports = mongoose.model("Product", Product);
