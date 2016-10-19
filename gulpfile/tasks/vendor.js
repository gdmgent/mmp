/**
 * @author    Olivier Parent
 * @copyright Copyright © 2015-2016 Artevelde University College Ghent
 * @license   Apache License, Version 2.0
 */
(gulp => {
    'use strict';

    const CFG = global.CONFIG;

    let exec = require('child_process').exec;

    gulp.task('vendor', [
        'vendor:remove',
        'vendor:install',
    ]);

    gulp.task('vendor:install', [
        'vendor:font-awesome',
        'vendor:reveal',
        // 'vendor:trianglify',
    ]);

    // Font Awesome: https://fortawesome.github.io/Font-Awesome/
    gulp.task('vendor:font-awesome', () => {
        gulp // Fonts
            .src(`${CFG.dir.node}font-awesome/fonts/*`)
            .pipe(gulp.dest(`${CFG.dir.vendor}font-awesome/fonts/`));
        gulp // CSS
            .src(`${CFG.dir.node}font-awesome/css/*.*.*`)
            .pipe(gulp.dest(`${CFG.dir.vendor}font-awesome/css/`));

        return gulp;
    });

    // Reveal.js: http://lab.hakim.se/reveal-js/#/
    gulp.task('vendor:reveal', () => {
        gulp // CSS
            .src(`${CFG.dir.node}reveal.js/css/**/*.css`)
            .pipe(gulp.dest(`${CFG.dir.vendor}reveal.js/css/`));
        gulp // JS
            .src(`${CFG.dir.node}reveal.js/js/*.js`)
            .pipe(gulp.dest(`${CFG.dir.vendor}reveal.js/js/`));
        gulp // Lib
            .src(`${CFG.dir.node}reveal.js/lib/**/*`)
            .pipe(gulp.dest(`${CFG.dir.vendor}reveal.js/lib/`));
        gulp // Plugin
            .src(`${CFG.dir.node}reveal.js/plugin/**/*.js`)
            .pipe(gulp.dest(`${CFG.dir.vendor}reveal.js/plugin/`));

        return gulp;
    });
    
    gulp.task('vendor:remove', () => {
        exec(`rm -rf ${CFG.dir.vendor}`);
    });
    
    // Trianglify: http://qrohlf.com/trianglify/
    gulp.task('vendor:trianglify', () => {
        gulp
            .src(`${CFG.dir.node}trianglify/dist/*.min.js`)
            .pipe(gulp.dest(`${CFG.dir.vendor}trianglify/`));
    });

})(require('gulp'));
