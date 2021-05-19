const Article = require("../models/Article");

exports.getArticles = async (req, res, next) => {
  try {
    const articles = await Article.find();
    res.status(200).send(articles);
  } catch (e) {
    next(e);
  }
};

exports.getArticle = async (req, res, next) => {
  try {
    const article = await Article.findById(req.params.id);
    if (!article) throw new createError.NotFound();
    res.status(200).send(article);
  } catch (e) {
    next(e);
  }
};

exports.deleteArticle = async (req, res, next) => {
  try {
    const article = await Article.findByIdAndDelete(req.params.id);
    if (!article) throw new createError.NotFound();
    res.status(200).send(article);
  } catch (e) {
    next(e);
  }
};

exports.updateArticle = async (req, res, next) => {
  try {
    const article = await Article.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!article) throw new createError.NotFound();
    res.status(200).send(article);
  } catch (e) {
    next(e);
  }
};

exports.addArticle = async (req, res, next) => {
  try {
    const article = new Article(req.body);
    await article.save();
    res.status(200).send(article);
  } catch (e) {
    next(e);
  }
};

exports.getSome = async (req, res, next) => {
  try {
    const articles = await Article.find()
      .sort({ publishedAt: "desc" })
      .skip(req.params.skip)
      .limit(req.params.limit)
      if(!articles) throw new createError.NotFound();
      res.status(200).send(articles)
  } catch (e) {
    next(e);
  }
};
