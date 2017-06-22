/**
 * Exercise 13. Blocking Event Loop
 */
module.exports = function repeat(operation, num) {
    if (num <= 0) return;
    operation();
    if (num % 2 === 0) {
        setTimeout(function() {
            repeat(operation, --num);
        });
    } else {
        repeat(operation, --num);
    }
};