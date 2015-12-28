var gulp = require('gulp');
var minifyHTML  = require('gulp-minify-html');
var plumber     = require('gulp-plumber');
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

gulp.task('compile', ['compile-html']);

gulp.task(
  'webserver',
  function() {
    gulp.src('./dist')
      .pipe(webserver({
        livereload: true,
        open: true,
        port: 8888
      }));
  }
);

gulp.task('default', ['compile', 'webserver']);
