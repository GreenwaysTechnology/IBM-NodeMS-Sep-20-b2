//promise constructors ; Promise constructors are used to convert existing callback
//based programming

//new Promise(callbackfunction(res,reject){logic});

const { log } = console;

const validate = (userName = 'admin', password = 'admin') => {
    return new Promise((resolve, reject) => {
        if (userName === 'adminl̥' && password === 'admin') {
           //return status with promise , convert callback based into promise          
            setTimeout(resolve, 1000, 'Login Success')
        } else {
            setTimeout(reject, 1000, 'Login Failed')

        }
    });

}

function startApp() {
    validate()
        .then(log)
        .catch(log);
}
startApp();