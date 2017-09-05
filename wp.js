'use strict';

let gulp            = require('gulp');
let run             = require('run-sequence');
let sourcemaps      = require('gulp-sourcemaps');
let babel           = require('gulp-babel');
let sass            = require('gulp-sass');
let imagemin        = require('gulp-imagemin');
let concat          = require('gulp-concat');
let uglify          = require('gulp-uglify');
let autoprefixer    = require('gulp-autoprefixer');
let browserSync     = require('browser-sync').create();
let del             = require('del');

let rootPathName = process.cwd().split('/');

let distPath = `dist/wp-content/themes/${ rootPathName[ rootPathName.length - 1 ] }/assets`;


let paths = {
    views: 'app/**/*.html',
    styles: 'app/sass/**/*.scss',
    vendorStyles: 'app/css/*.css',
    scripts: [
        {
            dist: 'index.min.js',
            contains: [
                'app/js/jquery.index.js'
            ]
        },
        {
            dist: 'ui.min.js',
            contains: [
                'app/js/jquery.popup.js',
                'app/js/jquery.websters-select.js'
            ]
        },
        {
            dist: 'tabs.min.js',
            contains: [
                'app/js/jquery.tabs.js'
            ]
        }
    ],
    vendorScripts: 'app/js/vendors/**/*.js',
    watchScripts: 'app/js/**/*.js',
    images: 'app/img/**/*',
    pictures: 'app/pic/**/*',
    php: 'app/php/**/*',
    fonts: 'app/fonts/**/*'
};

gulp.task('clean', function (cb) {
    return del(distPath, cb);
});

gulp.task('views', function () {
    return gulp.src(paths.views, {
            base: 'app'
        })
        .pipe(gulp.dest(distPath));
});

gulp.task('vendorScripts', function () {
    return gulp.src(paths.vendorScripts, {
        base: 'app/js/vendors'
    }).pipe(gulp.dest( `${ distPath }/js/vendors` ));
});

gulp.task('vendorStyles', function () {
    return gulp.src(paths.vendorStyles, {
        base: 'app/css'
    }).pipe(gulp.dest(`${ distPath }/css`));
});

gulp.task('fonts', function () {
    return gulp.src(paths.fonts, {
        base: 'app/fonts'
    }).pipe(gulp.dest(`${ distPath }/fonts`));
});

gulp.task('php', function () {
    return gulp.src(paths.fonts, {
        base: 'app/php'
    }).pipe(gulp.dest(`${ distPath }/php`));
});

gulp.task('styles', function () {
    return gulp.src(paths.styles)
        .pipe(sourcemaps.init())
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(autoprefixer({ browsers: ['last 2 versions'] }))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(`${ distPath }/css`))
        .pipe(browserSync.stream());
});

gulp.task( 'scripts', function () {
    for ( var i = 0; i < paths.scripts.length; i++ ){
        gulp.src( paths.scripts[ i ].contains )
            .pipe(sourcemaps.init())
            .pipe(babel({presets: ['es2015']}))
            .pipe(uglify())
            .pipe(concat(paths.scripts[ i ].dist))
            .pipe(sourcemaps.write())
            .pipe(gulp.dest(`${ distPath }/js/`));
    }
});

gulp.task('images', function() {
    return gulp.src(paths.images)
        .pipe(imagemin({optimizationLevel: 5}))
        .pipe(gulp.dest(`${ distPath }/img`));
});

gulp.task('pictures', function() {
    return gulp.src(paths.pictures)
        .pipe(imagemin({optimizationLevel: 5}))
        .pipe(gulp.dest(`${ distPath }/pic`));
});


function serve() {
    return run('styles', 'scripts', 'vendorScripts', 'vendorStyles', 'php', 'fonts',  'images', 'pictures', 'views');
}

gulp.task('default', ['clean'], serve());