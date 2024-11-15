export const scss = () => {
    return app.gulp.src(app.path.src.scss, {sourcemaps: app.isDev})
        .pipe(app.plugins.plumber(
            app.plugins.notify.onError({
                title: "SCSS",
                message: "Error: <%= error.message %>"
            })))
        .pipe(app.plugins.sass({
            outputStyle: 'expanded'                         //! РАЗВЕРНУТЫЙ СТИЛЬ
        }))
        .pipe(app.plugins.replace(/@img\//g, '../img/'))
        .pipe(app.plugins.rename({
                basename: "style",
            })
        )
        .pipe(app.plugins.gcmq())
        .pipe(app.plugins.autoprefixer({
                overrideBrowserslist: ["last 4 versions"],
                grid: true,
                cascade: false,
            })
        )
        // .pipe(app.plugins.short())
        .pipe(app.plugins.size({title: 'CSS до сжатия'}))
        .pipe(app.gulp.dest(app.path.build.css))
        .pipe(
            app.plugins.cleanCss({
                level: 2
            })
        )
        .pipe(
            app.plugins.rename({
                suffix: '.min',
            })
        )
        .pipe(app.plugins.size({title: 'CSS после сжатия'}))
        .pipe(app.gulp.dest(app.path.build.css, { sourcemaps: '.' }))
        .pipe(app.plugins.browserSync.stream());
};

