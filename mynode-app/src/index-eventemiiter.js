const EventEmitter = require('events'); //return function;
//domain class
class OrderService extends EventEmitter {
    constructor() {
        super();
        //event registration
        this.on('order.created', data => {
            //process events async
            setTimeout(() => {
                console.log('order.created is being processed')
                console.log(data)
            }, 1000)
        });
    }
    //biz api
    placeOrder(order) {
        //async event driven arch
        setTimeout(() => {
            this.emit('order.created', order)
        }, 1000)
    }

}

function start() {

    const orderService = new OrderService();
    orderService.placeOrder({
        id: 1,
        qty: 100,
        price: 1000
    })

}
start();

