/**
 * Curry for Arbitary Function
 */
module.exports = function curryN(fn, n){
	n === undefined && (n = fn.length);
	return function(arg){
		return (n <= 1) ? fn(arg) : curryN(fn.bind(fn, arg), n-1);
	};
};

// var curry = curryN((a,b,c,d) => a + b + c + d);
// var curryA = curry(1);
// var curryB = curryA(2);
// var curryC = curryB(3);
// curryC(4);
// curry(1)(2)(3)(4);

