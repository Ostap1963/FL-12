function countNumbers(string) {
    let finalString = '';
    for (let i = 0; i < string.length; i++) {
        if (isNaN(parseInt(string[i])) === false) {
            finalString += string[i];
        }
    }
    let countedArr = {};
    for (let j = 0; j < finalString.length; j++) {
        if (!countedArr[finalString[j]]) {
            countedArr[finalString[j]] = 1;
        } else {
            countedArr[finalString[j]]++;
        }
    }
    return countedArr;
}
countNumbers('jdjjka000466588kkkfs662555');