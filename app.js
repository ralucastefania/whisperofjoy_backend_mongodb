var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var mongoose = require('mongoose')

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var articlesRouter = require("./routes/articles");
var productsRouter = require("./routes/products")

var app = express();

/**CONNECT TO DB */
mongoose.connect(
  "mongodb+srv://raluca:whisperboy@cluster0.okvqu.mongodb.net/whisperofjoy?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  }
);

mongoose.connection.on("error", console.error);
mongoose.connection.on("open", function() {
  console.log("Database connection established...");
});

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));


// routes
app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/articles", articlesRouter);
app.use("/products", productsRouter)


/** ERROR HANDLING */
app.use(function(req, res, next) {
  const error = new Error("Looks like something broke...");
  error.status = 400;
  next(error);
});

app.use(function(err, req, res, next) {
  res.status(err.status || 500).send({
    error: {
      message: err.message
    }
  });
});

module.exports = app;
