var gulp = require('gulp');
var watch = require('gulp-watch');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var concat = require('gulp-concat');

gulp.task('default', ['sass', 'js']);

gulp.task('sass', function() {
  watch('./public/scss/**/*.scss', function (event) {
        console.log('[SASS]: File ' + event.path + ' was changed, running tasks...');
        gulp.src('./public/scss/**/*.scss')
            .pipe(sass({ includePaths : ['./public/scss/tools'] }))
			.pipe(autoprefixer())
            .pipe(gulp.dest('./public/dist'));
    });
});

gulp.task('js', function() {
    watch('./public/js/**/*.js', function (event) {
        console.log('[JS]: File ' + event.path + ' was changed, running tasks...');
		gulp.src('./public/js/**/*.js')
            .pipe(concat('main.js'))
            .pipe(gulp.dest('./public/dist'));
    });
  
});