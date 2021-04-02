const {src, dest, watch, series} = require("gulp");
const sass = require("gulp-sass");
const postcss = require("gulp-postcss");
const cssnano = require("cssnano");
const autoprefixer = require("gulp-autoprefixer");
const browserSync = require("browser-sync").create();
var browserify = require("browserify");
var babelify = require("babelify");
var source = require("vinyl-source-stream");

function cssLibs(){
    return src([
        "node_modules/normalize.css/normalize.css",
        "node_modules/mmenu-js/dist/mmenu.css",
        "node_modules/mburger-css/dist/mburger.css"
    ], { sourcemaps: true })
    .pipe(dest("src/scss"), {sourcemaps: "."});
}

function scssTask(){
    return src("src/scss/**/style.scss", { sourcemaps: true })
    .pipe(sass())
    .pipe(postcss([cssnano()]))
    .pipe(autoprefixer())
    .pipe(dest("public/css", {sourcemaps: "."}));
}

function jsTask(){
    return browserify(
        [
            "src/components/App.jsx",
            "node_modules/mmenu-js/dist/mmenu.js",
            "src/js/script.js"
        ]
    )
    .transform(babelify)
    .bundle()
    .on("error", (err)=>{
        console.log("JS Error", err);
    })
    .pipe(source("bundle.js"))
    .pipe(dest("public/js"));
}

//browser sync tasks

function browserSyncInit(cb){
    browserSync.init({
        server:{
            baseDir : "./public"
        },
        notify: false
    });
    cb();
}

function browserSyncReload(cb){
    browserSync.reload();
    cb()
}

//watch task

function watchTask(){
    watch("**/*.html", browserSyncReload);
    // watch(["src/scss/**/*.scss","src/js/**/*.js"], series(scssTask, jsTask, browserSyncReload));
    watch(["src/scss/**/*.scss", "src/**/*.jsx"], series(scssTask, jsTask, browserSyncReload));
}

exports.default = series(
  cssLibs,
  scssTask,
  jsTask,
  browserSyncInit,
  watchTask
);