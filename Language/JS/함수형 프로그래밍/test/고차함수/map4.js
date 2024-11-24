const payments = [
    { paymentId: 15, paymentAmount: 25000 },
    { paymentId: 17, paymentAmount: 30000 },
    { paymentId: 20, paymentAmount: 99000 },
];

const calculatePenalty = obj => {
    return {
        ...obj,
        penaltyAmount: obj.paymentAmount * 0.1
    }
};

payments.map(calculatePenalty);
/*
[
    { "paymentId": 15, "paymentAmount": 25000, "penaltyAmount": 2500 },
    { "paymentId": 17, "paymentAmount": 30000, "penaltyAmount": 3000 },
    { "paymentId": 20, "paymentAmount": 99000, "penaltyAmount": 9900 }
]
*/