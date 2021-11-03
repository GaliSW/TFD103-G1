const {
    src,
    dest,
    series,
    parallel,
    watch
} = require('gulp');

exports.testgulp = function test(cb) {
    console.log('gulp done');
    cb();
}

function missionA(cb) {
    console.log('missionA')
    cb();
}

function missionB(cb) {
    console.log('missionB')
    cb();
}

exports.async = series(missionA, missionB); //依序進行

exports.sync = parallel(missionA, missionB); //同時進行


//將檔案搬家（全部的html）
exports.file = function copy() {
    return src('./*.html').pipe(dest('dist'))
}


//******************gulp套件********************

const cleanCSS = require('gulp-clean-css');
const rename = require('gulp-rename');

function minicss() {
    return src('./pop.css')
        .pipe(cleanCSS({ compatibility: 'ie10' })) //壓縮css
        .pipe(rename({
            extname: 'pop.min.css'
        }))
        .pipe(dest('dist'))
}

exports.cssCompress = minicss;


//**************** gulp sass編譯 ****************** */

const sass = require('gulp-sass')(require('sass'));

function sassstyle() {
    return src('./sass/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(cleanCSS())
        .pipe(dest('dist/css'))
}

exports.scss = sassstyle





//**************** gulp sourcemap ****************** */

const sourcemaps = require('gulp-sourcemaps');

function styleSass() {
    return src('./sass/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
        .pipe(sourcemaps.write())
        .pipe(dest('./dist/css'));
}

exports.sourcemaps = styleSass


//**************** gulp fileinclude ****************** */

const fileinclude = require('gulp-file-include');

function includeHTML() {
    return src('*.html')
        .pipe(fileinclude({
            prefix: '@@',
            basepath: '@file'
        }))
        .pipe(dest('./dist'));
}

//**************** gulp watch ****************** */
function watchFiles() {
    watch(('./style.scss'), sassstyle)
    watch(['*.html', '**/*.html'], includeHTML)
}

exports.watchSass = watchFiles //當檔案變更會自動執行重新編譯