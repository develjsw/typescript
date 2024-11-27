### Currying (커링)

- 개념 : 함수형 프로그래밍에서 자주 사용되는 기술로, 여러 개의 인자를 받는 함수를 단일 인자를 받는 함수들의 체인으로 변경하는 것


- 특징 :
  - 부분 적용 함수 : 
    - 커링된 함수는 일부 인수만 전달받고 나머지 인수를 받는 새 함수를 반환함
    - 복잡한 함수 호출을 단순화하거나 코드 재사용성을 높일 수 있음
  - 단일 인자 함수들의 연속 : 
    - 단일 인자를 받는 여러 단계의 함수로 변환됨
      ~~~
      EX)
      func (a,b,c) 함수는 커링을 통해
      func (a)(b)(c) 형태로 사용할 수 있음  
      ~~~
  - 코드의 가독성과 재사용성 향상 : 
    - 잡한 함수 호출을 간결하게 만들고, 함수 조합을 쉽게 구현할 수 있도록 도와줌


- 예시1 - JS에서의 커링
  ~~~
  -------------------------------------------
  
  // 기본 함수
  function add(a, b) {
      return a + b;
  }
  
  console.log(
      add(2, 3)
  ); // 5
  
  -------------------------------------------
  
  // 커링된 함수
  function curriedAdd(a) {
      return function(b) {
          return a + b;
      }
  }
  
  const addTwo = curriedAdd(2); // 부분 적용
  console.log(
      addTwo
  ); // function(b) { return a + b; }
  console.log(
      addTwo(3)  
  ); // 5
  
  console.log(
      curriedAdd(2)(3)
  ); // 5
  
  -------------------------------------------
  ~~~
- 예시2 - ES6 화살표 함수에서의 커링
  ~~~
  const curriedAdd = a => b => a + b;
  
  console.log(
      curriedAdd(2)(3)
  ); // 5
  ~~~
- 예시3 - 함수 조합
  ~~~
  const compose = f => g => x => f(g(x));
  const addOne = x => x + 1;
  const double = x => x * 2;
  
  const addOneAndDouble = compose(double)(addOne);
  console.log(
      addOneAndDouble(5)
  ); // (5 + 1) * 2 = 12
  ~~~