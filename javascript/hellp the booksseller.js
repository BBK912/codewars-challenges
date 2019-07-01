// url https://www.codewars.com/kata/54dc6f5a224c26032800005c
function stockList(listOfArt, listOfCat){
    let counterReg = /(\d+)$/;
    let result = [];
    if (listOfArt.length === 0 || listOfCat.length ===0) {
        return ''
    }
    listOfCat.forEach((cat) => {
        let sum = 0;
        listOfArt.forEach(art => {
            let catofArt = art[0];
            if (catofArt === cat) {
                let counter = art.match(counterReg);
                if (counter) {
                    sum += parseInt(counter[0]);
                }
            }
        });
        result.push(`(${cat} : ${sum})`);
    })
    return result.join(' - ');
  }
