### Generator (제너레이터)
- 정의
  - 제너레이터 함수는 일반 함수와 달리 호출 시 즉시 실행되지 않고, 제너레이터 객체를 반환하는 함수
  - 이 객체는 이터레이터 인터페이스를 따르며, next() 메서드를 호출할 때마다 함수 실행이 단계적으로 진행됨
- 형태
  - function* 키워드로 선언함
  - 하나 이상의 yield 문을 포함하며, yield 문을 통해 값이 반환되고 실행이 일시 중지됨
  - next() 메서드를 사용하여 실행 제어 가능
  - next()를 호출할 때마다 함수가 실행되고, 다음 yield 문 또는 함수 종료 지점까지 진행됨
    ~~~
    ex)
    function* numberGenerator() {
       console.log("문자열 출력1");
       console.log("문자열 출력2");
       yield 1;  // 첫번째 next 메소드 호출 시 여기까지 실행됨
       yield 2;  // 두번째 next 메소드 호출 시 여기까지 실행됨
       console.log("문자열 출력3");
       yield 3;  // 세번째 next 메소드 호출 시 여기까지 실행됨
    }

    const gen = numberGenerator();

    console.log(gen.next()); // 문자열 출력1 // 문자열 출력2 // { value: 1, done: false }
    console.log(gen.next()); // { value: 2, done: false }
    console.log(gen.next()); // 문자열 출력3 // { value: 3, done: false }
    console.log(gen.next()); // { value: undefined, done: true }
    console.log(gen.next()); // { value: undefined, done: true }
    console.log(gen.next()); // { value: undefined, done: true }
    ...
    ~~~