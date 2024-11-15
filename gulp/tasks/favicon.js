export const favicon = () => {
	return app.gulp.src(app.path.src.favicon)
		.pipe(app.plugins.plumber(
			app.plugins.notify.onError({
				title: "FAVICON",
				message: "Error: <%= error.message %>"
			}))
		)
        .pipe(app.gulp.dest(app.path.build.favicon))
        //.pipe(app.gulp.src(app.path.src.favicon))
		.pipe(app.plugins.favicon({
            icons: {
                appleIcon: true,
                favicons: true,
                android: true,

                firefox: false,
                yandex: false,
                online: false,
                appleStartup: false,
                windows: false,
                coast: false,
            },
            path: '/favicons/',
        }))
		.pipe(app.gulp.dest(app.path.build.favicon))
        .pipe(app.plugins.filter(['favicon.ico']))
        .pipe(app.gulp.dest(app.path.build.dist))
		.pipe(app.plugins.browserSync.stream());
};