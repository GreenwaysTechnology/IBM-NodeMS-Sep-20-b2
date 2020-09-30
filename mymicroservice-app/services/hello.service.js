//get Service Broker ;

const { ServiceBroker } = require('moleculer');

//create Service Broker instance;
const broker = new ServiceBroker();

//create helloworld service

broker.createService({
    name: 'helloworld',
    actions: {
        //biz methods
        sayHello() {
            return 'Hello Moleculer'
        }

    }
});
//start service broker;

function startApp() {

    //start the broker
    broker.start()
        .then(res => {
            console.log('broker is ready');
            broker.call('helloworld.sayHello')
                .then(response => {
                    console.log('Response  is ready')
                    console.log(response);
                })
                .catch(err => { });
        })
        .catch(err => { });
}
//startApp();
async function initApp() {
    try {
        await broker.start();
        const response = await broker.call('helloworld.sayHello');
        console.log(response);
    }
    catch (err) {
        console.log(err)
    }
}
initApp();
