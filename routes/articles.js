var express = require("express");
var router = express.Router();
const {
  getArticles,
  getArticle,
  updateArticle,
  deleteArticle,
  addArticle,
  getSome,
} = require("../controllers/articlesController");

router.route("/").get(getArticles).post(addArticle);

router.route("/:id").get(getArticle).delete(deleteArticle).put(updateArticle);

router.route("/:skip/:limit").get(getSome)

module.exports = router;
