const {
    src,
    dest,
    series,
    parallel,
    watch
} = require('gulp');

const rename = require('gulp-rename');
const cleanCSS = require('gulp-clean-css');
const sourcemaps = require('gulp-sourcemaps');
const clean = require('gulp-clean');

function clear() {
    return src('dist', { read: false, allowEmpty: true })//不去讀檔案結構，增加刪除效率  / allowEmpty : 允許刪除空的檔案
        .pipe(clean({ force: true })); //強制刪除檔案 
}

function sassonline() {
    return src('./style.scss')
        .pipe(sass().on('error', sass.logError)) //sass
        .pipe(cleanCSS()) // minicss
        .pipe(dest('dist/css'));
}

exports.sass = sassonline


const babel = require('gulp-babel');

function babel5() {
    return src('./src/js/**/*.js')
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(dest('dist/src/js'));
}
exports.js = babel5

const imagemin = require('gulp-imagemin');
function min_images() {
    return src('./src/image/**/*.*')
        .pipe(imagemin([
            imagemin.mozjpeg({ quality: 70, progressive: true }) // 壓縮品質      quality越低 -> 壓縮越大 -> 品質越差 
        ]))
        .pipe(dest('dist/src/image'))
}

exports.image = min_images;

//清除舊檔案
function clear() {
    return src('dist', { read: false, allowEmpty: true })
        //不去讀檔案結構，增加刪除效率  / allowEmpty : 允許刪除空的檔案
        .pipe(clean({ force: true })); //強制刪除檔案 
}


// 清除舊檔案 -> html sass js ->壓縮圖片

// exports.production = series(clear, parallel(sassonline, babel5), min_images)


//打包用
//html 樣板
const fileinclude = require('gulp-file-include');

function includeHTML() {
    return src('./src/html/*.html')
        .pipe(fileinclude({
            prefix: '@@',
            basepath: '@file'
        }))
        .pipe(dest('./dist/src/html'));
}

exports.html = includeHTML;


// sass
const sass = require('gulp-sass')(require('sass'));

// 開發用
function sassstyle() {
    return src('./style.scss')
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError)) //sass
        .pipe(sourcemaps.write())
        .pipe(dest('dist/css'));
}

exports.sassstyle = sassstyle;

// js copy
function jsdev() {
    return src('./js/*.js').pipe(dest('dist/js'));
}


const browserSync = require('browser-sync');
const reload = browserSync.reload;



function browser(done) {
    browserSync.init({
        server: {
            baseDir: "./dist/src/html",
            index: "index.html"
        },
        port: 3000
    });
    watch('style.scss', sassstyle).on('change', reload);
    watch('./src/html/*.html', includeHTML).on('change', reload);
    watch('./src/js/**/*.js', jsdev).on('change', reload);
    watch('image/**/*.*', min_images).on('change', reload);
    done();
}


//開發用
exports.dev = browser;