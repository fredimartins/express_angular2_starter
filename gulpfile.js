var gulp = require('gulp');
var ts = require('gulp-typescript');
var path = require('path');
var sourcemaps = require('gulp-sourcemaps');
var shell = require('gulp-shell')
var liveReload = require('gulp-livereload');
var nodemon = require('gulp-nodemon');

gulp.task('build:server', ['copy:client'], function () {
    var tsProject = ts.createProject(path.resolve('server/tsconfig.json'));
    var tsResult = gulp.src([
        'server/**/*.ts',
        '!server/typings/browser/**/*.ts',
        '!server/typings/browser.d.ts'
    ])
        .pipe(sourcemaps.init())
        .pipe(ts(tsProject))
    return tsResult.js
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(path.resolve('./server')))
});

gulp.task('watch-server', ['server:run'], function () {
    gulp.watch('server/**/*.ts', ['build:server']);
});

gulp.task('build:client', ['copy:common'], function () {
    return gulp.src('')
    .pipe(
        //shell(['ng build -w --output-path ../server/client'],{cwd:'client'}) // no needed anymore, this taks will be maked by gulp
        shell(['ng build'],{cwd:'client'})
    )
});

gulp.task('copy:client', ['build:client'], function (){
    gulp.src(['client/dist/**/*']).pipe(gulp.dest('server/client/'));
});

gulp.task('watch-client', ['server:run'], function () {
    gulp.watch('client/src/**/*', ['copy:client']);
});

gulp.task('copy:common', function () {
    gulp.src('common/**/*.ts')        
    .pipe(gulp.dest('server/common'))
    
    gulp.src('common/**/*.ts')        
    .pipe(gulp.dest('client/src/common'))
});

gulp.task('watch-common', ['server:run'], function () {
    gulp.watch('common/**/*.ts', ['copy:common']);
});

gulp.task('build', ['copy:common', 'build:client', 'copy:client', 'build:server', 'server:run', 'watch-common','watch-server', 'watch-client']);

////// end of build

gulp.task('server:run', ['build:server'], function () {
    
    liveReload.listen();
    // configure nodemon
	nodemon({
		// the script to run the app
		script: 'server/app.js',
		ext: 'js'
	}).on('restart', function(){
		// when the app has restarted, run livereload.
		gulp.src('server/app.js')
			.pipe(liveReload());
	});
});

////// end of server

gulp.task('default', ['build']);
gulp.task('serve', ['server:run']);