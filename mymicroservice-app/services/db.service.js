"use strict";

const { ServiceBroker } = require("moleculer");
const DbService = require("moleculer-db");
const MongoDBAdapter = require("moleculer-db-adapter-mongo");


const broker = new ServiceBroker();
// Create a DB service for `user` entities
broker.createService({
    name: "users",

    // Mixin DB service into (current) 'users' service
    mixins: [DbService],
    adapter: new MongoDBAdapter("mongodb://localhost/moleculer-demo"),
    collection: "users",
    settings: {
        idField: 'id',
        fields: ["id", "username", "name"],
        entityValidator: {
            username: "string"
        }
    },

    afterConnected() {
        // Seed the DB with ˙this.create`
    }
});
async function initApp() {
    await broker.start()
    for (let i = 1; i <= 10; i++) {
        await broker.call("users.create", {
            username: "john-" + i,
            name: "John Doe -" + i,
            status: 1,
            id: i
        })
    }
    const users = await broker.call("users.find");
    console.log('users', users);
    const updateduser = await broker.call("users.update", { id: 1, name: "Subramanian" });
    console.log('updated', updateduser);
    const removedusr = await broker.call("users.remove", { id: 2 });
    //no of records affected;
    console.log('Removed User ', removedusr)
    
    console.log(await broker.call("users.find"));

}
initApp();