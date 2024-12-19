type TFilterObjects1<T, K> = T extends { [P in keyof T]: K } ? T : never
/*
    1. 조건부 타입: T extends { [P in keyof T]: K }
    여기서 extends는 T가 특정 조건에 부합하는지 확인하는 조건부 타입의 핵심 요소임
    T는 객체이고, 그 모든 필드의 값이 K 타입(number 등)인지를 확인함

    2. 매핑된 타입: { [P in keyof T]: K }
    keyof T는 T 객체의 모든 키(id, name, age 등)를 가져옴
    [P in keyof T]: K는 T 객체의 각 필드가 타입 K(여기서는 number)인지 반복적으로 확인함

    3. ? T : never
    조건이 참이면 T를 반환함
    조건이 거짓이면 never을 반환함. 즉, 조건에 부합하지 않는 객체는 never 타입으로 처리됨
*/

type TMember = {
    id: number;
    name: string;
    age: number;
};

type TGoods = {
    price: number
    count: number
}

type TExtractNumbers<T> = TFilterObjects1<T, number>;

type TRes1 = TExtractNumbers<TMember>; // never
type TRes2 = TExtractNumbers<TGoods>; // TGoods
