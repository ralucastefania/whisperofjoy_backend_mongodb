const Product = require("../models/Product");
// const createError = require("http-errors")

exports.getProducts = async (req, res, next) => {
  try {
    const products = await Product.find();
    res.status(200).send(products);
  } catch (e) {
    next(e);
  }
};

exports.getProduct = async (req, res, next) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) throw new createError.NotFound();
    res.status(200).send(product);
  } catch (e) {
    next(e);
  }
};

exports.deleteProduct = async (req, res, next) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);
    if (!product) throw new createError.NotFound();
    res.status(200).send(product);
  } catch (e) {
    next(e);
  }
};

exports.updateProduct = async (req, res, next) => {
  try {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!product) throw new createError.NotFound();
    res.status(200).send(product);
  } catch (e) {
    next(e);
  }
};

exports.addProduct = async (req, res, next) => {
  try {
    const product = new Product(req.body);
    await product.save();
    res.status(200).send(product);
  } catch (e) {
    next(e);
  }
};

exports.getPage = async (req, res, next) => {
  try {
    const products = await Product.find()
      .sort({ title: "asc" })
      .skip(req.params.skip)
      .limit(req.params.limit);
    if (!products) throw new createError.NotFound();
    res.status(200).send(products);
  } catch (e) {
    next(e);
  }
};
