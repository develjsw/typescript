/*
    여러개의 타입을 받아서 처리해야 하는 경우
    아래와 같이 처리가 가능하다.
*/

/* 1-1번 - 유니온타입(정상동작) */
// function add1(var1: number, var2: number): number {
//     return var1 +  var2;
// }
// function add2(var1: string, var2: string): string {
//     return var1 + var2;
// }
// console.log(add1(1000, 2000));
// console.log(add2('TS', '(typescript)'));


/* 1-2번 - 유니온타입(비정상동작) */
// function add(var1: string | number, var2: string | number): string | number {
//     return var1 + var2; // TS2365 Error 발생 : + 연산자를 string + number 또는 number + string에 사용할 수 없기 때문
// }
//
// console.log(add(1000, 2000));
// console.log(add('TS', '(typescript)'));


/* 2번 - 오버로딩 */
// function add(var1: string, var2: string): string; // 오버로드 함수 선언
// function add(var1: number, var2: number): number; // 오버로드 함수 선언
// function add(var1: any, var2: any): any { // 오버로드 함수 실행부 (any를 써줌)
//     return var1 + var2;
// }
// console.log(add(1000, 2000));
// console.log(add('TS', '(typescript)'));
// //console.log(add(1000, '(typescript)')); // TS2769 Error 발생
// //console.log(add('(typescript)', 1000)); // TS2769 Error 발생


/* 3번 - 제네릭(비정상동작) */
// function add<T>(var1: T, var2: T): T {
//     return var1 + var2; // TS2365: Error 발생
// }
//
// console.log(add<number>(1000, 2000));
// console.log(add<string>('TS', '(typescript)'));
