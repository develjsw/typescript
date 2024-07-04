type HttpMethod = {
    Get: string,
    Post: string,
    Patch: string,
    Put: string,
    Delete: string
}

type Method = keyof HttpMethod // type Method = "Get" | "Post" | "Patch" | "Put" | "Delete"

const method1: Method = 'Get';
//const method2: Method = 'GET'; // TS2820 Error 발생
//const method2: Method = 'Header'; // TS2322 Error 발생
