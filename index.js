var fs = require('fs');
var shell = require('gulp-shell');


module.exports = function(gulp) {

    gulp.task('graphGenerate', function () {

        var dot = 'digraph g {\n';

        var tree = require('gulp/lib/taskTree')(this.tasks);

        var nodes = tree.nodes.filter(function(node){
            return node.label !== 'graph' && node.label !== 'graphGenerate';
        });

        nodes.forEach(function (node) {
            dot += '"' + node.label + '";\n';
        });

        dot += '\n';

        nodes.forEach(function (node) {
            node.nodes.forEach(function (dep) {
                dot += '"' + dep + '" -> "' + node.label + '";\n';
            });
        });

        dot += '}\n';

        fs.writeFileSync('gulp.dot', dot);
    });

    gulp.task('graph', ['graphGenerate'], shell.task([
        'dot -Tpng gulp.dot >gulp.png'
    ]));

};
