var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var minify = require('gulp-minify-css');
var sass = require('gulp-sass');


gulp.task('js', function(){
   gulp.src('src/js/*.js')
   .pipe(concat('bailbloc-widget.js'))
   .pipe(uglify())
   .pipe(gulp.dest('build/scripts/'));
});

gulp.task('sass', function () {
  return gulp.src('src/scss/*.scss')
    .pipe(sass.sync({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(gulp.dest('build/styles'));
});


gulp.task('watch', function () {
  gulp.watch('src/scss/*.scss', ['sass']);
  gulp.watch('src/js/*.js', ['js']);
});



