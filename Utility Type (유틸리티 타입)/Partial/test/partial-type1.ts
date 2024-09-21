interface PartialUser {
    name: string;
    age?: number;
    alive?: boolean;
}

const user03: Partial<PartialUser> = {
    name: '홍길동'
}

// PartialUser의 타입을 전부 선택적 타입으로 변경하였기 때문에 name이 없어도 에러가 발생하지 않는다.
const user04: Partial<PartialUser> = {
    age: 32
}

const user05: Partial<PartialUser> = {
    alive: true
}

// PartialUser의 모든 타입이 선택적 타입으로 변경되었기에 값이 없더라도 에러가 발생하지 않는다.
const user06: Partial<PartialUser> = {

}