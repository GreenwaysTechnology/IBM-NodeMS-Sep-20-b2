//require('express') returns a function-factory funciton used to create app
const express = require('express');
const messageRouter = require('./routers/messagerouter');
const todosRouter = require('./routers/todosrouter');

//call express variable having funciton to create app object
const app = express();

//bind router with main application
app.use('/api/message',messageRouter);
app.use('/api/todos',todosRouter);

//request handling
app.get('/', (request, response) => {
    response.end('Home');
});

//start the server
app.listen(3001, () => {
    console.log('Express is ready!!')
})