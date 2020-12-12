const { src, dest } = require("gulp");
const { browsersync } = require("./serv");

const scripts = () =>
  src("./src/js/script.js")
    .pipe(dest("./dist/js/"))
    .pipe(browsersync.reload({ stream: true }));



exports.scripts = scripts;
