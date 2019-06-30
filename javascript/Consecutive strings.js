// url https://www.codewars.com/kata/consecutive-strings/javascript
function longestConsec(strarr, k) {
    // your code
    let length = strarr.length;
    let maxStr = '';

    if (length === 0 || k > length || k <= 0) return maxStr;
    for (let i = 0; i <= length - k; i++) {
        let str = strarr.slice(i, i + k).join('');
        maxStr = maxStr.length >= str.length ? maxStr : str;
    }
    return maxStr;
}
