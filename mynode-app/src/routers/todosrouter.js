const express = require('express')
const { findAllNonBlockingPromise, findById } = require('../services/TodoService');
const router = express.Router();


//todos
router.get('/list', async (request, response) => {
    try {
        const todos = await findAllNonBlockingPromise();
        response.status(200).json(todos);
    }
    catch (err) {
        response.status(500).json(err)

    }
});
//lab ; if /api/todos/89999
router.get('/:id', async (request, response) => {
    let myparms = request.params;
    try {
        const todo = await findById(myparms.id);
        if (todo.length !== 0) {
            response.status(200).json(todo);
        } else {
            response.status(200).json({ message: 'No TODO found!!' });
        }

    }
    catch (err) {
        response.status(500).json(err)

    }
});
router.post('/create', (request, response) => {
    response.end('post');
});
router.put('/update', (request, response) => {
    response.end('put');
});
router.delete('/remove', (request, response) => {
    response.end('delete');
});
module.exports = router;