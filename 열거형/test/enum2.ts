/*
    2. 문자열형 Enum
    - 각 멤버는 문자열 값으로 초기화되어야 함
    - 문자열형 Enum은 디버깅 시 가독성이 좋음
*/
enum Direction3 {
    Up = 'UP',
    Down = 'DOWN',
    Left = 'LEFT',
    Right = 'RIGHT'
}
const dir3Up: Direction3 = Direction3.Up;
console.log(dir3Up); // 출력: 'UP'
