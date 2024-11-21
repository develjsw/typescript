function getProgrammer(name: string, alive: boolean, age: number): object {
    return {
        name: name,
        age: age,
        alive: alive
    }
}

// 기존에 직접 입력하던 방식
const myJob1: { name: string, alive: boolean, age: number } = { name: '전상우', alive: true, age: 25 };

// ReturnType 타입을 통해 삭제예정 가져오는 형식
const myJob2: ReturnType<typeof getProgrammer> = { name: '전상우', alive: true, age: 25 };
