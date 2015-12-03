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
	return gulp.src(['app/views/**/*.jade', '!app/views/layouts/**/*.jade', '!app/views/pages/**/*.jade'])
		.pipe(plugins.plumber())
		.pipe(plugins.watch(['app/views/**/*.jade', '!app/views/layouts/**/*.jade', '!app/views/pages/**/*.jade'],{
			verbose: true
		}))
		.pipe(plugins.jade({
			pretty: true
		}))
		.pipe(plugins.plumber.stop())
		.pipe(gulp.dest('./storage/views'))
});

/*----------  Compile Coffeescript  ----------*/
gulp.task('coffee',function(){
	return gulp.src('app/scripts/**/*.coffee')
		.pipe(plugins.plumber())
		.pipe(plugins.watch('app/scripts/**/*.coffee', {
			verbose: true
		}))
		.pipe(plugins.coffee())
		.pipe(plugins.plumber.stop())
		.pipe(gulp.dest('storage/scripts'))
});


/*----------  Run the tasks  ----------*/
gulp.task('default',['styles', 'jade', 'coffee']);
	
/*=====  End of Gulpfile  ======*/