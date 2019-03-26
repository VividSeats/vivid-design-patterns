const path = require('path');
const gulp = require('gulp');
const rollUpEach = require('gulp-rollup-each');
const changed = require('gulp-changed');
const gulpif = require('gulp-if');
const rollUpConfig = require('./rollup.config');
const isDev = process.env.NODE_ENV === 'dev';

gulp.task('bundle_js', () => {
    const dist = 'dist';

    return gulp
        .src('src/components/**/*.{js,jsx}')
        .pipe(gulpif(isDev, changed(dist)))
        .pipe(
            rollUpEach(rollUpConfig, file => ({
                format: 'cjs'
            }))
        )
        .pipe(gulp.dest(dist));
});

gulp.task('watch_js', () => {
    gulp.watch('src/**/*.{js,jsx}', gulp.series('bundle_js')).on('error', e => {
        console.error(e.toString());
        this.emit('end');
    });
});
