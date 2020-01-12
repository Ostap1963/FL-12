//Task 1
function convert() {
    let arr = [];
    for (let i = 0; i < arguments.length; i++) {
        if (typeof arguments[i] === 'number') {
            arr.push('' + arguments[i]);
        } else if (typeof arguments[i] === 'string') {
            arr.push(parseInt(arguments[i]))
        }
    }
    return arr;
}
console.log(convert('1', 2, 3, '4'));

//Task 2
function executeforEach(arr, func) {
    for (let i = 0; i < arr.length; i++) {
        arr[i] = func(arr[i])
    }
}
executeforEach([1, 2, 3], function (el) {
    console.log(el * 2);
});

//Task 3
function mapArray(arr, func) {
    let Arr = [];
    for (let i = 0; i < arr.length; i++) {
        Arr.push(func(parseInt(arr[i])))
    }
    return Arr;
}
console.log(mapArray([2, '5', 8], function (el) {
    return el + 3
}))

//Task 4
function filterArray(arr, func) {
    let Arr = [];
    for (let i = 0; i < arr.length; i++) {
        if (func(arr[i])) {
            Arr.push(arr[i])
        }
    }
    return Arr
}
console.log(filterArray([2, 5, 8], function (el) {
    return el % 2 === 0
}))

//Task 5
function flipOver(str) {
    let newString = '';
    for (let i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
}
console.log(flipOver('hey world'));

//Task 6

function makeListFromRange(arg) {
    let finalArr = [];
    let a = arg[0];
    let b = arg[1];
    for (let i = a; i <= b; i++) {
        finalArr.push(i)
    }
    return finalArr;
}
console.log(makeListFromRange([3, 6]))

//Task 7
const actors = [
    { name: 'tommy', age: 36 },
    { name: 'lee', age: 28 }
];
function getArrayOfKeys() {
    let arr = [];
    executeforEach(actors, function (el) {
        arr.push(el.name)
    })
    return arr
}
console.log(getArrayOfKeys(actors, 'name'))

//Task 8
function substitute(arr) {
    return mapArray(arr, function (el) {
        if (el < 30) {
            el = '*';
            return el;
        } else {
            return el;
        }
    });
}
console.log(substitute([58, 14, 48, 2, 31, 29]));

//Task 9
const date = new Date(2019, 0, 2);
function getPastDay(date, day) {
    const indx = ['Jan', 'Feb', 'Mar',
        'Apr', 'May', 'Jun',
        'Jul', 'Aug', 'Sep',
        'Oct', 'Nov', 'Dec'];
    
    let oldDay = date.getDate() - day;
    let oldDate = new Date(date.getFullYear(), date.getMonth(), oldDay);
    return `${oldDate.getDate()}, (${oldDate.getDate()} ${indx[oldDate.getMonth()]} ${oldDate.getFullYear()})`
}
console.log(getPastDay(date, 2)); 

//Task 10 
function formatDate (date){
    const minutes = date.getMinutes()<10 ? '0' + date.getMinutes() : date.getMinutes();
    const hours = date.getHours()<10 ? '0' + date.getHours() : date.getHours();
    return `"${date.getFullYear()}/${date.getMonth()+1}/${date.getDate()} ${hours}:${minutes}"`
}
console.log(formatDate(new Date('6/15/2018 09:15:00')))
console.log(formatDate(new Date()))