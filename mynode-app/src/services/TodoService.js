const TODOS = require('../mock-data/todos');

class TodoService {

    //blocking version; 
    findAllBlocking() {
        return JSON.stringify(TODOS);
    }
    //non blocking version; callback based
    findAllNonBlockingCB(handler) {
        setTimeout(handler, 5000, JSON.stringify(TODOS));
    }
    //non blocking version; Promise based
    findAllNonBlockingPromise() {
        return new Promise((resolve, reject) => {
            setTimeout(resolve, 5000, JSON.stringify(TODOS));
        });
    }


}
module.exports = new TodoService();