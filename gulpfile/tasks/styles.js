/**
 * @author    Olivier Parent
 * @copyright Copyright © 2015-2016 Artevelde University College Ghent
 * @license   Apache License, Version 2.0
 */
(gulp => {
    'use strict';

    const CFG = global.CONFIG;

    let gulp_if = require('gulp-if'),
        sass    = require('gulp-sass');

    gulp.task('styles', () => {
        gulp.src('./scss/*.scss')
            .pipe(sass(gulp_if(isProduction, CFG.sass.production, CFG.sass.development)).on('error', sass.logError))
            .pipe(gulp.dest('./css'));
    });

})(require('gulp'));
