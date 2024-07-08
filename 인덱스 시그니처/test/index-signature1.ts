interface FruitBox {
    [key: string]: number; // 인덱스 시그니처 : key는 문자열만 허용, 값은 숫자만 허용
}

const myFruit: FruitBox = {
    apple: 10,
    banana: 20,
    orange: 30,
    //watermelon: "40개" // TS2322 Error 발생 - 값은 숫자만 허용되나 문자열을 넣었으므로 오류 발생
    "peach": 50, // key는 문자열이라고 하였으므로 "문자열" 형식도 허용
}

console.log(myFruit);
console.log(myFruit.apple);
console.log(myFruit['banana']);
