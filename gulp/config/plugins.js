// html*pug

import fileInclude from 'gulp-file-include'; // подключение html
import htmlmin from 'gulp-htmlmin'; // сжатия html
import typograf from 'gulp-typograf'; // сжатия html
import prettyHtml from 'gulp-pretty-html';
//!import gulppug from 'gulp-pug';

//css
import dartSass from 'sass';
import gulpSass from 'gulp-sass';
import autoprefixer from 'gulp-autoprefixer'; // Добавление вендорных префиксов
import cleanCss from 'gulp-clean-css'; // Сжатие CSS файл
import gcmq from 'gulp-group-css-media-queries'; // Групировка медиа запросов
// import short from 'gulp-shorthand'; // Сокращение (объединени) свойств
//!import { stream as critical } from 'critical';

// js

import webpack from 'webpack-stream';
import terser from 'gulp-terser';
//!import webpack from 'webpack';

// img
import imagemin from 'gulp-imagemin';
import webp from 'gulp-webp';
import newer from 'gulp-newer'; // Проверка обновления изображения
import sprite from 'gulp-svg-sprite';
import svgmin from 'gulp-svgmin';
import cheerio from 'gulp-cheerio';

//!import tinypng from 'gulp-tinypng-compress';
//!import gulpImg from 'gulp-image';
//!import gulpAvif from 'gulp-avif';

// fonts
import fs from 'fs'; // работа с файловой системой
import fonter from 'gulp-fonter-fix'; // otf в ttf
import ttf2woff2 from 'gulp-ttf2woff2'; // ttf в woff

// favicon
import favicon from 'gulp-favicons'; // генератор фавиконок
import filter from 'gulp-filter'; // генератор фавиконок

// other
import gulpIf from 'gulp-if'; // Условное ветвление
import rename from 'gulp-rename'; // Переименование
import replace from 'gulp-replace'; // Поиск и замена
import plumber from 'gulp-plumber'; // Обработка ошибок
import notify from 'gulp-notify'; // Сообщения (подсказки)
import browserSync from 'browser-sync'; // Локальный сервер
import size from 'gulp-size'; // Показывает размер файла
import { deleteAsync } from 'del'; // удаление файлов в dist

// zip
import zip from 'gulp-zip';

// Экспортируем объект
export const plugins = {
	fileInclude,
	htmlmin,
	typograf,
    prettyHtml,

    sass: gulpSass(dartSass),
	autoprefixer,
	cleanCss,
	gcmq,
    // short,

	webpack,
    terser,

	imagemin,
	webp,
	newer,
	sprite,
	svgmin,
	cheerio,

	fs,
	fonter,
	ttf2woff2,

	favicon,
	filter,

	if: gulpIf,
	rename,
	replace,
	plumber,
	notify,
	browserSync,
    size,
	del: deleteAsync,

	zip,
};