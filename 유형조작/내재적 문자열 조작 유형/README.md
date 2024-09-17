### 내재적 문자열 조작 유형
1. `Uppercase<StringType>`
   - 주어진 문자열 타입을 모두 대문자로 변환하는 타입
     ~~~
     type TUppercase = Uppercase<'hello world'>;
     const uppercaseExample1: TUppercase = 'HELLO WORLD';
     const uppercaseExample2: TUppercase = 'hello world'; // Error
     const uppercaseExample3: TUppercase = 'hi'; // Error
     ~~~
2. `Lowercase<StringType>`
   - 주어진 문자열 타입을 모두 소문자로 변환하는 타입
     ~~~
     type TLowercase = Lowercase<'HELLO WORLD'>;
     const lowercaseExample1: TLowercase = 'hello world';
     const lowercaseExample2: TLowercase = 'HELLO WORLD'; // Error
     const lowercaseExample3: TLowercase = 'hi'; // Error
     ~~~
3. `Capitalize<StringType>`
   - 주어진 문자열의 첫 글자를 대문자로 변환하는 타입
     ~~~
     type TCapitalize = Capitalize<'hello world'>;
     const capitalizeExample1: TCapitalize = 'Hello world';
     const capitalizeExample2: TCapitalize = 'hello world'; // Error
     const capitalizeExample3: TCapitalize = 'hi'; // Error
     ~~~
4. `Uncapitalize<StringType>`
   - 주어진 문자열의 첫 글자를 소문자로 변환하는 타입
     ~~~
     type TUncapitalize = Uncapitalize<'Hello World'>;
     const uncapitalizeExample1: TUncapitalize = 'hello World';
     const uncapitalizeExample2: TUncapitalize = 'hello world'; // Error
     const uncapitalizeExample3: TUncapitalize = 'hi'; // Error
     ~~~
5. `템플릿 리터럴 타입(Template Literal Types)`
   - 문자열의 일부분을 동적으로 타입 생성
   - 자바스크립트의 템플릿 리터럴과 유사하지만, 타입 수준에서 동작
     ~~~
     type TGreeting = `Hello, ${string}!`;
     const greetingExample1: TGreeting = 'Hello, anything!';
     const greetingExample2: TGreeting = 'Hello, hi'; // Error
     const greetingExample3: TGreeting = 'Hello hi!'; // Error
     ~~~ 
6. `조건부 타입과 결합한 문자열 조작`
   - 내재적 문자열 조작 유형을 조건부 타입과 함께 사용
   - 복잡한 문자열 타입 변환 정의 가능
     ~~~
     type TGreet<T extends string> = `Hello, ${Capitalize<T>}!`;

     type TGreetingType1 = TGreet<'world'>;
     const greetingType1Example1: TGreetingType1 = 'Hello, World!';  
     const greetingType1Example2: TGreetingType1 = 'Hello, world!'; // Error  
     const greetingType1Example3: TGreetingType1 = 'Hello World'; // Error  

     type TGreetingType2 = TGreet<'typescript'>;
     const greetingType2Example1: TGreetingType2 = 'Hello, Typescript!'; 
     const greetingType2Example2: TGreetingType2 = 'Hello, typescript!'; // Error
     const greetingType2Example3: TGreetingType2 = 'Hello Typescript'; // Error
     ~~~