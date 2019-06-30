// url https://www.codewars.com/kata/pick-peaks/train/javascript
function pickPeaks(arr) {
    let pos = [];
    let peaks = [];
    let result = {
        pos: [],
        peaks: [],
    };
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > arr[i - 1]) {
            pos = [i];
            peaks = [arr[i]];
        } else if (arr[i] < arr[i - 1]) {
            result.pos.push.apply(result.pos, pos);
            result.peaks.push.apply(result.peaks, peaks);
            pos = [];
            peaks = [];
        }
    }
    return result;
    //  return {pos:[],peaks:[]}
}
pickPeaks([3, 2, 3, 6, 4, 1, 2, 3, 2, 1, 2, 3]);
