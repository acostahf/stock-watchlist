var createError = require("http-errors");
var express = require("express");
var path = require("path");
var logger = require("morgan");
var cookieParser = require("cookie-parser");
//session middleware
var session = require("express-session");
var passport = require("passport");
var methodOverride = require("method-override");

// load the env vars
require("dotenv").config();

// create the Express app
var app = express();

// connect to the MongoDB with mongoose
require("./config/database");
// configure Passport
require("./config/passport");

var indexRouter = require("./routes/index");
var tradersRoutes = require("./routes/traders");
var profitsRoutes = require("./routes/profits");
var commentsRoutes = require("./routes/comments");
// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(methodOverride("_method"));
app.use(express.static(path.join(__dirname, "public")));
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(
  session({
    secret: "MrRobot",
    resave: false,
    saveUninitialized: true
  })
);
app.use(passport.initialize());
app.use(passport.session());

app.use("/", indexRouter);
app.use("/", tradersRoutes);
app.use("/", profitsRoutes);
app.use("/", commentsRoutes);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
