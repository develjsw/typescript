const data = {
    orderId: 1,
    orderGoodsName: '상품1',
    orderAmount: 10000,
    payments: {
        orderId: 1,
        paymentId: 10,
        paymentAmount: 10000,
        refunds: {
            paymentId: 10,
            refundId: 20,
            refundAmount: 5000
        }
    }
}

const hasAllProperty = data => {
    return (payment) => {
        return data.hasOwnProperty('payments') && payment.hasOwnProperty('refunds');
    }
}

// function hasAllProperty(data) {
//     return function(payment) {
//         return data.hasOwnProperty('payments') && payment.hasOwnProperty('refunds');
//     }
// }

const hasPayment = hasAllProperty(data);
console.log(hasPayment);
/*
f (payment) {
    return data.hasOwnProperty('payments') && payment.hasOwnProperty('refunds');
}
*/

const { payments } = data;
console.log(
    hasPayment(payments)
); // true
