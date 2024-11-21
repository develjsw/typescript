type RequiredUser2 = {
    name: string;
    age?: number;
    alive?: boolean;
}

const user10: Required<RequiredUser2> = {
    name: '홍길동',
    age: 32,
    alive: false
}

type RequiredUser3 = Required<RequiredUser2>

const user11: RequiredUser3 = {
    name: '홍길동',
    age: 32,
    alive: true
}
