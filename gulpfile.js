var gulp            = require('gulp'),
    browserSync     = require('browser-sync').create(),
    sass            = require('gulp-sass'),
    sourcemaps      = require('gulp-sourcemaps'),
    minifyJS        = require('gulp-jsmin'),
    minifyCSS       = require('gulp-minify-css'),
    concat          = require('gulp-concat'),
    imagemin        = require('gulp-imagemin'),
    pngquant        = require('imagemin-pngquant')
    autoprefixer    = require('gulp-autoprefixer'),
    rename          = require('gulp-rename');


/* -------  Configuration ------- */

var paths = {

    html: 'dist/',
    styles: {
        sourceSCSS: 'src/my_components/',
        produceCSS: 'dist/css/'
    },
    js: {
        source: 'src/js/',
        produce: 'dist/js/'
    },
    images: {
        source: 'src/images/',
        produce: 'dist/img/'
    }

};

/* ------- Gulp Tasks ------- */

gulp.task('serve', function() {
    browserSync.init({
        server: "src"
    });
});

gulp.task('watch', function() {
    gulp.watch(paths.styles.sourceSCSS + '*.scss', ['sass']);
    gulp.watch(paths.js.source + '*.js', ['js']);
    gulp.watch(paths.images.source + '*', ['imgmin']);
    gulp.watch(paths.html + '*.html').on('change', browserSync.reload);
});

gulp.task('sass', function() {
    gulp.src(paths.styles.sourceSCSS + '*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({outputStyle: 'expanded'}))
        .pipe(autoprefixer({
            browsers: ['last 3 versions'],
            cascade: false
        }))
        .pipe(concat('all.css'))
        .pipe(minifyCSS({
            advanced: false
        }))
        .pipe(sourcemaps.write())
        .pipe(rename({
            suffix: ".min"
        }))
        .pipe(gulp.dest(paths.styles.produceCSS))
});

gulp.task('js', function() {
    gulp.src(paths.js.source + '*.js')
        .pipe(sourcemaps.init())
        .pipe(concat('all.js'))
        .pipe(minifyJS())
        .pipe(rename({
            suffix: ".min"
        }))
        .pipe(sourcemaps.write('/', {
            sourceMappingURL: function(file) {
              return file.relative + '.map';
            }
          }))
        .pipe(gulp.dest(paths.js.produce))
        .pipe(browserSync.reload({stream: true}));
});

gulp.task('imgmin', function () {
    return gulp.src([paths.images.source + '*.png', paths.images.source + '*.jpg'])
        .pipe(imagemin({
            svgoPlugins: [{removeViewBox: false}],
            use: [pngquant()]
        }))
        .pipe(gulp.dest(paths.images.produce))
});

// gulp.task('remove-comments', function () {
//     return gulp.src(paths.styles.css + '*.css')
//         .pipe(stripCssComments())
//         .pipe(gulp.dest(paths.styles.css));
// });
//
// /* ------- Main Gulp Tasks ------- */
//
// gulp.task('default', function() {
//     runSequence(['sprite-png', 'sprite-svg'], ['imgmin', 'sass'], 'serve', 'watch');
// });
// gulp.task('finish', ['remove-comments'], function(){
//     gulp.src('/')
//         .pipe(notify("Ready to commit"));
// })
