/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
'use strict';

var gulp = require('gulp-help')(require('gulp'));

gulp.task('copy-theme-styles', 'Copy theme styles', function () {
  return gulp
    .src('./src/framework/theme/src/**/*.scss')
    .pipe(gulp.dest('./src/framework/theme/lib/src'))
});

gulp.task('copy-theme-templates', 'Copy theme templates', function () {
  return gulp
    .src('./src/framework/theme/src/**/*.html')
    .pipe(gulp.dest('./src/framework/theme/lib/src'))
});
