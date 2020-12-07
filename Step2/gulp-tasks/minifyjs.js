const gulp = require("gulp");

var minifyjs = require("gulp-js-minify");

gulp.task("minifyjs", function (done) {
  gulp.src("./src/js/script.js").pipe(minifyjs()).pipe(gulp.dest("./dist/js/"));
  done();
});

exports.minifyjs = "minifyjs";
