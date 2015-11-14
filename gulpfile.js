// Include gulp
var gulp = require('gulp'); 

// Include Our Plugins
// var jshint = require('gulp-jshint');
// var sass = require('gulp-sass');
var concat = require('gulp-concat');
var minifyCss = require('gulp-minify-css');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');

gulp.task('minify-css', function() {
  return gulp.src('client/css/*.css')
    .pipe(minifyCss())
    .pipe(gulp.dest('build'));
});

// gulp.task('scripts', function() {
//     return gulp.src('build/*.js')
//         .pipe(concat('all.js'))
//         .pipe(gulp.dest('build'))
//         .pipe(rename('all.min.js'))
//         .pipe(uglify())
//         .pipe(gulp.dest('build'));
// });

// Watch Files For Changes
// gulp.task('watch', function() {
//     gulp.watch('js/*.js', ['scripts']);
// });

// Default Task
gulp.task('default', ['minify-css']);