interface Movie {
    name: string;
    price: number;
    isRunning: boolean;
}

function getMovieName(movieName: Pick<Movie, 'name'>): string {
    return `영화명 : ${movieName}`;
}

console.log(getMovieName({ name: '파일럿'} ));