// url https://www.codewars.com/kata/list-filtering/javascript
// solution

function filter_list(l) {
  // Return a new array with the strings filtered out
  return l.filter(v => typeof v === 'number')
}
