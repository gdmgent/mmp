/**
 * @author    Olivier Parent
 * @copyright Copyright © 2015-2016 Artevelde University College Ghent
 * @license   Apache License, Version 2.0
 */
(gulp => {
    'use strict';

    let gutil = require('gulp-util');

    if (global.isProduction) {
        gutil.log(gutil.colors.white.bgGreen.bold(' Production Mode '));
    } else {
        gutil.log(gutil.colors.white.bgBlue.bold(' Development Mode '));
    }

    gulp.task('default', [
        'vendor:install',
        // 'styles',
    ]);

})(require('gulp'));