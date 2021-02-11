'use strict';

// Nastavení
var settings = {
  browsersync: {
    url: 'http://lm-gulp.test/',
    watch: ['*.html', '*.htm', '*.php']
  },
  css: {
    source: 'css/styles.scss',
    target: 'css/',
    filename: 'styles-final.css',
    watch: ['css/**/*.scss', 'css/**/*.css', '!css/styles.css'],
    components: 'css/components/**/*.scss'
  }
};

// Gulp
var gulp = require('gulp');

// BrowserSync - live realod, server, ovládání prohlížeče
var browsersync = require('browser-sync').create();

// DART SASS 
var sass = require('gulp-dart-sass');

// Generate Source Maps
var sourcemaps = require('gulp-sourcemaps');

// PostCSS (minifikace, autoprefixer)
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');

// postCSS pluginy a nastavení
var postcssPlugins = [
  autoprefixer( { browsers: [ 'last 10 versions', 'ie >= 10', 'ios >= 7', 'android >= 4.4' ] })
];

// výpis chybových hlášek
var onError = function (err) {
  console.log(err);
  this.emit('end');
};

// nastavení BrowserSync
gulp.task('browser-sync', function() {
  browsersync({
    proxy: settings.browsersync.url
  });
});

// BrowserSync live-reload
gulp.task('browsersync-reload', function () {
    browsersync.reload();
});

// SASS kompilace
gulp.task('makecss', function () {
  return gulp.src( settings.css.source )
    .pipe(sourcemaps.init())
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(postcss(postcssPlugins))
    .pipe(sourcemaps.write('./maps'))
    .pipe(gulp.dest('./css'));

});

// sledování změn souborů
gulp.task('watch', function(){

  gulp.watch( settings.css.watch , gulp.series(['makecss'])); 
  
})

// default tasks
gulp.task('default', gulp.series(['watch']) );