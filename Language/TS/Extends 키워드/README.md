### extends 키워드

1. 상속/확장
   - 1-1 : Class 상속
        ~~~
        class Animal {
            makeSound() {
                console.log('Sound');
            }
        }
     
        class Dog extends Animal {
            bark() {
                console.log('Woof');
            }
        }
     
        const myDog = new Dog();
        myDog.makeSound(); // "Sound"
        myDog.bark(); // "Woof"
        ~~~
   - 1-2 : Interface 확장
        ~~~
        interface Person {
            name: string;
        }
     
        interface Programmer extends Person {
            type: string;
        }
     
        /*
        interface Programmer {
            name: string;
            type: string;
        }
        */
        ~~~
   - 1-3 : Type 확장
        ~~~
        type MemberDefaultInfo = { name: string; email: string; address: string };
        type MemberDetailInfo = MemberDefaultInfo & { nickName: string };
     
        /*
        type MemberDetailInfo = {
            name: string;
            email: string;
            address: string;
            nickName: string;
        }
        */ 
        ~~~
2. 제한 (제네릭과 함께 사용)
    - 제네릭에서 특정 타입이 반드시 다른 타입의 서브타입이어야 한다는 제한을 설정할 때 사용
       ~~~
       function sumArray<T extends number[]>(arr: T): number {
           return arr.reduce((acc, val) => acc + val, 0);
       }
      
       # T는 number[] 타입의 배열로 제한되어 있으므로 이 함수는 숫자 배열만 받아들일 수 있음

       const result1 = sumArray([1, 2, 3]);  // 정상 작동
       const result2 = sumArray([10, 20, 30]);  // 정상 작동
       const result3 = sumArray(['a', 'b', 'c']); // 오류 - 문자열 배열은 허용되지 않음
       ~~~
3. 조건부 타입 (삼항 연산자와 함께 사용)
    - 조건부 타입에서 삼항 연산자처럼 사용되어 타입이 서브타입인지에 따라 다른 타입을 반환
       ~~~
       type IsString<T> = T extends string ? true : false;
    
       type A = IsString<string>; // true
       type B = IsString<number>; // false
      
       # T가 string의 서브타입이면 true, 아니면 false를 반환
       ~~~