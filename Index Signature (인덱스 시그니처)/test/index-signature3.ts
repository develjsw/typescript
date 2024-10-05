interface NewCar {
    [key: string]: string | number // Index Signature (인덱스 시그니처) : key는 문자열만 허용, 값은 문자열, 숫자 허용
}

const myNewCar: NewCar = {
    type: 'avante',
    price: 32000000,
    "color": 'gray'
}

const hyundai: string = 'type';
console.log(myNewCar[hyundai]); // myNewCar객체에 동적 속성 접근
