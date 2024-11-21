/*
    1. 숫자형 Enum
    - 기본적으로 첫 번째 값은 0부터 시작하며 이후 값들은 1씩 증가
    - 숫자 값을 중간에 입력해도 나머지 값들은 1씩 증가 (첫 번째 값부터 입력한 값 앞까지는 0부터 1씩 증가, 입력한 값 이후는 해당 값을 기준으로 1씩 증가)
    - 숫자형 Enum은 자동 증가 기능을 제공하여 간단한 정의가 가능
*/
enum Direction1 {
    Up,
    Down,
    Left,
    Right
}
const dir1Up: Direction1 = Direction1.Up;
console.log(dir1Up); // 출력: 0

enum Direction2 {
    Up,
    Down,
    Left = 5,
    Right
}
const dir2Up: Direction2 = Direction2.Up;
const dir2Down: Direction2 = Direction2.Down;
const dir2Left: Direction2 = Direction2.Left;
const dir2Right: Direction2 = Direction2.Right;
console.log(dir2Up);        // 출력 0
console.log(dir2Down);      // 출력 1
console.log(dir2Left);      // 출력 5
console.log(dir2Right);     // 출력 6
