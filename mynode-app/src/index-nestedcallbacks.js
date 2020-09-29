//async composition; callback nesting;the out put of one callback will be input to next on

//any biz logic have two things; success, failure.
//two callbacks- one for success and another for failure
//resolve-success, reject-failures
const { log } = console;

const getUser = (resolve, reject) => {
    //biz logic
    let fakeUser = {
        id: 2,
        name: 'admin'
    }
    //fakeUser = null;
    let errors = 'User not found'
    if (fakeUser) {
        setTimeout(resolve, 100, fakeUser)
    } else {
        setTimeout(reject, 100, errors)
    }
};

const login = (user, resolve, reject) => {
    let status = 'Login Successful';
    let errors = 'Login failed';
    if (user.name === 'admin') {
        setTimeout(resolve, 100, status)
    }
    else {
        setTimeout(reject, 100, errors)
    }
};

const showPage = (status, resolve, reject) => {
    let spage = 'You are admin';
    let fpage = 'You are guest';
    if (status === 'Login Successful') {
        setTimeout(resolve, 100, spage)
    }
    else {
        setTimeout(reject, 100, fpage)
    }
};



function startApp() {

    getUser(fakeUser => {
        log('getuser is called')
        //log(fakeUser);
        login(fakeUser, response => {
            log('login method is called!!');
            showPage(response, spage => {
                log('show page is called');
                log(spage)
            }, fpage => log(fpage))

        }, error => {
            log(error);
        })

    }, error => log(error))

}
startApp()

