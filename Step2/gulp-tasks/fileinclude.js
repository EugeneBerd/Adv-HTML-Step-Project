const fileinclude = require("gulp-file-include");
const gulp = require("gulp");

gulp.task("fileinclude", function () {
  return gulp
    .src(["./src/html/index.html"])
    .pipe(
      fileinclude({
        prefix: "@@",
        basepath: "@file",
      })
    )
    .pipe(gulp.dest("./"));
});

exports.fileinclude = "fileinclude";
