const { series, parallel } = require("gulp");
const { scripts } = require("./gulp-tasks/scripts");
const { styles } = require("./gulp-tasks/styles");
const { serv } = require("./gulp-tasks/serv");
const { watch } = require("./gulp-tasks/watch");
const { clean } = require("./gulp-tasks/cleandist");
const { pref } = require("./gulp-tasks/autoprefix");
const { minify } = require("./gulp-tasks/cleancss");
const { imgmin } = require("./gulp-tasks/imagemin");
const { minifyjs } = require("./gulp-tasks/minifyjs");
const { fileinclude } = require("./gulp-tasks/fileinclude");

exports.dev = parallel(serv, watch);
exports.build = series(
  clean,
  styles,
  scripts,
  minifyjs,
  pref,
  minify,
  imgmin,
  fileinclude
);
exports.fileinclude = fileinclude;
exports.css = series(styles, minify);
