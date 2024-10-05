interface People {
    [key: string]: string | number | boolean // Index Signature (인덱스 시그니처) : key는 문자열만 허용, 값은 문자열, 숫자, 불린 허용
}

const me: People = {
    name: 'sangwoo',
    "age": 26,
    alive: true
}

console.log(me['name']);
console.log(me.age);
console.log(me['alive']);