import gulp from "gulp";
import { path } from "./gulp/config/path.js";
import { plugins } from "./gulp/config/plugins.js";

global.app = {
    isBuild: process.argv.includes("--build"),
    isDev: !process.argv.includes("--build"),
    addWebP: process.argv.includes("--webp"),
    addAvif: process.argv.includes("--avif"),
    path: path,
    gulp: gulp,
    plugins: plugins,
};

import { copy } from "./gulp/tasks/copy.js";
import { clear } from "./gulp/tasks/clear.js";
import { html } from "./gulp/tasks/html.js";
import { scss } from "./gulp/tasks/scss.js";
import { js } from "./gulp/tasks/js.js";
import { images } from "./gulp/tasks/images.js";
import { server } from "./gulp/tasks/server.js";
import { avifWebp } from "./gulp/tasks/avif-webp.js";
import { otfToTtf, ttfToWoff, fontsStyle } from "./gulp/tasks/fonts.js";
import { sprite } from "./gulp/tasks/sprite.js";
import { favicon } from "./gulp/tasks/favicon.js";
import { zip } from "./gulp/tasks/zip.js";

function watcher() {
    gulp.watch(path.watch.assets, copy);
    gulp.watch(path.watch.html, html);
    gulp.watch(path.watch.scss, scss);
    gulp.watch(path.watch.js, js);
    gulp.watch(path.watch.images, images);
    gulp.watch(path.watch.avifWebp, avifWebp);
    gulp.watch(path.watch.sprite, sprite);
    gulp.watch(path.watch.favicon, favicon);
}

const fonts = gulp.series(otfToTtf, ttfToWoff, fontsStyle);
const mainTasks = gulp.series(fonts, gulp.parallel(copy, html, scss, js, images, avifWebp, sprite, favicon));


export const dev = gulp.series(clear, mainTasks, gulp.parallel(watcher, server));
export const build = gulp.series(clear, mainTasks);
export const deployZIP = gulp.series(clear, mainTasks, zip);

gulp.task("default", dev);
