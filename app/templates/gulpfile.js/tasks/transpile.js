'use strict';
var gulp = require('gulp');
var sourcemaps = require('gulp-sourcemaps');
var babel = require('gulp-babel');

gulp.task('transpile', function() {
  return gulp.src('src/**/*.js')
      .pipe(sourcemaps.init())
      .pipe(babel({ stage: 1 }))
      .pipe(sourcemaps.write('.'))
      .pipe(gulp.dest('lib'));
});
