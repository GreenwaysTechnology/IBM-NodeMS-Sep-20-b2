const { findAllBlocking, findAllNonBlockingCB, findAllNonBlockingPromise } =
 require('./services/TodoService');
const { log } = console;


async function startApp() {
    //call blocking version
    // const todos = findAllBlocking();
    // log(todos)
    //findAllNonBlockingCB(todos => log(todos));
    //promise 
    // findAllNonBlockingPromise()
    //     .then(todos => log(todos))
    //     .catch(err => log(err))
    //     .finally(() => log('done'))
    const todos = await findAllNonBlockingPromise();
    log(todos);

}
startApp();