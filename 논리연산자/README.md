### JavaScript 논리연산자

---
단축 평가 : `&&` 또는 `||` 연산자를 사용할 때, 왼쪽의 피연산자 만으로도 결과가 확정되면 오른쪽 피연산자를 평가하지 않는 동작을 말함
~~~
EX-1) && 연산자 :
- && 연산자는 두 피연산자 모두 true일 때만 전체 표현식이 true가 됨
- 따라서 왼쪽 피연산자가 false일 경우, 오른쪽을 평가할 필요 없이 전체 결과는 false가 되며, 이때 오른쪽 피연산자는 아예 평가되지 않음

EX-2) || 연산자 :
- || 연산자는 둘 중 하나라도 true면 전체 표현식이 true가 됨
- 따라서 왼쪽 피연산자가 true일 경우, 오른쪽을 평가할 필요 없이 전체 결과는 true가 됨
~~~

1. `&&` 논리 연산자
   - 왼쪽의 조건이 true (또는 truthy)일 경우, 오른쪽 값을 평가한 후 그 결과를 반환
   - 왼쪽의 조건이 false (또는 falsy)일 경우, 왼쪽 값을 그대로 반환하고, 오른쪽은 평가하지 않음
   ~~~
   EX-1)
      true && true // true
      true && false // false
      false && false // false
      false && true // false
   
   EX-2)
      const variable1 = null
      const variable2 = undefined
      const variable3 = false
   
      const addVariable = 10
   
      "값존재" && { userInfo: { userName: 'sangwoo' }, orderId: addVariable } // { userInfo: { userName: 'sangwoo' }, orderId: addVariable }  
      "값존재" && variable1 // null
      "값존재" && variable2 // undefined
      "값존재" && variable3 // false
      "값존재" && addVariable // 10
   
      variable1 && "값존재" // null
      variable2 && { userInfo: { userName: 'sangwoo' }, orderId: addVariable } // undefined
      variable3 && "값존재" // false
   
      "값존재" && addVariable // 10
   
      true && (() => "Function result")() // "Function result" 
      true && variable1 // null 
      true && variable2 // undefined
      true && variable3 // false
   ~~~
2. `||` 논리 연산자
   - 왼쪽의 조건이 false(또는 falsy)일 경우, 오른쪽 값을 평가한 후 그 결과를 반환
   - 왼쪽의 조건이 true(또는 truthy)일 경우, 오른쪽을 평가하지 않고 왼쪽 값을 그대로 반환
   ~~~
   EX-1)
   ~~~
---
3. `<<` 논리 연산자
4. `>>` 논리 연산자
5. `!` 논리 연산자
6. `!!` 논리 연산자
7. `?` 논리 연산자
8. `??` 논리 연산자
---