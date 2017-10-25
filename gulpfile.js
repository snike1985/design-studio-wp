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

//let rootPathName = process.cwd().split('/');


let distPath = `dist/wp-content/themes/design-studio/assets`;


let paths = {
    views: 'app/**/*.html',
    styles: 'app/sass/**/*.scss',
    vendorStyles: 'app/css/*.css',
    scripts: [
        {
            dist: 'index.min.js',
            contains: [
                'app/js/jquery.index.js',
                'app/js/jquery.main.js'
            ]
        },
        {
            dist: 'ui.min.js',
            contains: [
                'app/js/jquery.popup.js',
                'app/js/jquery.websters-select.js',
                'app/js/jquery.main.js'
            ]
        },
        {
            dist: 'tabs.min.js',
            contains: [
                'app/js/jquery.tabs.js',
                'app/js/jquery.main.js'
            ]
        },
        {
            dist: 'bright-button.min.js',
            contains: [
                'app/js/bright-button.js',
                'app/js/jquery.main.js'
            ]
        },
        {
            dist: 'circle-button.min.js',
            contains: [
                'app/js/circle-button.js',
                'app/js/jquery.main.js'
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

gulp.task('serve', ['watch'], function() {
    browserSync.init({
        server: distPath,
        port: 3010
    });
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
            // .pipe(babel({presets: ['es2015']})) //for js6
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

gulp.task('watch', function() {
    gulp.watch(paths.watchScripts,   ['scripts', browserSync.reload]);
    gulp.watch(paths.images,         ['images',  browserSync.reload]);
    gulp.watch(paths.pictures,       ['pictures',  browserSync.reload]);
    gulp.watch(paths.fonts,          ['fonts']);
    gulp.watch(paths.styles,         ['styles', browserSync.reload]);
    gulp.watch(paths.vendorStyles,   [ 'vendorStyles' ]);
    gulp.watch(paths.views,          ['views',   browserSync.reload]);
});

function serve() {
    return run('styles', 'scripts', 'vendorScripts', 'vendorStyles', 'php', 'fonts',  'images', 'pictures', 'views', 'serve');
}

gulp.task('default', ['clean'], serve());