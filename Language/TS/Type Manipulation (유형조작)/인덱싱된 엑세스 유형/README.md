### 인덱싱된 엑세스 유형
- 객체 타입의 속성 타입을 동적으로 참조하는 기능 
- 객체 타입의 속성 타입을 추출하거나 재사용 가능
    ~~~
    type PropertyType = 객체타입[객체 키 타입];
  
    ex)
    type Person = { age: number, name: string, alive: boolean };
  
    type Age = Person["age"];       // number
    type Name = Person["name"];     // string
    type Alive = Person["alive"];   // boolean
    ~~~