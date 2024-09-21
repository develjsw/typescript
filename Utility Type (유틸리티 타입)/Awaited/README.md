### Awaited 타입
- promise(프로미스)의 결과 값을 추출함

    ~~~
    async function getData(): Promise<string> {
        return 'string data';
    }
    
    type TResult = Awaited<ReturnType<typeof getData>>
    ~~~