### 함수형 프로그래밍

- 프로그래밍 패러다임 중 하나로, 순수 함수 ( Pure Function ) 와 불변성 ( Immutability ) 을 기반으로, 상태 변화와 부작용 ( Side Effect ) 을 최소화하는 프로그래밍 방식
  - 주요 특징 :
    - 순수 함수 : 외부 상태에 영향을 주지 않고, 같은 입력에 대해 항상 같은 결과를 반환하는 함수
      ~~~
      // 순수 함수
      const add = (a, b) => a + b;
      
      // 비순수 함수 (외부 상태 변경)
      let count = 0;
      const increment = () => count++;
      ~~~
    - 불변성 : 원본 데이터는 바로 수정하지 않고 복사본을 만들어 사용
      ~~~
      // 불변성 유지
      const original = [1, 2, 3];
      const copy = [...original, 4]; // 새로운 배열 생성
      console.log(original); // [1, 2, 3] // 원본 데이터 변경 없음
      ~~~
    - 고차 함수 : 함수를 매개변수로 받거나 반환하는 함수 EX) map, filter, reduce ...
      ~~~
      const numbers = [1, 2, 3, 4];
      const doubled = numbers.map(x => x * 2); // 고차 함수
      console.log(doubled);
      ~~~
    - 참조 투명성 : 함수 호출을 값으로 대체해도 프로그램의 동작에 영향을 주지 않음
      1. 참조 투명성을 가지는 코드 (순수 함수)
          ~~~
          // 순수 함수 : 같은 입력에 대해 항상 같은 결과를 반환
          const add = (a, b) => a + b;
      
          // 동일한 값으로 대체 가능
          const result = add(2, 3); // 5
          // add(2,3)을 5로 대체해도 프로그램 의미는 동일
          console.log(result); // 5
          ~~~
      2. 참조 투명성을 가지지 않는 코드 (비순수 함수)
          ~~~
          let x = 10;
         
          // 비순수 함수 : 외부 상태에 의존
          const add = (a) => a + x;
          
          // x가 변경되면 결과도 달라짐
          console.log(add(5)); // 15
         
          x = 20;
          console.log(add(5)); // 25
          ~~~
    - 선언형 프로그래밍 : "어떻게"가 아닌 "무엇을" 해야 하는지 표현
      ~~~
      // 명령형
      const numbers = [1, 2, 3, 4];
      let total = 0;
      for (let i = 0; i < numbers.length; i++) {
          total += numbers[i];
      }
      
      // 선언형
      const total = numbers.reduce((acc, cur) => acc + cur, 0);
      ~~~
    - 일급 함수 : 함수를 값으로 다룰 수 있는 것
      - 변수에 함수를 할당할 수 있음
        ~~~
        const sayHello = function() {
            console.log("Hello!");
        };
        sayHello(); // Hello!
        ~~~
      - 함수를 다른 함수의 매개변수로 전달할 수 있음
        ~~~
        function executeFunction(fn) {
            fn(); // 전달받은 함수를 실행
        }

        executeFunction(() => console.log("Hello from a function!")); // Hello from a function!
        ~~~
      - 함수를 반환값으로 사용할 수 있음
        ~~~
        function createMultiplier(factor) {
            return function(number) {
                return number * factor;
            };
        }

        const double = createMultiplier(2); // 함수를 반환받음
        console.log(double(5)); // 10
        ~~~
      - 데이터 구조에 저장할 수 있음
        ~~~
        const functions = [
            () => console.log("First function"),
            () => console.log("Second function"),
        ];

        functions[0](); // First function
        functions[1](); // Second function
        ~~~
  - 목표 :
    - 변수를 최소화하고, 상태를 관리하기 쉽게 만들어 코드의 예측 가능성을 높이는 것
    - 데이터의 변환과 로직을 간결하게 작성하여 가독성과 유지보수성을 향상


- 함수형 프로그래밍은 데이터를 함수로 안전하게 처리하여 예측 가능하고 유지보수하기 쉬운 코드를 작성하는 방법


### 프로그래밍 패러다임 비교

| **특징**          | **절차지향 프로그래밍 ( Procedural )** | **함수형 프로그래밍 ( Functional )**                | **객체지향 프로그래밍 ( Object-Oriented )**               |
|--------------------|-------------------------------|---------------------------------------------|--------------------------------------------------|
| **코드 스타일**   | 명령형 (Imperative): 작업을 단계별로 수행 | 선언형 (Declarative): 작업의 목적을 표현               | 명령형 + 선언형 혼합: 객체를 중심으로 작업 수행                     |
| **중심 개념**     | 절차와 상태 (Procedure & State)    | 함수와 데이터 흐름 (Functions & Data Flow)          | 객체와 메시지 (Objects & Messages)                     |
| **상태 관리**     | 전역 변수와 지역 변수를 통해 상태 변경        | 상태를 최소화하며 불변성 유지                            | 객체의 내부 상태와 메서드로 상태 관리                            |
| **변수 사용**     | 변수 사용이 일반적, 값 변경 가능           | 변수 사용 최소화, 불변성 강조                           | 객체의 속성을 통해 변수 관리                                 |
| **코드 재사용성** | 절차(함수)를 재사용                   | 순수 함수와 고차 함수를 통해 재사용성 극대화                   | 클래스와 상속, 다형성을 통해 코드 재사용                          |
| **모듈화**        | 함수 단위로 모듈화                    | 함수 조합과 고차 함수로 모듈화                           | 객체 단위로 캡슐화, 클래스 구조화                              |
| **로직 표현**     | 명령어와 순서 강조                    | 데이터 변환과 함수 조합 강조                            | 객체 간 상호작용과 책임 분산                                 |
| **대표 키워드**   | `for`, `while`, `if` 등 명령형 구문 | `map`, `filter`, `reduce`, `pipe` 등 함수형 구문  | `class`, `object`, `inheritance`, `polymorphism` |
| **대표 언어**     | C, Pascal 등                   | Haskell, Scala, JavaScript (ES6+), Python 등 | Java, C++, Python, Ruby, JavaScript (OOP 지원)     |
| **확장성**        | 새로운 기능 추가 시 기존 로직 수정 필요       | 순수 함수 추가만으로 확장 가능                           | 클래스 상속 및 다형성을 통해 확장                              |
| **주요 원칙**     | -                             | 순수 함수, 참조 투명성, 고차 함수                        | 캡슐화, 상속, 다형성, 추상화                                |
