interface CarInterface<T> { // 제네릭 인터페이스
    name: string,
    price: number,
    option: T // 제네릭 타입
}

const car1: CarInterface<string> = {
    name: 'Avante',
    price: 2500,
    option: '휠 추가'
}

const car2: CarInterface<{ sunRoofExists: boolean, carSeatColor: string }> = { // 제네릭 자체에 리터럴 객체 타입도 할당 가능
    name: 'Benz',
    price: 5300,
    option: { sunRoofExists: false, carSeatColor: 'brown' } // 제네릭 타입으로 option 속성이 유연하게 타입 할당됨
}
