const { src, dest } = require("gulp");
const { browsersync } = require("./serv");
const sass = require("gulp-sass");
const sourcemaps = require("gulp-sourcemaps");

const styles = () =>
  src("./src/styles/style.scss")
    .pipe(sourcemaps.init())
    // .pipe(sass({ outputStyle: "compressed" }).on("error", sass.logError))
    .pipe(sass().on("error", sass.logError))
    .pipe(sourcemaps.write(""))
    .pipe(dest("./src/css_pre/"))
    .pipe(browsersync.reload({ stream: true }));

exports.styles = styles;
