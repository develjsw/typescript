type PartialType2 = {
    name: string;
    age?: number;
    alive?: boolean;
}

const user07: Partial<PartialType2> = {
}

const user08: Partial<PartialUser> = {
    age: 32
}

type PartialType3 = Partial<PartialType2>

const user09: PartialType3 = {

}
