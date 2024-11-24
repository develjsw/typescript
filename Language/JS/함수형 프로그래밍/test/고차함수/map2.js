const arr = [15, 30, 100];

console.log(
    arr.map((val) => {
        return val.toFixed(2);
    })
); // ['15.00', '30.00', '100.00']
