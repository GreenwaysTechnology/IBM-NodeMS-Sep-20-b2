const { ServiceBroker } = require('moleculer');

const broker = new ServiceBroker();

//parameter validation;

broker.createService({
    name: 'adderservice',
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
                return a + b;
            }
        }
    }
});



async function initApp() {
    try {
        await broker.start();
        const addResult = await broker.call('adderservice.add', { a: 10, b: 20 });
        //validation error message call
        //const addResult = await broker.call('adderservice.add', { a: "10", b: 20 });
        console.log(addResult);
    }
    catch (err) {
        console.log(err)
    }
}
initApp();