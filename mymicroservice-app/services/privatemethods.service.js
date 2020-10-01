const { ServiceBroker } = require('moleculer');

const broker = new ServiceBroker();

//parameter validation;

broker.createService({
    name: 'calculatorservice',
    actions: {
        //inject extra behaviour for method add
        add: {
            //validation feature
            params: {
                a: "number",
                b: "number"
            },
            //biz logic via handler method
            handler(ctx) {
                const { a, b } = ctx.params;
                return this.add(a, b);
            }
        },
        substract: {
            //validation feature
            params: {
                a: "number",
                b: "number"
            },
            //biz logic via handler method
            handler(ctx) {
                const { a, b } = ctx.params;
                return this.substract(a, b);
            }
        }
    },
    //private methods
    methods: {
        add(a, b) {
            return a + b;
        },
        substract(a, b) {
            return a - b;
        }
    }
});



async function initApp() {
    try {
        await broker.start();
        let result;
        result = await broker.call('calculatorservice.add', { a: 20, b: 10 })
        console.log('Add : ', result);
        result = await broker.call('calculatorservice.substract', { a: 20, b: 10 })
        console.log('Substract : ', result);

    }
    catch (err) {
        console.log(err)
    }
}
initApp();