### 제네릭(Generic) 타입 개념
선언할 때 타입을 특정하지 않고 변수처럼 사용하여, 다양한 타입으로 재사용할 수 있는 타입으로 선언시점이 아닌 사용시점에 타입이 결정됨

### 제네릭 장점
1. 타입 재사용성 : 타입이 고정되는 것을 방지하고, 다양한 타입으로 재사용 가능한 요소를 선언할 수 있음<br>
2. 타입 안정성 : 컴파일 시간에 검사를 진행하여, 타입 안정성을 보장함<br>
3. 캐스팅 제거 : 불필요한 타입 캐스팅 코드를 제거할 수 있음<br>
4. 재사용 가능한 코드 : 제네릭 로직을 이용해 다양한 타입을 받을 수 있는 재사용 가능한 코드 작성 가능<br>

### 제네릭의 형태
- `<>` 기호를 변수명, 함수명 뒤에 적어주어 선언
- 제네릭명은 일반적으로 `T`로 표시하나, `꼭 T가 아니어도 됨`
    ~~~
    // 예시 코드

    function generic<T>(variable: T): T {
       return variable;
    }
    console.log(generic('typescript')); // typescript
    console.log(generic(1000)); // 1000
    console.log(generic(true)); // true
    ~~~ 
- 제네릭에서 인수를 `배열`로 받을 경우에는 `T[]` 또는 `Array<T>`로 처리해줘야 함
    ~~~
    // 예시 코드
  
    function generic<T>(arr: T[]): T[] {
       return arr; 
    }
  
    function generic<T>(arr: Array<T>): Array<T> {
       return arr; 
    }
    ~~~

### 제네릭(Generic) 타입의 사용 이유
단일 타입, 유니온 타입으로만 표현하기 어려운 경우에 사용
- 단일 타입 : `number`, `string`, `number[]`, `string[]` 등 단일 타입 사용
- 유니온 타입 : `number | string` 등 여러 개의 타입 사용
- 제네릭 타입 : `T`

### 제네릭 제약 조건 (extends)
제네릭은 사용시점에 타입을 결정하므로 사용전에는 모든 타입을 허용하게 되는데
이러한 타입 종류를 제한하기 위해서 나온 키워드가 `extends`이며, 사용 예시는 다음과 같다.
  ~~~
  type NumbersType = number | Array<number>
  
  function getNumbers<T extends NumbersType>(nums: T): T {
      return nums;
  }
  ~~~
<h6>** 참고 : 일반적으로 클래스나 인터페이스에서 extends를 사용 할 경우 `확장`의 의미로 사용되지만, 제네릭의 경우에는 `제한`의 의미로 사용된다. **</h6>