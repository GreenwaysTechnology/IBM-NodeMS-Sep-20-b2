//local service communication
const { ServiceBroker } = require('moleculer');

const broker = new ServiceBroker({
    //nodeID : 'ibmconsumernode',
    transporter: "nats://localhost:4444",
    registry: {
        discoverer: "redis://localhost:6379"
    }
});

broker.createService({
    name: 'calculatorservice',
    actions: {
        add: {
            params: {
                a: "number",
                b: "number"
            },
            handler(ctx) {
                //call add service;you can use context object
                const { a, b } = ctx.params;
                return ctx.call('addservice.add', { a: a, b: b });
            }

        }
    }
});
//start service broker;
async function initApp() {
    try {
        await broker.start();
        const res = await broker.call('calculatorservice.add', { a: 100, b: 200 })
        console.log(res);
        await broker.repl()
    }
    catch (err) {
        console.log(err)
    }
}
initApp();