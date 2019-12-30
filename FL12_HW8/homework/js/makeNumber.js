function makeNumber(string) {
    let finalString = '';
    for (let i = 0; i < string.length; i++) {
        if (isNaN(parseInt(string[i])) === false) {
            finalString += string[i];
        }
    }
    return finalString;
}

makeNumber('erer384jjjfd123');
makeNumber('ijifjgdj');