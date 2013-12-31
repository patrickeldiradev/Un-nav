var gulp = require('gulp'),
    sass = require('gulp-ruby-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    minifycss = require('gulp-minify-css'),
    rename = require('gulp-rename'),
    livereload = require('gulp-livereload'),
    notify = require('gulp-notify');

gulp.task('build-css', function() {
    return sass('scss/*.scss', { style: 'expanded', sourcemap: true })
        .pipe(autoprefixer('last 2 version'))
        .pipe(gulp.dest('css'))
        .pipe(rename({suffix: '.min'}))
        .pipe(minifycss())
        .pipe(gulp.dest('css'))
        .pipe(notify({ message: 'build-css task complete'}));
});

gulp.task('watch', function() {
    gulp.watch('scss/*.scss', ['build-css']);
});

gulp.task('default', ['watch'], function() {

});