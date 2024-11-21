### Export (Named Export)
- export는 여러 개의 값을 내보낼 수 있음
- 각각의 내보낸 값을 사용할 때는 중괄호({})안에 이름을 명시해야 함
- 특징 : 
  - 여러 값(함수, 변수, 클래스 등)을 내보낼 수 있음
  - 내보낸 이름과 동일한 이름으로 가져와야 함 (단, as를 사용해 이름 변경 가능)
  - 모듈 내부에서 선언된 이름이 중요함
    ~~~
    // module.js
    export const add = (a, b) => a + b;
    export const substract = (a, b) => a - b;
    ~~~
    ~~~
    // main.js
    import { add, substract } from './module.js';
  
    console.log(add(5, 3)); // 8
    console.log(substract(5, 3)); // 2
    ~~~
    ~~~
    // main.js
    import { add as plus } from './module';

    console.log(plus(5, 3));  // 8
    ~~~
    
### Export Default
- export default는 모듈당 하나의 기본값을 내보내는 방식임
- 기본 값은 함수, 객체, 클래스 등 무엇이든 가능
- 특징 :
  - 모듈당 하나의 값만 export default로 내보낼 수 있음
  - 가져올 때 이름을 임의로 설정 가능하며, 중괄호를 사용하지 않음
  - 기본적으로 명시된 이름과 무관함
    ~~~
    // module.js
    export default function multiply(a, b) {
        return a * b; 
    }
    ~~~
    ~~~
    // main.js
    import multiply from './module';
    
    console.log(multiply(5, 3)); // 15
    ~~~
    ~~~
    // main.js
    import product from './module';
    
    console.log(product(5, 3)); // 15
    ~~~

### 혼합사용
- export와 export default는 같은 모듈에서 혼합해서 사용 가능
    ~~~
    // module.js
    export const add = (a, b) => a + b;
    export const subtract = (a, b) => a - b;
    export default function multiply(a, b) {
        return a * b;
    }
    ~~~
    ~~~
    // main.js
    import multiply, { add, subtract } from './module';
    
    console.log(add(5, 3));       // 8
    console.log(subtract(5, 3));  // 2
    console.log(multiply(5, 3));  // 15
    ~~~
    ~~~
    // main.js
    import * from './module';
    
    console.log(add(5, 3));       // 8
    console.log(subtract(5, 3));  // 2
    console.log(multiply(5, 3));  // 15
    ~~~