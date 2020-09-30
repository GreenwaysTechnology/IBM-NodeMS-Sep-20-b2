const express = require('express')
const router = express.Router();

router.get('/hello', (request, response) => {
    response.end('hello');
});
router.get('/hai', (request, response) => {
    response.end('hai');
});
router.post('/hai', (request, response) => {
    response.end('post');
});
router.put('/hai', (request, response) => {
    response.end('put');
});
router.delete('/hai', (request, response) => {
    response.end('delete');
});

module.exports = router;