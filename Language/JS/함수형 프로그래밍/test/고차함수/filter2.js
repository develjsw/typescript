const values = [1, "", 2, undefined, 3, 4];

console.log(
    values.filter(item => Boolean(item))
); // [1, 2, 3, 4]