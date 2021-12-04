const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let Seller = new Schema({
  seller_id: String,
  name: String,
  product_ids: [
    {
      type: String,
    },
  ],
});
module.exports = mongoose.model("Seller", Seller);
