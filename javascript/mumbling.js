// url: https://www.codewars.com/kata/mumbling/train/javascript/
// solution
function accum(s) {
    return s.split('').map((c,i) => {
        return c.toUpperCase() + Array(i).fill(0).map(() => c.toLowerCase()).join('')
    }).join('-')
}
