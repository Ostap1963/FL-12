let a = prompt('Please enter number A'),
    b = prompt('Please enter number B'),
    c = prompt('Please enter number C');
let D,x1,x2;
let four = 4;
let two = 2;
if(isNaN(a)===false && isNaN(b)===false && isNaN(c)===false && a!==0){
    a=parseFloat(a);
    b=parseFloat(b);
    c=parseFloat(c);
D=Math.pow(b, two)-four*a*c;
if(D>0){
    x1=(-b+Math.sqrt(D))/two*a;
    x2=(-b-Math.sqrt(D))/two*a;
    console.log(`x1 = ${Math.round(x1)} and x2 = ${Math.round(x2)}`);
} else if (D===0){
x1=x2=(-b-Math.sqrt(D))/two*a;
console.log('x =',Math.round(x1));
} else {
    console.log('no solution')
}
}else{
    alert('Invalid input data');
}