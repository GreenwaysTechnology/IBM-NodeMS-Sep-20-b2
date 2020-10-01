//local service communication
const { ServiceBroker } = require('moleculer');

const broker = new ServiceBroker();

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

//back end service , which does computation in back ground.
broker.createService({
    name: 'addservice',
    actions: {
        add: {
            params: {
                a: "number",
                b: "number"
            },
            handler(ctx) {
                const { a, b } = ctx.params;
                return this.add(a, b)
            }

        }
    },
    methods: {
        add(a, b) {
            return a + b;
        }
    }
});

//start service broker;
async function initApp() {
    try {
        await broker.start();
        const result = await broker.call('calculatorservice.add', { a: 10, b: 20 });
        console.log(result);
    }
    catch (err) {
        console.log(err)
    }
}
initApp();