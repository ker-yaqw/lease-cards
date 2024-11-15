export const sprite = () => {
	return app.gulp.src(app.path.src.sprite)
		.pipe(
            app.plugins.plumber(
                app.plugins.notify.onError({
                    title: "SVG",
                    message: "Error: <%= error.message %>"
                })
            )
		)
        .pipe(
            app.plugins.svgmin({
                js2svg: {
                    pretty: true,
                },
            })
        )
        .pipe(
            app.plugins.cheerio({
                run: function ($) {
                    $('[fill]').removeAttr('fill');
                    $('[stroke]').removeAttr('stroke');
                    $('[style]').removeAttr('style');
                },
                parserOptions: {
                    xmlMode: true
                },
            })
        )
        .pipe(app.plugins.replace('&gt;', '>'))
		.pipe(
            app.plugins.sprite({
                mode: {
                    stack: {
                        sprite: '../svg/sprite.svg',
                        example: false
                    }
                },
		    })
		)
		.pipe(app.gulp.dest(app.path.build.images));
};