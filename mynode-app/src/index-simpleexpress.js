//require('express') returns a function-factory funciton used to create app
const express = require('express');

//call express variable having funciton to create app object
const app = express();

//request handling

app.get('/', (request, response) => {
    response.end('Home');
});
app.get('/api/message/hello', (request, response) => {
    response.end('hello');
});
app.get('/api/message/hai', (request, response) => {
    response.end('hai');
});
app.post('/api/message/hai', (request, response) => {
    response.end('post');
});
app.put('/api/message/hai', (request, response) => {
    response.end('put');
});
app.delete('/api/message/hai', (request, response) => {
    response.end('delete');
});
//todos
app.get('/api/todos/list', (request, response) => {
    response.end('hello');
});
app.get('/api/todos/:id', (request, response) => {
    response.end('hai');
});
app.post('/api/todos/create', (request, response) => {
    response.end('post');
});
app.put('/api/todos/update', (request, response) => {
    response.end('put');
});
app.delete('/api/todos/remove', (request, response) => {
    response.end('delete');
});


//start the server
app.listen(3001, () => {
    console.log('Express is ready!!')
})