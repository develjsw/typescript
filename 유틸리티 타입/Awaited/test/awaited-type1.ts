async function getData(): Promise<string> {
    return 'string data';
}

type TResult = Awaited<ReturnType<typeof getData>>