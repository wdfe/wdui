'use strict'

const gulp = require('gulp')
const postcss = require('gulp-postcss')
const cssmin = require('gulp-cssmin')
const sass = require('gulp-sass')
const autoprefixer = require('autoprefixer')
const px2rem = require('postcss-px2rem')

gulp.task('compile', function(){
  return gulp.src('./theme-default/index.scss')
    .pipe(sass())
    .pipe(postcss([
      autoprefixer({browsers: ['> 1%', 'ie >= 9', 'iOS >= 6', 'Android >= 2.1']}),
      px2rem({remUnit: 75})
    ]))
    .pipe(cssmin())
    .pipe(gulp.dest('../../../lib/styles/theme-default'))
})

gulp.task('copyfont', function(){
  return gulp.src('./theme-default/fonts/**')
    .pipe(gulp.dest('../../../lib/styles/theme-default/fonts'))
})

gulp.task('build', ['compile', 'copyfont'])
