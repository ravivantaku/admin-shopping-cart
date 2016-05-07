/**
 * Created by V Ravi on 21-04-2016.
 */
var gulp = require("gulp");
var concat = require("gulp-concat");
var ug = require("gulp-uglify");
var rename = require("gulp-rename");
var del = require("del");
var jshint = require("gulp-jshint");
var minifyCss = require("gulp-minify-css");
var runSequence = require("run-sequence");

gulp.task("clean", function(){
    return del(["dest"]);
});

gulp.task("lint", function(){
    gulp.src("src/**/*.js")
        .pipe(jshint())
        .pipe(jshint.reporter("default"));
});
gulp.task("concat", function(){
    gulp.src("src/**/*.js")
        .pipe(concat("all.js"))
       // .pipe(ug())
        .pipe(rename("all.min.js"))
        .pipe(gulp.dest("dest"));
});

gulp.task('minify-css', function () {
    gulp.src('src/**/*.css')
        .pipe(concat('all.css'))
        .pipe(minifyCss())
        .pipe(rename("all.min.css"))
        .pipe(gulp.dest("dest"));
});
// Watch Files For Changes
gulp.task('watch', function() {
    gulp.watch('src/**/*.js', function(){
        runSequence("lint", "concat");
    });
});

gulp.task("default", function(){
    runSequence("clean","lint","minify-css", "concat", "watch");
});