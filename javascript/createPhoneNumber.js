// https://www.codewars.com/kata/525f50e3b73515a6db000b83/train/javascript
// function createPhoneNumber(numbers) {
//     return `(${numbers.slice(0, 3).join('')}) ${numbers
//         .slice(3, 6)
//         .join('')}-${numbers.slice(-4).join('')}`;
// }

function createPhoneNumber(numbers) {
    let format = '(xxx) xxx-xxxx';
    for (let i = 0; i < numbers.length; i++) {
        format = format.replace('x', numbers[i]);
    }
    return format;
}
