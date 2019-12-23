let a = prompt('Please enter lenght of A side'),
    b = prompt('Please enter lenght of B side'),
    c = prompt('Please enter lenght of C side');

if (isNaN(a) === false && isNaN(b) === false && isNaN(c) === false) {
    a = parseInt(a);
    b = parseInt(b);
    c = parseInt(c);
    if (a <= 0 || b <= 0 || c <= 0) {
        alert('A triangle must have 3 sides with a positive definite length')
    } else {
        if (a + b > c && b + c > c && c + a > b) {
            if (a === b && a === c && b === c) {
                console.log('Equilateral triangle')
            } else if (a === b && a !== c && b !== c || a === c && a !== b && c !== b || c === b && c !== a && b !== a){
                console.log('Isosceles triangle')
            } else {
                console.log('Scalene triangle')
            }
        } else {
            alert('Triangle doesn’t exist');
        }
    }
} else {
    alert('input values should be ONLY numbers')
}