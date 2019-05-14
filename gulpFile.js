'use strict';

const gulp = require('gulp'),
browserSync = require('browser-sync');

const server = browserSync.create();

const paths = {
	style: {
		src: './*.css',
	},
	script: {
		src: './js/*.js',
	},
	html: {
		src: './*.html'
	}
};

function reload(done) {
  server.reload();
  done();
}

function serve(done) {
  server.init({
    server: {
      baseDir: './'
    }
  });
  done();
}

function watchFile() {
	gulp.watch(paths.style.src, gulp.series(reload));
	gulp.watch(paths.script.src, gulp.series(reload));
	gulp.watch(paths.html.src, gulp.series(reload));
}

gulp.task('default', gulp.series(serve, watchFile));
