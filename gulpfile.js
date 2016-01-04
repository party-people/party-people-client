var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var babel       = require('gulp-babel');
var concat      = require('gulp-concat');
var cssmin      = require('gulp-cssmin');
var minifyHTML  = require('gulp-minify-html');
var plumber     = require('gulp-plumber');
var rename      = require('gulp-rename');
var uglify      = require('gulp-uglify');
var webserver   = require('gulp-webserver');

gulp.task(
  'compile-html',
  function() {
    gulp.src('./src/html/*html')
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

gulp.task(
  'compile-es6',
  function() {
    gulp.src('./src/javascripts/*js')
      .pipe(plumber())
      .pipe(babel())
      .pipe(concat('index.js'))
      .pipe(uglify())
      .pipe(rename({suffix: '.min'}))
      .pipe(gulp.dest('./dist/js'));
  }
)

gulp.task('compile', ['compile-html', 'compile-sass', 'compile-es6']);

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
