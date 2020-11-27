// var fs = require('fs');
// var pkg = JSON.parse(fs.readFileSync('./package.json'));
var gulp = require('gulp');
// sass compiler
var sass = require('gulp-sass');
// ファイル結合
var concat = require("gulp-concat");

const aliases = require('gulp-style-aliases')

// error handling
// var plumber = require('gulp-plumber');
gulp.task('sass', function(done) {
	gulp.src('./theme/_scss/*.scss')
		.pipe(aliases({
			"@bootstrap": "./node_modules/bootstrap/scss"
		}))
		// .pipe(aliases({
		// 	"@fontawesome": "./node_modules/@fontawesome/fontawesome-free"
		// }))
        .pipe(sass())
		.pipe(gulp.dest('./theme/css/'));
		done();
});

gulp.task("marge_css", function(done) {
	return gulp
		.src([
			"./theme/css/_default_import.css",
			"./theme/css/raw.css"
		])
		.pipe(concat("style.css"))
		.pipe(gulp.dest("./theme/css/"));
		// done();
});

gulp.task('default', function() {
    gulp.watch('./theme/_scss/**.scss',gulp.task('watch'));
});

gulp.task('watch', function() {
	gulp.watch('./theme/_scss/**/*.scss',gulp.series('sass','marge_css'));
});
