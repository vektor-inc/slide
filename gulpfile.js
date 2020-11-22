// var fs = require('fs');
// var pkg = JSON.parse(fs.readFileSync('./package.json'));
var gulp = require('gulp');
// sass compiler
var sass = require('gulp-sass');
// ファイル結合
var concat = require("gulp-concat");

// error handling
// var plumber = require('gulp-plumber');
gulp.task('sass', function(done) {
    gulp.src('./marp-theme/_scss/*.scss')
        .pipe(sass())
		.pipe(gulp.dest('./marp-theme/css/'));
		done();
});

gulp.task("marge_css", function(done) {
	return gulp
		.src([
			"./marp-theme/css/_default_import.css",
			"./marp-theme/css/raw.css"
		])
		.pipe(concat("style.css"))
		.pipe(gulp.dest("./marp-theme/css/"));
		// done();
});

gulp.task('default', function() {
    gulp.watch('./marp-theme/_scss/**.scss',gulp.task('watch'));
});

gulp.task('watch', function() {
	gulp.watch('./marp-theme/_scss/**/*.scss',gulp.series('sass','marge_css'));
});
