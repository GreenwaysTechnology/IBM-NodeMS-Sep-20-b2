const { ServiceBroker } = require('moleculer');
const broker = new ServiceBroker();

broker.createService({
    name: 'helloworld',
    version: 1,
    actions: {
        //biz methods
        sayHello() {
            return 'Hello Moleculer -v1'
        }

    }
});
broker.createService({
    name: 'helloworld',
    version: 2,
    actions: {
        //biz methods
        sayHello() {
            return 'Hello Moleculer -v2'
        }

    }
});

async function initApp() {
    try {
        await broker.start();
        //calling versioning service v1.service.actionname
        let response;
        response = await broker.call('v1.helloworld.sayHello');
        console.log(response);
        response = await broker.call('v2.helloworld.sayHello');
        console.log(response);
    }
    catch (err) {
        console.log(err)
    }
}
initApp();
