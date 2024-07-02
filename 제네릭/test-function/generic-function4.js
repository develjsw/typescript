function expressTypeAboutInput1(variable) {
    return typeof variable;
}
console.log(expressTypeAboutInput1(1000)); // 매개변수의 제네릭타입을 명시 O
console.log(expressTypeAboutInput1(2000)); // 매개변수의 제네릭타입 명시 X
console.log(expressTypeAboutInput1(true));
console.log(expressTypeAboutInput1(false));
//console.log(expressTypeAboutInput1([ 1, 2, 3 ])); // TS2322 Error 발생 - UnionType 타입에 없는 값이므로 에러 발생
/**
 * - typeof의 특성으로 인한 반환 값 string 설정 가능
 * - typeof 연산자는 자바스크립트에서 사용되어 피연산자의 타입을 나타내는 문자열을 반환
 * - ex) "number", "string", "boolean" ..
 * @param variable
 */
function expressTypeAboutInput2(variable) {
    return typeof variable;
}
console.log(expressTypeAboutInput2(1000));
console.log(expressTypeAboutInput2(2000));
console.log(expressTypeAboutInput2(['one', 'two', 'three']));
//console.log(expressTypeAboutInput2<Array<number>>([ 1, 2, 3 ])); // TS2344 Error 발생 - UnionType에 없는 타입이므로 에러 발생
