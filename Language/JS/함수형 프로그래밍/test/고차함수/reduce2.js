const arr = [1, 2, 3, 4, 5];

const average = (sum, val, idx, arr) => {
    sum += val;

    return idx === arr.length - 1
        ? sum / arr.length
        : sum;
}

console.log(
    arr.reduce(average)
); // 3