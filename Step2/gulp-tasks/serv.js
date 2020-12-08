const browserSync = require("browser-sync").create();

const serv = () => {
	browserSync.init({
		server: {
			baseDir: "./",
		},
		browser: "",
	});
};
exports.browsersync = browserSync;
exports.serv = serv;
