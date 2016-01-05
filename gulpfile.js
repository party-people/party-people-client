var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var browserify  = require('browserify');
var babelify    = require('babelify');
var source      = require('vinyl-source-stream');
var buffer      = require('vinyl-buffer');

gulp.task(
  'compile-html',
  function() {
    gulp.src('./src/html/*html')
      .pipe($.plumber())
      .pipe($.minifyHtml({
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
      .pipe($.plumber())
      .pipe($.sass())
      .pipe($.cssmin())
      .pipe($.rename({suffix: '.min'}))
      .pipe(gulp.dest('./dist/css'));
  }
);

gulp.task(
  'compile-es6',
  function() {
    browserify({
      entries: ['./src/javascripts/index.js'],
      debug: true
    })
    .transform(babelify)
    .bundle()
    .on('error',function(error){
      console.log(error.message);
    })
    .pipe(source('index.js'))
    .pipe($.plumber())
    .pipe(buffer())
    .pipe($.uglify())
    .pipe($.rename({suffix: '.min'}))
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
      .pipe($.webserver({
        livereload: true,
        open: true,
        port: 8888
      }));
  }
);

gulp.task('default', ['compile', 'webserver']);
