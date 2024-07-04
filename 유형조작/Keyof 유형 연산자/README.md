### Keyof 연산자
- 객체 또는 인터페이스의 키 값을 유니온 타입으로 반환해주는 연산자
- 타입의 키 값들을 유니온 타입으로 반환
    ~~~
    EX)
    type HttpMethod = {
        Get: string,
        Post: string,
        Patch: string,
        Put: string,
        Delete: string
    }
  
    type Method = keyof HttpMethod
  
    // 위에 Method Type은 HttpMethod의 key값들인 Get, Post.. 의 type들을 모아둔 유니온 타입이 됨
    // type Method = "Get" | "Post" | "Patch" | "Put" | "Delete"
    ~~~