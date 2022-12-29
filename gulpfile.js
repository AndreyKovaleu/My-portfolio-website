const {src, dest, watch, parallel, series} = require('gulp');

const sass         = require('gulp-sass')(require('sass')),
      concat       = require('gulp-concat'),
      browserSync  = require('browser-sync').create(),
      uglify       = require('gulp-uglify-es').default,
      autoprefixer = require('gulp-autoprefixer'),
      imagemin     = require('gulp-imagemin'),
      del          = require('del'),
      htmlmin      = require('gulp-htmlmin');

function browsersync() {
  browserSync.init({
    server: {
      baseDir: "src/"
    }
  });
}

function cleanDist() {
  return del('dist');
}

function images() {
  return src('src/img/**/*')
    .pipe(imagemin([
      imagemin.gifsicle({interlaced: true}),
      imagemin.mozjpeg({quality: 75, progressive: true}),
      imagemin.optipng({optimizationLevel: 5}),
      imagemin.svgo({
        plugins: [
          {removeViewBox: true},
          {cleanupIDs: false}
        ]
      })
    ]))
    .pipe(dest('dist/img'));
}

function html() {
  return src('src/*.html')
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(dest('dist'));
}

function scripts() {
  return src([
    'node_modules/jquery/dist/jquery.js',
    'src/js/script.js'
  ])
    .pipe(concat('script.min.js'))
    .pipe(uglify())
    .pipe(dest('src/js'))
    .pipe(browserSync.stream());
}

function styles() {
  return src('src/sass/**/*.+(scss|sass)')
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(concat('style.min.css'))
    .pipe(autoprefixer({grid: true}))
    .pipe(dest('src/css'))
    .pipe(browserSync.stream());
}

function build() {
  return src([
    'src/css/style.min.css',
    'src/fonts/**/*',
    'src/js/script.min.js'
  ], {base: 'src'})
    .pipe(dest('dist'));
}

function watching() {
  watch(['src/sass/**/*.+(scss|sass|css)'], styles);
  watch(['src/js/**/*.js', '!src/js/script.min.js'], scripts);
  watch(['src/*.html']).on('change', browserSync.reload);
}

exports.styles      = styles;
exports.watching    = watching;
exports.browsersync = browsersync;
exports.scripts     = scripts;
exports.cleanDist   = cleanDist;
exports.images      = images;
exports.html        = html;
exports.build       = build;

exports.collect = series(cleanDist, images, html, build);
exports.default = parallel(watching, browsersync, styles, scripts);