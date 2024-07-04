/**
 * 제네릭 타입
 * @param params
 */
function genericF1<T>(params: T): T {
    return params;
}

const test1 = genericF1<string>('stringValue');
const test2 = genericF1<number>(1000);
const test3 = genericF1<object>({ string: 'stringValue', number: 1000 });

console.log(test1);
console.log(test2);
console.log(test3);

/**
 * 유니온 타입
 * @param params
 */
function notGeneric(params: string | number): string | number {
    return params
}

const test4 = notGeneric('stringValue2');
const test5 = notGeneric(2000);

console.log(test4);
console.log(test5);