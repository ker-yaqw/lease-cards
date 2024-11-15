import * as nodePath from 'path'; // project folder
const rootFolder = nodePath.basename(nodePath.resolve()); // project name
const srcFolder = `./src`;
const buildFolder = `./dist`;

export const path = {
	build: {
		dist: `${buildFolder}/`,
		css: `${buildFolder}/css/`,
        cssFile: `${buildFolder}/css/style.min.css`,
		js: `${buildFolder}/js/`,
		images: `${buildFolder}/img/`,
		fonts: `${buildFolder}/fonts/`,
		favicon: `${buildFolder}/favicon/`,
	},
	src: {
		html: `${srcFolder}/*.html`,
		htmlPages: `${srcFolder}/pages/*.html`,
		scss: `${srcFolder}/scss/style.scss`,
		js: `${srcFolder}/js/script.js`,
		assets: [
            `${srcFolder}/assets/**/*.*`,
            `!${srcFolder}/assets/fonts/**/*.*`,
            `!${srcFolder}/assets/favicon/**/*.*`
            ],
		images: [
            `${srcFolder}/img/**/*.{jpg,jpeg,png,gif,svg,webp,avif}`,
            `!${srcFolder}/img/svg/*.{jpg,jpeg,png,gif,svg,webp,avif}`,
            `!${srcFolder}/img/avif-webp/**/*.{jpg,jpeg,png,gif,svg,webp,avif}`
            ],
		sprite: `${srcFolder}/img/svg/*.svg`,
		avifWebp: `${srcFolder}/img/avif-webp/**/*.{jpg,jpeg,png,gif,svg,webp,avif}`,
		favicon: `${srcFolder}/assets/favicon/*`,
	},
	watch: {
		assets: [
            `${srcFolder}/assets/**/*.*`,
            `!${srcFolder}/assets/fonts/**/*.*`,
            ],
		html: `${srcFolder}/**/*.html`,
		scss: `${srcFolder}/**/*.scss`,
		js: `${srcFolder}/js/**/*.js`,
		images: [
            `${srcFolder}/img/**/*.{jpg,jpeg,png,gif,svg,webp,avif}`,
            `!${srcFolder}/img/svg/*.{jpg,jpeg,png,gif,svg,webp,avif}`,
            `!${srcFolder}/img/avif-webp/**/*.{jpg,jpeg,png,gif,svg,webp,avif}`
            ],
		avifWebp: `${srcFolder}/img/avif-webp/**/*.{jpg,jpeg,png,gif,svg,webp,avif}`,
        sprite: `${srcFolder}/img/svg/*.svg`,
        favicon: `${srcFolder}/assets/favicon/**/*.*`,
	},

    clear: `${buildFolder}/**/*`,
	buildFolder: buildFolder,
	srcFolder: srcFolder,
	rootFolder: rootFolder
};