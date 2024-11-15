export const html = () => {
	return app.gulp.src(app.path.src.html)
		.pipe(app.plugins.plumber(
			app.plugins.notify.onError({
				title: "HTML",
				message: "Error: <%= error.message %>"
			}))
		)
		.pipe(app.plugins.fileInclude({
			prefix: "@",
			basepath: "./src/blocks/",
		}))
        //.pipe(app.plugins.replace(/@img\//g, 'img/'))
        .pipe(app.plugins.typograf({                                //! ТИПОГРАФ НУЖЕН ИЛИ НЕТ
            locale: ['ru', 'en-US']
        }))
        // .pipe(app.plugins.htmlmin({                              //! МИНИФИКАЦИЯ HTML
        //     removeComments: true,
        //     collapseWhitespace: true,
        // }))
		//.pipe(app.gulp.dest(app.path.build.dist))

        //* PAGES

        .pipe(app.gulp.src(app.path.src.htmlPages))
        .pipe(app.plugins.plumber(
			app.plugins.notify.onError({
				title: "HTML",
				message: "Error: <%= error.message %>"
			}))
		)
		.pipe(app.plugins.fileInclude({
			prefix: "@",
			basepath: "./src/blocks/",
		}))
        .pipe(app.plugins.replace(/@img\//g, 'img/'))
        .pipe(app.plugins.typograf({
            locale: ['ru', 'en-US']
        }))
        .pipe(app.plugins.prettyHtml())
        .pipe(
            app.plugins.if(
                app.isBuild,
                app.plugins.htmlmin({                              //! МИНИФИКАЦИЯ HTML
                    removeComments: true,
                    collapseWhitespace: true,
                })
            )
        )
        .pipe(app.gulp.dest(app.path.build.dist))
		.pipe(app.plugins.browserSync.stream());
};
