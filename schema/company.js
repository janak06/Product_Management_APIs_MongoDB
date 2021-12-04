const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let Company = new Schema({
  company_id: String,
  name: String,
  product_ids: [
    {
      type: String,
    },
  ],
});
module.exports = mongoose.model("Company", Company);
