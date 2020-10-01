
const { ServiceBroker } = require('moleculer');
const ApiService = require("moleculer-web");


const broker = new ServiceBroker();

// broker.createService({
//     name: 'apigateway',
//     mixins: [ApiService],
//     settings: {
//         routes: [{
//             path: "/api",
//             whitelist: [
//                 // Access any actions in 'hello' service : url mapping policy
//                 "hello.*",
//             ]
//         }]
//     }
// })

//alise mapping
// broker.createService({
//     name:'apigateway',
//     mixins:[ApiService],
//     settings: {
//         routes:[{
//             path:"/api",
//             aliases: {
//                "hello": "hello.sayHello"
//             }
//         }]
//     }
// });


broker.createService({
    name:'apigateway',
    mixins:[ApiService],
    settings: {
        routes:[{
            path:"/api",
            aliases: {
               "GET hello": "hello.sayHello",
                  // The `name` comes from named param. 
                // You can access it with `ctx.params.name` in action
               "GET hello/:name": "hello.sayHelloByName"
            }
        }]
    }
});


broker.createService({
    name: 'hello',
    actions: {
        //define biz api of that service
        sayHello() {
            return 'Hello,Molecular'
        },
        
        sayHelloByName(ctx) {
            return `Hello ${ctx.params.name}`
        }
    }
});
async function init() {
    try {
        await broker.start();
        }
    catch (e) {
        log(e);
    }
}
init();
