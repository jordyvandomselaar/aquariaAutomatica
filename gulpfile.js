/*================================
=            Gulpfile            =
================================*/

/*----------  Requiring all the things  ----------*/
var gulp = require('gulp'),
	plugins = require('gulp-load-plugins')({lazy: false});


/*----------  Compile Stylus  ----------*/
gulp.task('stylus',function(){
	return gulp.src(['app/styles/**/*.styl', '!app/styles/no_compile/**/*.styl'])
		.pipe(plugins.plumber())
		.pipe(plugins.watch(['app/styles/**/*.styl', '!app/styles/no_compile/**/*.styl'],{
			verbose: true
		}))
		.pipe(plugins.stylus())
		.pipe(plugins.plumber.stop())
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
gulp.task('default',['stylus', 'jade']);
	
/*=====  End of Gulpfile  ======*/