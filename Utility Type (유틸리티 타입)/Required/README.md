### Required 타입
- 객체의 선택적 타입까지 전부 필수 타입으로 만들고 싶을때 사용
- 새로운 타입으로 생성하거나 원본에서 선택적 타입을 전부 필수 타입으로 변경하는 방법도 있겠지만
- 새로운 타입 생성은 코드가 길어지고, 원본 변경 방법은 원본을 남겨둬야 하는 상황에서는 사용할 수 없으므로 이때 유용
  
    ~~~
    Required<객체 타입>
  
  
    EX-1)
    interface 인터페이스명 {
        타입명1: 타입;
        타입명2?: 타입;
    }
  
    const 변수명: Required<인터페이스명> = {
        타입명1: 값,
        타입명2: 값
    }
  
  
    EX-2)
    type 타입이름1 = {
        타입명1: 타입;
        타입명2?: 타입; 
    }
  
    type 타입이름2 = Required<타입이름1>
  
    const 변수명: 타입이름2 = {
        타입명1: 값,
        타입명2: 값 
    }
    ~~~