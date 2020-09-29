
//async .... await keywords
//async key must be part of function declaration; async functions
//await key must be used for promise invocation;

const validate = (userName = 'admin', password = 'admin') => {
    if (userName === 'admin' && password === 'admin') {
        return Promise.resolve('Login success');

    } else {
        return Promise.reject('Login failed')
    }
}

async function startApp() {
    //promise version
    // validate()
    //     .then(res => console.log(res))
    //     .catch(err => console.log(err))
    //     .finally(() => console.log('done'))
    //async
    try {
        const res = await validate();
        console.log(res);
    }
    catch (err) {
        console.log('error')
    }
    finally {
        console.log('done!!!')
    }
}
startApp();
/////////////////////////////////////////////////////////////////////////////////
const { log } = console;

const getUser = () => {
    //biz logic
    let fakeUser = {
        id: 2,
        name: 'admin'
    }
    //fakeUser = null;
    let errors = 'User not found'
    if (fakeUser) {
        return Promise.resolve(fakeUser);
    } else {
        return Promise.reject(errors);
    }
};

const login = user => {
    let status = 'Login Successful';
    let errors = 'Login failed';
    if (user.name === 'admin') {
        return Promise.resolve(status);
    }
    else {
        return Promise.reject(errors);
    }
};

const showPage = status => {
    let spage = 'You are admin';
    let fpage = 'You are guest';
    if (status === 'Login Successful') {
        return Promise.resolve(spage);
    }
    else {
        return Promise.reject(fpage);
    }
};

const initApp = async () => {
    try {
        const user = await getUser();
        const status = await login(user);
        const page = await showPage(status);
        log(`${user.name} ${status} ${page}`)
    }
    catch (err) {
        console.log('error')
    }
    finally {
        console.log('done!!!')
    }
};
initApp();