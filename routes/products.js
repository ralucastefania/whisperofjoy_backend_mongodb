var express = require("express");
var router = express.Router();
const {
  getProducts,
  getProduct,
  updateProduct,
  deleteProduct,
  addProduct,
  getPage,
} = require("../controllers/productsController");

router.route("/").get(getProducts).post(addProduct);

router.route("/:id").get(getProduct).delete(deleteProduct).put(updateProduct);

router.route("/page/:page").get(getPage);

module.exports = router;
