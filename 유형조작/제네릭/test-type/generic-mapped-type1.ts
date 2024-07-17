interface User {
    name: string;
    age?: number;
    married?: boolean;
}

// Mapped Type : 기존 타입을 기반으로 새로운 타입을 만드는 TypeScript 기능
type Copy<T> = {
    [P in keyof T]: T[P];
};

const user1: Partial<User> = {};
const user2: Copy<User> = {
    name: 'sangwoo'
};
