### Pick 타입
- 특정 타입에서 일부 속성만 선택하여 새로운 타입을 만들 때 사용

    ~~~
    interface User {
        id: number;
        name: string;
        email: string;
        age: number;
    }
  
    type UserPiece = Pick<User, 'id', 'name'>;
    // type UserPiece = { id: number; name: string };
    ~~~