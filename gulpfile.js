'use strict';
var gulp = require('gulp');
var uglify = require('gulp-uglify');
var less = require('gulp-less');
var autoprefixer = require('gulp-autoprefixer');
var cssmin = require('gulp-cssmin');
var imagemin = require('gulp-imagemin');
var sourcemaps = require('gulp-sourcemaps');
var del = require('del');

var paths = {
	scripts: 'public/js/*',
  	lesscss: 'public/css/*.less',
	fonts: 'public/css/fonts/**/*',
	images: 'public/img/**/*'
};

gulp.task('clean', function() {
	return del(['build']);
});

gulp.task('scripts', ['clean'], function() {  
	return gulp.src(paths.scripts)
	.pipe(sourcemaps.init())
	.pipe(uglify())
	.pipe(sourcemaps.write('./maps'))
	.pipe(gulp.dest('public/build/js'));
});

gulp.task('lesscss', ['clean'], function() {  
	return gulp.src(paths.lesscss)
	.pipe(sourcemaps.init())
	.pipe(less())
	.pipe(autoprefixer())
	.pipe(cssmin())
	.pipe(sourcemaps.write('./maps'))
	.pipe(gulp.dest('public/build/css'));
});

gulp.task('fonts', ['clean'], function() {  
	return gulp.src(paths.fonts)
	.pipe(gulp.dest('public/build/css/fonts'));
});

gulp.task('images', ['clean'], function() {
	return gulp.src(paths.images)
	.pipe(imagemin({optimizationLevel: 5}))
	.pipe(gulp.dest('public/build/img'));
});

gulp.task('watch', function() {
	gulp.watch(paths.scripts, ['scripts']);
	gulp.watch(paths.css, ['lesscss']);
	gulp.watch(paths.css, ['css']);
	gulp.watch(paths.fonts, ['fonts']);
	gulp.watch(paths.images, ['images']);
});

gulp.task('default', ['watch', 'scripts', 'lesscss', 'fonts', 'images']);