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