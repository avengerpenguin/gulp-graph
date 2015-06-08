# Gulp Graph

Creates gulp tasks that use Graphviz to generate a dependency graph. It's hardcoded to drop a `gulp.png` and a
`gulp.dot` locally when you run it, but it could be made more configurable and flexible later.

## Installing

npm install --save-dev gulp-graph

## Using

In your `gulpfile.js`:

    var gulp = require('gulp');
    require('gulp-graph')(gulp);

Then run:

    gulp graph

Which will generate both a `gulp.png` and a `gulp.dot` locally.

## Running Tests

There are some token mocha tests run when you do:

    npm test

## Contributing

Feel free to make pull requests.
