
var gulp = require('gulp');
var jshint = require('gulp-jshint');
var mocha = require('gulp-mocha');
var gutil = require('gulp-util');

gulp.task('test', function() {
  return gulp.src(['test/*.js'], { read: false })
    .pipe(mocha());
});
gulp.task('lint', function() {
  return gulp.src(['./*.js', './test/*.js'])
    .pipe(jshint());
    // .pipe(jshint.reporter('YOUR_REPORTER_HERE'));
});
gulp.task('watch-test', function(){
  gulp.watch(['pets.js', './test/**'], ['test']);
});
gulp.task('default', ['test']);
gulp.task('testing', ['test', 'lint', 'watch-test']);
