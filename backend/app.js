// process.env.NODE_ENV = "production";
var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const cors = require("cors");
var kundkontaktRouter = require("./routes/kundkontakt");
var porjectRouter = require("./routes/project");
var webinareReg = require("./routes/webinare");

require("dotenv").config();
var app = express();
app.use(cors());

app.use(express.static(path.join(__dirname, "build")));


app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use("/kontakt", kundkontaktRouter);
app.use("/demo-request", porjectRouter);
app.use("/webinar", webinareReg);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
    next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get("env") === "development" ? err : {};

    // render the error page
    res.status(err.status || 500).send(err);
    // res.render("error");
});

module.exports = app;