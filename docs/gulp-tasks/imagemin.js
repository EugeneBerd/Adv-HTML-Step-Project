const gulp = require("gulp");
const imagemin = require("gulp-imagemin");

gulp.task("imgmin", () =>
  gulp.src("src/img/**").pipe(imagemin()).pipe(gulp.dest("dist/img"))
);

exports.imgmin = "imgmin";
