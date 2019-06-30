// url https://www.codewars.com/kata/take-a-ten-minute-walk/train/javascript
function isValidWalk(walk) {
    // n s w e
    //insert brilliant code here
    let counter = {
        n: 0,
        s: 0,
        w: 0,
        e: 0,
    };
    if (walk.length !== 10) return false;

    walk.forEach((dir) => {
        counter[dir]++;
    });
    return counter.n === counter.s && counter.w === counter.e;
}
//url https://www.codewars.com/kata/gauss-needs-help-sums-of-a-lot-of-numbers/train/javascript
function f(n) {
    return Number.isInteger(n) && n > 0 ? (n * (n + 1)) / 2 : false;
}
