/*
    4. 컴파일 타임 평가
    - const enum은 컴파일 시 상수로 대체되어 효율적임
    - 성능과 메모리 사용 측면에서 장점을 제공
*/
const enum Directions {
    Up,
    Down,
    Left,
    Right
}

let directions = [
    Directions.Up,
    Directions.Down,
    Directions.Left,
    Directions.Right,
];
