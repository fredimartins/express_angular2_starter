var gulp = require('gulp');
var ts = require('gulp-typescript');
var path = require('path');
var sourcemaps = require('gulp-sourcemaps');
var shell = require('gulp-shell')
var runSequence = require('run-sequence');
var liveReload = require('gulp-livereload');
var nodemon = require('gulp-nodemon');
var notify = require('gulp-notify');

gulp.task('build:server', function () {
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

gulp.task('watch-server', ['build:server'], function () {
    gulp.watch('server/**/*.ts', ['build:server']);
});

gulp.task('build:client:watch', function () {
    return gulp.src('')
    .pipe(
        //shell(['ng build -w --output-path ../server/client'],{cwd:'client'})
        shell(['ng build'],{cwd:'client'})
    )
});

gulp.task('copy:client', function (){
    gulp.src(['client/dist/*']).pipe(gulp.dest('server/client'));
});

gulp.task('watch-client', function () {
    gulp.watch('client/dist/*', ['copy:client']);
});

gulp.task('copy:common', function () {
    gulp.src('common/**/*.ts')        
    .pipe(gulp.dest('server/common'))
    
    gulp.src('common/**/*.ts')        
    .pipe(gulp.dest('client/src/common'))
});

gulp.task('watch-common', function () {
    gulp.watch('common/**/*.ts', ['copy:common']);
});

gulp.task('build', function (callback) {   
    runSequence('copy:common','build:server','watch-common','watch-server','build:client:watch','copy:client','server:run', callback);
    //runSequence('server:run', callback);
});

////// end of build

gulp.task('server:run', function () {
    process.chdir('server');
    liveReload.listen();
    // configure nodemon
	nodemon({
		// the script to run the app
		script: 'app.js',
		ext: 'js'
	}).on('restart', function(){
		// when the app has restarted, run livereload.
		gulp.src('app.js')
			.pipe(liveReload())
			.pipe(notify('Reloading page, please wait...'));
	})
});

////// end of server

gulp.task('default', ['build']);