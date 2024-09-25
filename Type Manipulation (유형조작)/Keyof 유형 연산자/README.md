### Keyof 연산자
- 객체 형태의 타입(인터페이스 타입, 객체 리터럴 타입 등)의 키 값을 유니온 타입으로 반환해주는 연산자
- 타입의 키 값들을 유니온 타입으로 반환
    ~~~
    EX1)
    type HttpMethod1 = {
        Get: string,
        Post: string,
        Patch: string,
        Put: string,
        Delete: string
    }
  
    type Method1 = keyof HttpMethod1;
  
    // 위에 Method1 Type은 HttpMethod1의 key값들인 Get, Post.. 의 type들을 모아둔 유니온 타입이 됨
    // type Method1 = "Get" | "Post" | "Patch" | "Put" | "Delete"


    EX2)
    interface HttpMethod2 {
        GET: string;
        POST: string;
        DELETE: string;
        PATCH: string;
        PUT: string;
    }

    type Mthod2 = keyof HttpMethod2;


    EX3)
    type TMember1 = {
        name: '홍길동';
        age: '21';
        isAlive: true
    }

    type Member1 = keyof TMember1;


    EX4)
    const TMember2 = {
        name: '홍길동';
        age: '21';
        isAlive: true
    }

    type Member2 = keyof typeof TMember2; // keyof는 타입에 대해서만 동작(컴파일 타임에 존재하고 런타임에는 사라지는), 일반 객체의 경우는 런타임에서만 존재하는 데이터이지 타입은 아님. 따라서 typeof로 타입을 먼저 가져온 후 keyof를 통해 키를 가져와야 에러가 발생하지 않음.


    EX5) - 미사용
    const TMember3: object = {
        name: '홍길동';
        age: '21';
        isAlive: true
    }

    type Member3 = keyof typeof TMember3; // 에러는 발생하지 않지만 object는 어떤 객체라도 될 수 있기 때문에 TypeScript 컴파일러에 의해 무시됨. 따라서 정상 동작하지는 않음.
    ~~~
