var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var cssmin      = require('gulp-cssmin');
var minifyHTML  = require('gulp-minify-html');
var plumber     = require('gulp-plumber');
var rename      = require('gulp-rename');
var webserver   = require('gulp-webserver');

gulp.task(
  'compile-html',
  function() {
    gulp.src('./src/html/index.html')
      .pipe(plumber())
      .pipe(minifyHTML({
        conditionals: true,
        spare:true
      }))
      .pipe(gulp.dest('./dist'));
  }
);

gulp.task(
  'compile-sass',
  function() {
    gulp.src('./src/stylesheets/*scss')
      .pipe(plumber())
      .pipe($.sass())
      .pipe(cssmin())
      .pipe(rename({suffix: '.min'}))
      .pipe(gulp.dest('./dist/css'));
  }
);

gulp.task('compile', ['compile-html', 'compile-sass']);

gulp.task(
  'watch',
  function() {
    gulp.watch('src/**/*', ['compile'])
  }
);

gulp.task(
  'webserver',
  function() {
    gulp.src('./dist/')
      .pipe(webserver({
        livereload: true,
        open: true,
        port: 8888
      }));
  }
);

gulp.task('default', ['compile', 'webserver']);
