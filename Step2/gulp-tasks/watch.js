const { watch } = require("gulp");
const { scripts } = require("./scripts");
const { styles } = require("./styles");
const { browsersync } = require("./serv");
const { pref } = require("./autoprefix");
const { minify } = require("./cleancss");
const { series } = require("gulp");
const gulp = require("gulp");
const { minifyjs } = require("./minifyjs");
const {fileinclude} = require("gulp-file-include");

const watchTask = () => {
  watch("./index.html", (cb) => {
    browsersync.reload();
    cb();
  });
  gulp
    .watch("./src/styles/*.scss")
    .on("change", series(styles, pref, minify, browsersync.reload));

  gulp
    .watch("./src/js/*.js")
    .on("change", series(scripts, minifyjs, browsersync.reload));
  gulp
    .watch("./src/html/*.html")
    .on("change", series(fileinclude, browsersync.reload));
};

exports.watch = watchTask;
