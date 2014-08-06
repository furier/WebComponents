/**
 * Created by sander.struijk on 06.08.14.
 */
'use strict';

var gulp = require('gulp'),
    connect = require('gulp-connect');

gulp.task('connect', function () {
    connect.server({
        root: ['.'],
        port: 8000,
        livereload: true
    });
});

gulp.task('watch', ['connect'], function () {
    gulp.watch(['index.html', 'components/**'], function () {
        gulp.src(['index.html', 'components/**'])
            .pipe(connect.reload());
    });
});

gulp.task('default', ['watch']);