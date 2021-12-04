require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const product = require("./schema/product");
const bodyParser = require("body-parser");
const company = require("./schema/company");
const seller = require("./schema/seller");
const app = express();
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => res.send("Hello World!"));

// ------------------- create request ----------------- //
app.post("/createProduct", (req, res) => {
  product
    .create(req.body)
    .then((data) => {
      if (data) {
        return res.status(200).send({ data: "New product Added successfully" });
      }
    })
    .catch((err) => {
      return res.status(400).send(err);
    });
});

// get all product
app.get("/product", async (req, res) => {
  const productList = await product.find();
  if (productList.length === 0) {
    return res.json({ data: "no product found" });
  }
  return res.json({ data: productList });
});

// delete product
app.delete("/product/deleteproduct/:name", async (req, res) => {
  const deletedProduct = await product.findOneAndDelete({
    title: req.params.name,
  });

  if (deletedProduct) return res.json({ data: "product deleted successfully" });

  return res.json({ data: "product not available" });
});

// create seller
app.post("/createSeller", (req, res) => {
  seller
    .create(req.body)
    .then((data) => {
      if (data) {
        return res.status(200).send({ data: "New seller Added successfully" });
      }
    })
    .catch((err) => {
      return res.status(400).send(err);
    });
});

// get all seller
app.get("/seller", async (req, res) => {
  const sellerList = await seller.find();
  if (sellerList.length === 0) {
    return res.json({ data: "no seller found" });
  }
  return res.json({ data: sellerList });
});

// delete company
app.delete("/seller/deleteseller/:name", async (req, res) => {
  const deletedSeller = await seller.findOneAndDelete({
    name: req.params.name,
  });
  if (deletedSeller) return res.json({ data: "Seller deleted successfully" });

  return res.json({ data: "seller not available" });
});

// create company
app.post("/createCompany", (req, res) => {
  company
    .create(req.body)
    .then((data) => {
      if (data) {
        return res.status(200).send({ data: "New company Added successfully" });
      }
    })
    .catch((err) => {
      return res.status(400).send(err);
    });
});

// get all company
app.get("/company", async (req, res) => {
  const companyList = await company.find();
  if (companyList.length === 0) {
    return res.json({ data: "no company found" });
  }
  return res.json({ data: companyList });
});

// delete company
app.delete("/company/deletecompany/:name", async (req, res) => {
  const deletedCompany = await company.findOneAndDelete({
    name: req.params.name,
  });
  if (deletedCompany) return res.json({ data: "company deleted successfully" });

  return res.json({ data: "company not available" });
});

const PORT = 5000;
mongoose
  .connect(process.env.MONGOURL)
  .then(() => console.log("MongoDB database connection successfully"));

app.listen(PORT, function () {
  console.log("Server is running on Port: " + PORT);
});
