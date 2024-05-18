// This is how to import within a gulpfile
var gulp = require("gulp");
require("./index.js")(gulp);

// Test dependencies
var fs = require("fs");
var chai = require("chai");
chai.use(require("chai-fs"));
var expect = chai.expect;

describe("gulp-graph", function () {
  before(function (done) {
    fs.unlink("gulp.dot", function () {
      fs.unlink("gulp.png", function () {
        done();
      });
    });
  });

  after(function (done) {
    fs.unlink("gulp.dot", function () {
      fs.unlink("gulp.png", function () {
        done();
      });
    });
  });

  it("creates a dot file", function (done) {
    gulp.start("graphGenerate", function () {
      expect("gulp.dot").to.be.a.file();
      done();
    });
  });

  it("creates a png file", function (done) {
    gulp.start("graph", function () {
      expect("gulp.png").to.be.a.file();
      done();
    });
  });
});
