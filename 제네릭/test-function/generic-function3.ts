function genericF3<U>(variable: U): U {
    return variable;
}
console.log(genericF3('typescript'));
console.log(genericF3(1000));
console.log(genericF3(true));