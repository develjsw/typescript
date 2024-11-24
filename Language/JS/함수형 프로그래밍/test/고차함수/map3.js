const range = (start, end) =>
    new Array(end + 1 - start).fill(0).map((val, idx) => start + idx);

console.log(
    range(5, 10)
); // [5, 6, 7, 8, 9, 10]

const charCodeToString = code => String.fromCharCode(code);

const AtoZ = range("A".charCodeAt(), "Z".charCodeAt()).map(charCodeToString);

console.log(
    AtoZ
); // ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']