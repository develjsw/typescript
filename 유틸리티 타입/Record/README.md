### Record 타입

- 객체의 키와 타입을 정의하는 데 사용됨
- 객체의 모든 속성에 대해 특정 키 타입과 해당 키의 값 타입을 명확하게 지정할 수 있음

    ~~~
    Record<Keys, Type>
    
    EX-1)
    export type HttpStatusType = Record<string, number>;
    
    const serverError: HttpStatusType = { InternalServerError: 500 };
    const clientError: HttpStatusType = { BadRequest: 400 };
    
    
    EX-2-1)
    export type StatusMessage = Record<'pending' | 'success' | 'error', string>;
    
    // Success
    const messages: StatusMessage = {
        success: '데이터 생성 성공',
        pending: '진행중',
        error: '데이터 생성 실패'
    };
    
    
    EX-2-2)
    export type StatusMessage = Record<'pending' | 'success' | 'error', string>;
    
    // Error : Record에 정의한 pending, success, error가 모두 존재해야 함
    const messages: StatusMessage = {
        success: '데이터 생성 성공'
    };
    
    
    EX-3)
    export type ObjectAllType<T> = Record<string, T>;
    
    const member: ObjectAllType<string | number | boolean> = {
        name: '이름',
        age: 30,
        isAlive: true
    };
    
    
    EX-4)
    export type DtoType<K extends keyof any, T> = Record<K, T>;
    
    const orderDto: DtoType<'orderSeq' | 'goodsName' | 'createAt', number | string | Date> = {
        orderSeq: 1,
        goodsName: '상품명',
        createAt: new Date()
    };
    ~~~