### ReturnType 타입
- 주어진 함수 타입의 반환타입을 추출함

    ~~~
    EX-1)
  
    type Member = {
        name: string,
        age: number,
        alive: boolean
    }
  
    function getMemberInfo(memberDto: Member): Member {
        return memberDto;
    }
  
    const myMember:ReturnType<typeof getMemberInfo> = { name: 'sangwoo', age: 25, alive: true }; 
    
    EX-2)
    
    type Member = {
        name: string,
        age: number,
        alive: boolean
    }
  
    function getMemberInfo(memberDto: Member): Member {
        return memberDto;
    }
  
    type MyMember = ReturnType<typeof getMemberInfo>;
    ~~~