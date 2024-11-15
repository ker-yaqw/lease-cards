export const critCSS = () => {
    return app.gulp.src(app.path.src.html)
        .pipe(
            app.plugins.critical({
                base: app.path.build.dist,
                inline: true,
                css: [app.path.build.cssFile]
            })
        )
        .on('error', (err) => {
            console.error(err.message);
        })
        .pipe(gulp.dest(app.path.build.dist));
};
