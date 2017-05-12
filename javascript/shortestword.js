// url:  https://www.codewars.com/kata/57cebe1dc6fdc20c57000ac9/train/javascript
// solution

function findShort(s) {
    return Math.min.apply(Math, s.split(/\s+/).map(c => c.length))
}