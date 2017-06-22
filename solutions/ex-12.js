/**
 * Exercise 12. Function Spies
 */
module.exports = function Spy(target, method) {
    const fn = target[method];
    const obj = { count: 0 };
    target[method] = function () {
        obj.count++;
        fn.apply(this, arguments);
    };
    return obj;    
};
