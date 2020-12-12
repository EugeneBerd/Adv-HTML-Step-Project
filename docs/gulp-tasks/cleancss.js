const gulp = require("gulp");
const cleanCSS = require("gulp-clean-css");
const rename = require("gulp-rename");

gulp.task("minify", () => {
  return gulp
    .src("./src/css_pre/style.css")
    .pipe(rename("styles.css"))
    .pipe(cleanCSS((details) => {}))

    .pipe(gulp.dest("./dist/css/"));
});

exports.minify = "minify";
