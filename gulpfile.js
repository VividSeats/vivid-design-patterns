const path = require('path');
const gulp = require('gulp');
const rollUpEach = require('gulp-rollup-each');
const changed = require('gulp-changed');
const gulpif = require('gulp-if');
const rename = require('gulp-rename');
const rollUpConfig = require('./rollup.config');
const isDev = process.env.NODE_ENV === 'dev';

const dist = 'dist';

gulp.task('copy_ts', () => {
    return gulp.src('src/index.d.ts').pipe(gulp.dest(dist));
});

gulp.task('bundle_js', () => {
    return gulp
        .src(['src/components/**/*.{js,jsx}', 'src/index.js'])
        .pipe(gulpif(isDev, changed(dist)))
        .pipe(
            rollUpEach(rollUpConfig, file => ({
                format: 'cjs'
            }))
        )
        .pipe(
            rename(p => {
                p.extname = '.js';
            })
        )
        .pipe(gulp.dest(dist));
});

gulp.task('watch_js', () => {
    gulp.watch('src/**/*.{js,jsx}', gulp.series('bundle_js')).on('error', e => {
        console.error(e.toString());
        this.emit('end');
    });
});
