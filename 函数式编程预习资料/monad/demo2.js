var _ = require('lodash');

function square(n) {
    return n * n;
}

function add(a, b) {
    return a + b;
}
var addSquare = _.flowRight(square, add);
console.log(addSquare(3, 2));