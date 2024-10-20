interface RequiredUser {
    name: string;
    age?: number;
    alive?: boolean;
}

const user01: RequiredUser = {
    name: '홍길동'
}

// RequiredUser의 타입들을 모두 필수 타입으로 변경
const user02: Required<RequiredUser> = {
    name: '홍길동',
    age: 32,
    alive: false
}
