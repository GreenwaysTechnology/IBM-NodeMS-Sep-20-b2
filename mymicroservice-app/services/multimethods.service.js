//get Service Broker ;

const { ServiceBroker } = require('moleculer');

const broker = new ServiceBroker();


broker.createService({
    name: 'greeterservice',
    actions: {
        //biz methods
        sayHello() {
            return 'Hello Moleculer'
        },
        sayHai() {
            return 'Hai Moleculer'
        },
        sayGreet() {
            return 'Greet Moleculer'
        }

    }
});

//start service broker;
async function initApp() {
    try {
        await broker.start();
        const hello = await broker.call('greeterservice.sayHello');
        const hai = await broker.call('greeterservice.sayHai');
        const greet = await broker.call('greeterservice.sayGreet');
        console.log(hello,hai,greet);
    }
    catch (err) {
        console.log(err)
    }
}
initApp();
