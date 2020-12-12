const { src, dest, series, parallel } = require("gulp");
const del = require("del");

function clean(cb) {
  del(["./dist/*"], cb());
}
exports.clean = clean;
