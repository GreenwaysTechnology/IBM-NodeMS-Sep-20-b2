//get Service Broker ;

const { ServiceBroker } = require('moleculer');

const broker = new ServiceBroker();

broker.createService({
    name: 'helloservice',
    actions: {
        //biz methods
        sayHello() {
            return 'Hello Moleculer'
        }

    }
});

broker.createService({
    name: 'haiservice',
    actions: {
        //biz methods
        sayHai() {
            return 'Hai Moleculer'
        }

    }
});

broker.createService({
    name: 'greeterservice',
    actions: {
        //biz methods
        sayGreet() {
            return 'Greet Moleculer'
        }

    }
});

//start service broker;
async function initApp() {
    try {
        await broker.start();
        const hello = await broker.call('helloservice.sayHello');
        const hai = await broker.call('haiservice.sayHai');
        const greet = await broker.call('greeterservice.sayGreet');
        console.log(hello,hai,greet);
    }
    catch (err) {
        console.log(err)
    }
}
initApp();
