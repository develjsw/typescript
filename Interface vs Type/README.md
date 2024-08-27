### Interface vs Type
1. 구조적 차이
    - interface : 주로 객체의 구조를 정의하는 데 사용되며, 상속과 합성을 지원함
    - type : 좀 더 범용적인 타입 정의로, 객체 뿐만 아니라 유니언 타입, 튜플, 리터럴 타입 등 다양한 형태의 타입을 정의할 수 있음
       ~~~
       interface User {
           name: string;
           age: number;
       }
   
       type User = {
           name: string;
           age: number;
       }
       ~~~
2. 확장성
    - interface : 확장 가능, 다른 인터페이스를 상속하거나 기존 인터페이스에 새로운 상속 추가 가능
    - type : 다시 열어서 추가 불가능, 확장을 원한다면 유니언 타입을 사용하거나 새로운 타입을 만들어야 함
       ~~~
       interface User {
           name: string;
       } 
      
       interface Admin extends User {
           role: string;
       }
      
       ------------------------------
      
       type User = {
           name: string;
       }
      
       type Admin = User & { role: string };
       ~~~
3. 유니언과 튜플 정의
    - interface : 유니언 타입이나 튜플을 직접적으로 정의할 수는 없음
    - type : 유니언 타입, 튜플, 복합 타입을 정의할 수 있어 더 유연함
       ~~~
       type Status = "success" | "error";
       type Point = [number, number];
       ~~~
4. 호환성
    - interface와 type은 객체의 형태에 대해 비교적 유사한 방식으로 동작함
    - 대부분의 경우 상호 교환적으로 사용이 가능함
    - 특수한 상황에서는 type의 유연함이 필요할 수 있음
5. 병합
    - interface : 같은 이름의 인터페이스가 여러 번 선언되면 자동으로 병합됨
    - type : 같은 이름으로 두 번 선언하면 오류가 발생함
       ~~~
       interface User {
           name: string;
       }
   
       interface User {
           age: number;
       }
   
       // 결과 : { name: string, age: number }
    ~~~
