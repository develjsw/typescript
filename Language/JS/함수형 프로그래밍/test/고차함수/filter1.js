const nums = [1, 2, 3, 4, 5, 6, 7];

const evenFilter = item => { // 매개변수가 1개인 경우에는 '()'생략 가능, 매개변수가 없거나 2개 이상인 경우에는 '()'포함 필수
    return item % 2 === 0;
};

console.log(
    nums.filter(evenFilter)
); // [2, 4, 6]