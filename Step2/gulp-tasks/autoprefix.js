// const gulp = require("gulp");
// const autoprefixer = require("gulp-autoprefixer");

// const gulp = require("gulp");

// gulp.task("pref", function pref(done) {
//   gulp
//     .src("./src/css_pre/style.css")
//     .pipe(autoprefixer())
//     .pipe(gulp.dest("./src/css_pre2/"));
//   done();
// });

// exports.pref = "pref";

const gulp = require("gulp");
const autoprefixer = require("gulp-autoprefixer");

gulp.task("pref", function () {
  return gulp
    .src("./src/css_pre/style.css")
    .pipe(
      autoprefixer({
        overrideBrowserslist: ["last 2 versions"],
        cascade: false,
      })
    )
    .pipe(gulp.dest("./src/css_pre/"));
});

exports.pref = "pref";

// const autoprefixer = require("gulp-autoprefixer");

// const pref = () =>
//   gulp
//     .src("./src/css_pre/style.css")
//     .pipe(autoprefixer())
//     .pipe(gulp.dest("./src/css_pre2/"));

// exports.pref = pref;

// gulp.task("hello", function (done) {
//   console.log("Hello Zell");
// });

// exports.pref = "hello";
