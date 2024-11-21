### Namespace vs ES Modules ( import / export )
- Namespace :
  - 코드를 논리적으로 그룹화하고 전역 스코프 오염을 방지하는 용도
  - 주로 구조적 컴포넌트로 사용되며, JavaScript로 변환될 때 객체로 컴파일됨
  - `과거`에는 `코드 구조화에 주로 사용`되었으나, `현재`는 `ES6 모듈(import, export)이 그 역할을 대신`함
- ES Modules (import/export) :
  - `코드의 모듈화`를 통해 `재사용성`과 `유지보수성`을 높이기 위한 용도
  - 각 파일을 독립된 모듈로 간주하며, export를 통해 외부에 특정 기능이나 데이터를 공개하고, import를 통해 다른 모듈에서 이를 사용할 수 있음
  - 모듈은 기본적으로 파일 단위로 분리되어 있으며, 모듈 간 의존성을 관리할 수 있음
  - 전역 스코프를 오염시키지 않으며, 모듈 간에 명확한 경계를 설정해 코드 구조를 명확하게 유지함
  - 최신 JavaScript 및 TypeScript 프로젝트에서 기본적으로 사용되며, 과거 네임스페이스의 역할을 대체함
    
    ~~~
    [ Namespace - 권장되지 않는 사용 방법 ]
    export namespace NamespaceClass {
        export function sum(num1: number, num2: number): number {
            return num1 + num2;
        }
    }
    
    import { NamespaceClass } from 'path';
    const amount1: number = NamespaceClass.sum(10, 20);
    
    ---------------------------------------------------------
    
    [ ES Modules - 권장되는 사용 방법 ]
    export function sum(num1: number, num2: number): number {
        return num1 + num2;
    }
    
    import { sum } from 'path';
    const amount2: number = sum(30, 40);
    ~~~
    
- (참고 사항) Class :
  - 객체 지향 프로그래밍의 개념을 구현하기 위한 용도
  - 런타임 시 실제 엔티티를 생성하며, 인스턴스를 통해 사용 가능
  - 상태와 동작을 포함한 객체를 생성하기 위해 사용

    ~~~
    export class DefaultClass {
      sum(num1: number, num2: number): number {
        return num1 + num2;
      }
    }
  
    import { DefaultClass } from 'path';
    const myClass: DefaultClass = new DefaultClass();
    const amount3: number = myClass.sum(50, 60);
    ~~~