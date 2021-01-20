const express = require("express");
const path = require("path");

// morgan package for logging HTTP requests
const logger = require("morgan");

// http-errors show more meaningful errors instead of simple cannot 'METHOD'
const createError = require("http-errors");

// cross-origin-policy -> needed when using POST method!
var cors = require("cors");

//importing routes
var indexRouter = require("./routes/index");

const app = express();

app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// to serve frontend also from server (because when deployed, we have just one server)
app.use(express.static(path.join(__dirname, "client", "build")));

app.use("/", indexRouter);

//to manage all of other routes than we specifically defined above (so it will lead to our landing page)
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

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
