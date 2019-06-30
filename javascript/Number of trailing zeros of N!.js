// function zeros(n) {
//     // your code here
//     let i = 0;
//     let counter = 0;
//     for (i = 1; i <= n; i++) {
//         let j = i;
//         while (j % 5 === 0) {
//             counter++;
//             j /= 5;
//         }
//     }

//     return counter;
// }
// http://mathworld.wolfram.com/Factorial.html
function zeros(n) {
    // your code here
    let counter = 0;
    let k = Math.floor(Math.log(n) / Math.log(5));
    for (i = 1; i <= k; i++) {
        counter += Math.floor(n / Math.pow(5, i));
    }
    return counter;
}
