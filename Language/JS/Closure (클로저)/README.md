### Closure (클로저)

- 정의 : 함수와 함수가 선언되었을 때의 렉시컬 환경( Lexical Environment )의 조합
- 특징 :
  - 자신이 선언된 당시의 환경을 기억하는 함수
  - 외부 함수의 실행 컨텍스트가 종료된 후에도, 내부 함수가 외부 함수의 변수에 접근할 수 있는 함수

  - 기본 예시
    ~~~
    function outerFunction() {
        let count = 0; // 외부 함수의 변수

        function innerFunction() {
            count++; // 외부 변수에 접근
            console.log(count);
        }

        return innerFunction;
    }
    
    const myClosure = outerFunction(); // outerFunction 실행 후 innerFunction 반환 (즉, innerFunction 함수가 변수에 저장되어 있는 것과 동일한 의미) 
    myClosure(); // innerFunction()을 실행하는 것과 동일 // 1
    myClosure(); // innerFunction()을 실행하는 것과 동일 // 2
    myClosure(); // innerFunction()을 실행하는 것과 동일 // 3
    
    /*
        innerFunction은 count에 접근할 수 있는 클로저를 형성함
        외부 함수(outerFunction)가 종료되더라도, innerFunction은 count에 접근할 수 있음
    */
    ~~~
  - 즉시 실행 함수와 클로저 예시    
    ~~~
    const counter = (function () {
        let count = 0; // 상태 유지

        return {
            increment() {
                count++;
                console.log(count);
            },
            reset() {
                count = 0;
                console.log(count);
            }
        };
    })();
    
    counter.increment(); // 1
    counter.increment(); // 2
    counter.reset();     // 0
    
    /*
        즉시 실행 함수를 사용하여 count 변수를 캡슐화하고, 외부에서 직접 접근할 수 없게 보호함
    */
    ~~~