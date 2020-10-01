//get Service Broker ;

const { ServiceBroker } = require('moleculer');

const broker = new ServiceBroker();

broker.createService({
    name: 'greeterservice',
    actions: {
        //ctx is variable points "Context Object"
        sayHello(ctx) {
            console.log(ctx.params);
            const { message, whom } = ctx.params;
            //return `${ctx.params.message} ${ctx.params.whom}`
            return `${message} ${whom}`
        }

    }
});

//start service broker;
async function initApp() {
    try {
        await broker.start();
        const hello = await broker.call('greeterservice.sayHello', { message: 'Hello', whom: 'Moleculer' });
        console.log(hello);
    }
    catch (err) {
        console.log(err)
    }
}
initApp();
