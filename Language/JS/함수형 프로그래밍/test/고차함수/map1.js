const arr = [1, 2, 3, 4, 5];

const increment = (num) => num + 1;

console.log(
    arr.map(increment)
); // 2,3,4,5,6

console.log(arr); // 원본 배열은 변화하지 않음