export const zip = () => {
	app.plugins.del(`./${app.path.rootFolder}.zip`);
	return app.gulp.src(`${app.path.buildFolder}/**/*.*`, {})
		.pipe(app.plugins.plumber(
			app.plugins.notify.onError({
				title: "ZIP",
				message: "Error: <%= error.message %>"
			}))
		)
		.pipe(app.plugins.zip(`${app.path.rootFolder}.zip`))
		.pipe(app.gulp.dest('./'));
};