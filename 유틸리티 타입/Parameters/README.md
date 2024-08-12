### Parameters 타입
- 주어진 함수 타입의 매개변수 타입들을 튜플로 추출함

    ~~~
    EX)
  
    function getCompany(name: string, establishYear: number): object {
        return {
            name: name,
            establishYear: establishYear
        }
    }

    type MyCompany = Parameters<typeof getCompany>;

    function myCompany(company: MyCompany): object {
        return company;
    }
    ~~~