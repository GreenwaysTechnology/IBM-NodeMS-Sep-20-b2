const { ServiceBroker } = require('moleculer');

const broker = new ServiceBroker({
   // nodeID:'ibmprovidernode',
    transporter: "nats://localhost:4444",
    registry: {
        discoverer: "redis://localhost:6379",
        strategy: "RoundRobin"

    },
  

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
                return `${this.add(a, b) } is coming ${broker.nodeID}`
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
        await broker.repl();
        
    }
    catch (err) {
        console.log(err)
    }
}
initApp();
