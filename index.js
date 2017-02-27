var through = require('through2')

module.exports = function (b, opts) {
    const regex = new RegExp(opts.p, 'i');
    b.on('reset', addHooks);
    addHooks();

    function addHooks(){
        b.pipeline.get('deps').push(
            through.obj(function (row, enc, next) {
                if (regex.test(row.file)) {
                    row.source = ''
                }
                this.push(row);
                next();
            })
        );
    }
    return b;
};