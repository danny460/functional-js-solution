/**
 * Exercise 11. Implement Map with Reduce
 */
module.exports = function arrayMap(arr, fn) {
    return Array.prototype.reduce.call(arr, (prev, curr, index, _arr) => prev.concat([fn(curr, index, _arr)]), []);
};

