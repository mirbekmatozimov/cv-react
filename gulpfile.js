const {src, dest, watch, series} = require("gulp");
const sass = require("gulp-sass");
const postcss = require("gulp-postcss");
const cssnano = require("cssnano");
const autoprefixer = require("gulp-autoprefixer");
const terser = require("gulp-terser");
const concat = require("gulp-concat");
var browserify = require("browserify");
var babelify = require("babelify");
var source = require("vinyl-source-stream");

function cssLibs(){
    return src([
        "node_modules/normalize.css/normalize.css",
        "node_modules/mmenu-js/dist/mmenu.css",
        "node_modules/mburger-css/dist/mburger.css",
        "node_modules/animate.css/animate.min.css"
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

// DONT TOUCH it its written once and dont need in customizing
function jsBabelify(){
    return browserify(
            "src/components/App.jsx"            
    )
    .transform(babelify)
    .bundle()
    .on("error", (err)=>{
        console.log("JS Error", err);
    })
    .pipe(source("bundle.js"))
    .pipe(dest("public/js"));
}   


// this js task is for ADDING LIBS
function jsTask(){
    return src([
        "node_modules/mmenu-js/dist/mmenu.js",
        "node_modules/wow.js/dist/wow.min.js",
        "src/js/script.js"
    ],{sourcemaps: true})
    .pipe(terser())
    .pipe(concat("libs.min.js"))
    .pipe(dest("public/js",{sourcemaps: "."}));
}

exports.watching = ()=>{
    watch("src/scss/*.scss", scssTask);
    watch(["src/js/*.js","src/components/*.jsx"], series(jsBabelify, jsTask));
};

exports.default = series(
  cssLibs,
  scssTask,
  jsTask,
  jsBabelify
);