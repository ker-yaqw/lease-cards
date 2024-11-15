export const server = (done) => {
	app.plugins.browserSync.init({
		server: {
			baseDir: `${app.path.build.dist}`
		},
        // tunnel: true,                            //! ДЕМОНСТРАЦИЯ ОНЛАЙН
		notify: false,
		port: 3000,
        //ui: false,
        //host: 'localhost',
	});
};