const gulp = require('gulp');
const dyson = require('dyson');

gulp.task('server', function() {
    dyson.bootstrap({
      configDir: __dirname + '/mockServices',
      port: 3002
    });
  });
