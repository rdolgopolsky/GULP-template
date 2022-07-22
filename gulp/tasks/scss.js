// export const scss = () => {
// 	return src(app.path.src.scss)
// 		.pipe(plumber({ errorHandler: notify.onError('Error: <%= error.message %>') }))
// 		.pipe(sass())
// 		.pipe(autoprefixer({ overrideBrowserslist: ['last 10 versions'] }))
// 		.pipe(dest(app.path.build.css))
// 		.pipe(browserSync.stream());
// }

import dartSass from 'sass';
import gulpSass from 'gulp-sass';
import rename from 'gulp-rename';

import cleanCSS from 'gulp-clean-css';

import autoprefixer from 'gulp-autoprefixer';
import groupMediaQueries from 'gulp-group-css-media-queries';


const sass = gulpSass(dartSass);

export const scss = () => {
	return app.gulp.src(app.path.src.scss, {sourcemap: true})
		.pipe(app.plugins.plumber(
			app.plugins.notify.onError({
				title: 'SCSS',
				message: 'Error: <%= error.message %>',
			})))
		// .pipe(app.plugins.replace('=../img/', '=../img/'))
		.pipe(sass({
			outputStyle: 'expanded',
			includePaths: ['node_modules']
		}))
		.pipe(groupMediaQueries())
		.pipe(autoprefixer({
			grid: true,
			overrideBrowserslist: ['last 10 versions'],
			cascade: true,
		}))
		// .pipe(app.gulp.dest(app.path.build.css))
		.pipe(cleanCSS())
		.pipe(rename({
			extname: '.css',
		}))
		.pipe(app.gulp.dest(app.path.build.css))
		.pipe(app.plugins.browserSync.stream());
}