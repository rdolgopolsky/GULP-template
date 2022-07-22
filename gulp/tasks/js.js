import webpack from 'webpack-stream';
import babel from 'gulp-babel';

export const js = () => {
	return app.gulp.src(app.path.src.js, {sourcemaps: true})
		.pipe(app.plugins.plumber(
			app.plugins.notify.onError({
				title: 'JS',
				message: 'Error: <%= error.message %>',
			}))
		)
		.pipe(babel({
			presets: ['@babel/env'],
		}))
		.pipe(webpack({
			mode: 'development',
			devtool: 'source-map',
			output: {
				filename: 'main.min.js',
			}
		}))
		.pipe(app.gulp.dest(app.path.build.js))
		.pipe(app.plugins.browserSync.stream());
}