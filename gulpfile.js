const path = require('path');
const gulp = require('gulp');
const rollUpEach = require('gulp-rollup-each');
const rollUpConfig = require('./rollup.config');

gulp.task('bundle_js', () => {
    return gulp
        .src('src/components/**/*.{js,jsx}')
        .pipe(
            rollUpEach(rollUpConfig, file => {
                return {
                    format: 'cjs',
                    name: path.basename(file.path, file.extname),
                    globals: {
                        react: 'React',
                        'prop-types': 'PropTypes'
                    }
                };
            })
        )
        .pipe(gulp.dest('dist/'));
});

gulp.task('watch_js', () => {
    gulp.watch('src/**/*.{js,jsx}', gulp.series('bundle_js')).on('error', e => {
        console.error(e.toString());
        this.emit('end');
    });
});
