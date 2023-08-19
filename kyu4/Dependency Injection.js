var DI = function (dependency) {
    this.dependency = dependency;
};

DI.prototype.inject = function (func) {
    let _re = /^function\(([a-z0-9\-_,]+)\)/i;
    let match_args = _re.exec(func.toString().replace(/\s/g, ''));
    let dep_names = []
    if (match_args) {
        dep_names = match_args[1].split(',').map(d => this.dependency[d]);
    }
    return function () {
        return func.apply({}, dep_names);
    };
}