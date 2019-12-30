function addOne(x) {
    return x + 1;
}
function pipe(a, ...rest) {
    for (let i = 0; i < rest.length; i++) {
        a = rest[i](a);
    }
    return a;
}
pipe(1, addOne);