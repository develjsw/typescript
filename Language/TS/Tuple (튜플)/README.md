### Tuple (튜플)

1. 정의
   - `정해진 타입`과 `순서`를 갖는 `배열`을 의미함
   - 즉, 각 요소의 타입과 순서가 명확하게 정의된 배열임


2. 사용법
   - 튜플 타입 선언 : 튜플을 선언할 때 각 요소의 타입과 순서를 명확히 정의함
     ~~~
     let people: [string, number];
   
     people = ['SangWoo', 20];
     people = [20, 'SangWoo']; // Error - 타입 순서가 맞지 않아 에러발생함
   
     console.log(tuple);
     ~~~
   - 튜플에 요소 접근 : 튜플의 인덱스에 접근하면 해당 타입이 자동으로 추론됨  
     ~~~
     let people: [string, number];
   
     console.log(people[0].toFixed(2)); // 20.00
     console.log(people[1].toUpperCase()); // SANGWOO
     ~~~
   - 튜플의 추가 및 수정 : 튜플에 허용되지 않은 길이나 타입의 요소를 추가하면 오류가 발생함  
     ~~~
     let people: [string, number];
     people = ['SangWoo', 20];
   
     people[2] = 'Developer'; // Error - 튜플에서는 이 방식으로 추가입력 불가능 
     people.push('Korea, Seoul'); // 튜플에서 push 함수를 통해 에러없이 추가입력 가능
     console.log(people); // ['SangWoo', 20, 'Korea, Seoul']
     ~~~
   - 선택적 요소와 나머지 요소 : 튜플에는 선택적 요소와 나머지 요소를 사용할 수 있음
     - 선택적 요소 : 특정 요소를 필수가 아닌 선택적으로 설정할 수 있음
     - 나머지 요소 : `...`를 사용해 특정 타입의 나머지 요소를 허용함
       ~~~
       // 선택적 요소
       let peopleOptional: [string, number?];
       peopleOptional = ['SangWoo']; // 정상
       peopleOptional = ['SangWoo', 25]; // 정상

       // 나머지 요소
       let peopleRest: [string, ...number[]];
       peopleRest = ['SangWoo']; // 정상
       peopleRest = ['SangWoo', 25, 30, 35]; // 정상
       ~~~


3. 튜플의 한계
   - 추가 연산 주의 : `push`와 같은 메서드는 타입 체크를 엄격히 하지 않으므로 사용에 주의가 필요함
   - 읽기 전용 튜플 : push로도 수정이 불가능한 튜플이 필요한 경우에 `readonly` 키워드를 사용함
     ~~~
     const peopleReadonly: readonly [string, number] = ['SangWoo', 25];
     peopleReadonly[2] = 'Korea, Seoul'; // Error - 읽기 전용 튜플타입
     peopleReadonly.push('Developer'); // Error - 읽기 전용 튜플타입
     ~~~


4. 참고사항 - 튜플과 모양만 비슷한 배열 구조 분해 할당
   ~~~
   const [name, age] = ['SangWoo', 25];

   console.log(name); // SagWoo
   console.log(age); // 25
   ~~~