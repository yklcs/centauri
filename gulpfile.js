const gulp = require('gulp');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const autoprefixer = require('autoprefixer');
const postcss = require('gulp-postcss');
const cssnano = require('cssnano');

sass.compiler = require('node-sass');

const build = () => {
  return gulp.src('./src/scss/style.scss')
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(postcss([autoprefixer({ grid: "autoplace" }), cssnano]))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./static/css'));
}
const watch = () => {
  gulp.watch('./src/scss/*.scss', build)
}

exports.build = build;
exports.watch = watch;
exports.default = watch;