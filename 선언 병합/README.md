### 선언 병합
- 동일한 이름을 가진 여러개의 선언이 결합되어 하나의 선언을 구성하는 기능
- 타입, 인터페이스, 함수, 클래스 등 여러가지 타입의 선언을 하나로 병합 가능
- 선언 병합은 주로 인터페이스와 네임스페이스에 사용됨

1. 인터페이스 병합
   - 인터페이스의 멤버는 고유해야 함
   - 고유하지 않은 경우 동일한 유형이여야 함
   - 인터페이스가 모두 이름은 같지만 유형이 다른 비함수 멤버를 선언하면 컴파일러에서 오류가 발생함
   - 오버로딩은 가장 마지막에 선언된 부분이 우선순위가 높음
   ~~~
   interface User {
      name: string;
   }
    
   interface User {
      age: number;
   }
    
   // 병합된 User 인터페이스는 아래와 같음
   interface User {
      name: string;
      age: number;
   }
    
   const user: User = {
      name: "Alice",
      age: 30
   };
   ~~~
2. 네임스페이스 병합
    ~~~
    namespace Shapes {
        export class Circle {
            radius: number;
            constructor(radius: number) {
                this.radius = radius;
            }
        }
    }
    
    namespace Shapes {
        export class Square {
            sideLength: number;
            constructor(sideLength: number) {
                this.sideLength = sideLength;
            }
        }
    }
    
    // 병합된 Shapes 네임스페이스는 아래와 같음
    namespace Shapes {
        export class Circle {
            radius: number;
            constructor(radius: number) {
                this.radius = radius;
            }
        }
    
        export class Square {
            sideLength: number;
            constructor(sideLength: number) {
                this.sideLength = sideLength;
            }
        }
    }
    
    const circle = new Shapes.Circle(5);
    const square = new Shapes.Square(10);
    ~~~ 