const data = [
    {
        orderId: 1,
        orderAmount: 500000,
        orderStatus: 'PENDING',
        orderDetail: [
            { orderId: 1, orderDetailId: 1, orderDetailAmount: 250000, orderDetailStatus: 'COMPLETE' },
            { orderId: 1, orderDetailId: 2, orderDetailAmount: 150000, orderDetailStatus: 'PENDING' },
            { orderId: 1, orderDetailId: 3, orderDetailAmount: 100000, orderDetailStatus: 'COMPLETE' }
        ]
    },
    {
        orderId: 2,
        orderAmount: 1500000,
        orderStatus: 'COMPLETE',
        orderDetail: [
            { orderId: 2, orderDetailId: 4, orderDetailAmount: 700000, orderDetailStatus: 'COMPLETE' },
            { orderId: 2, orderDetailId: 5, orderDetailAmount: 800000, orderDetailStatus: 'COMPLETE' }
        ]
    },
    {
        orderId: 3,
        orderAmount: 2500000,
        orderStatus: 'PENDING',
    }
];

const hasOrderDetail = orders => orders.hasOwnProperty('orderDetail');

const isOrderDetailComplete = orderDetail => orderDetail.orderDetailStatus === 'COMPLETE'

const convertResult = data.filter(hasOrderDetail).map((orders) => {
    return {
        ...orders,
        orderDetail: orders.orderDetail.filter(isOrderDetailComplete)
    }
});

console.log(
    convertResult
);
/*
[
    {
        orderId: 1,
        orderAmount: 500000,
        orderStatus: 'PENDING',
        orderDetail: [
            {
                orderId: 1,
                orderDetailId: 1,
                orderDetailAmount: 250000,
                orderDetailStatus: 'COMPLETE'
            },
            {
                orderId: 1,
                orderDetailId: 3,
                orderDetailAmount: 100000,
                orderDetailStatus: 'COMPLETE'
            }
        ]
    },
    {
        orderId: 2,
        orderAmount: 1500000,
        orderStatus: 'COMPLETE',
        orderDetail: [
            {
                orderId: 2,
                orderDetailId: 4,
                orderDetailAmount: 700000,
                orderDetailStatus: 'COMPLETE'
            },
            {
                orderId: 2,
                orderDetailId: 5,
                orderDetailAmount: 800000,
                orderDetailStatus: 'COMPLETE'
            }
        ]
    }
]
*/