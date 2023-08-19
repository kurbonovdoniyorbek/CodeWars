const zero = (fu) => fu === undefined ? 0 : fu(0);
const one = (fu) => fu === undefined ? 1 : fu(1);
const two = (fu) => fu === undefined ? 2 : fu(2);
const three = (fu) => fu === undefined ? 3 : fu(3);
const four = (fu) => fu === undefined ? 4 : fu(4);
const five = (fu) => fu === undefined ? 5 : fu(5);
const six = (fu) => fu === undefined ? 6 : fu(6);
const seven = (fu) => fu === undefined ? 7 : fu(7);
const eight = (fu) => fu === undefined ? 8 : fu(8);
const nine = (fu) => fu === undefined ? 9 : fu(9);

function plus(a) {
    return function (b) {
        return b + a;
    };
}
function minus(a) {
    return function (b) {
        return b - a;
    };
}
function times(a) {
    return function (b) {
        return b * a;
    };
}
function dividedBy(a) {
    return function (b) {
        return Math.floor(b / a);
    };
}