/*================================
=            Gulpfile            =
================================*/

/*----------  Requiring all the things  ----------*/
var gulp = require('gulp'),
	plugins = require('gulp-load-plugins')();


/*----------  Compile styles  ----------*/
gulp.task('styles',function(){
	return gulp.src('app/styles/**/*.html')
		.pipe(plugins.watch('app/styles/**/*.html',{
			verbose: true
		}))
		.pipe(gulp.dest('storage/styles'))
});

/*----------  Compile views  ----------*/
gulp.task('jade', function(){
	return gulp.src(['app/views/**/*.jade', '!app/views/layouts/**/*.jade'])
		.pipe(plugins.plumber())
		.pipe(plugins.watch(['app/views/**/*.jade', '!app/views/layouts/**/*.jade'],{
			verbose: true
		}))
		.pipe(plugins.jade({
			pretty: true
		}))
		.pipe(plugins.plumber.stop())
		.pipe(plugins.extReplace('php'))
		.pipe(gulp.dest('storage/views'))
});

/*----------  Run the tasks  ----------*/
gulp.task('default',['styles', 'jade']);
	
/*=====  End of Gulpfile  ======*/