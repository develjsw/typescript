### 대다수의 프로그래밍 언어 동작원리
- 컴파일 : 사람 - 프로그래밍언어 → 기계어 - 컴퓨터<br>
(컴퓨터가 이해하기 쉬운 형태로 변환 = 컴파일)
- 컴파일러 : 사람 - JS / Java → 바이트코드 - 컴퓨터
- 컴파일러의 컴파일 과정 : JS → AST(추상 문법 트리) → 바이트 코드
<h6>** AST : 코드의 공백이나 주석 탭 등의 코드 실행에 관계없는 요소들 제거 후, 트리 형태의 자료구조에 코드를 쪼개서 저장해두는 형태 **</h6>

### TS 동작원리

1. (타입스크립트 컴파일러가 수행)<br>
   TS Source → AST(추상 문법 트리) → 타입검사 → 컴파일 종료<br>
   →
2. (브라우저, NodeJS, 자바스크립트 엔진에서 수행)<br>
   JS Source → AST(추상 문법 트리) → 바이트코드 → 실행

### TS파일 실행을 위한 준비

- Node.js 설치
  - 설치경로 : https://nodejs.org
  - 목적 :
    - JS 파일을 실행하기 위함<br>
    - TSC(TypeScript Compiler)를 설치하기 위함

- TS 컴파일을 위한 tsc 설치 : 
  - npm 명령어로 tsc 전역에 설치
    ~~~
    $ npm i -g typescript
    ~~~
  - 정상동작 확인
    ~~~
    $ cd /드라이브/워킹디렉토리
    
    $ touch property.ts
    
    $ vi property.ts
      # 실행할 내용 입력
    
    $ tsc property.ts
      # property.js 파일 생성 확인
    
    $ node property.js
      # 실행결과 확인 
    ~~~