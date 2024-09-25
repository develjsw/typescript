interface Work {
    workStartTime: string;
    workingHours: number;
}

interface Work {
    intensity: string;
}

// 병합된 결과
// interface Work {
//     workStartTime: string;
//     workingHours: number;
//     intensity: string;
// }

const work: Work = {
    workStartTime: '09:00',
    workingHours: 60 * 60 * 8,
    intensity: '중'
};
console.log(work);