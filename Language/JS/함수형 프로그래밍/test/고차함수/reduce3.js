const numbers = [50, 10, 20, 80, 40];

const max = (num1, num2) => num1 > num2 ? num1 : num2;

console.log(
    numbers.reduce(max)
); // 80
