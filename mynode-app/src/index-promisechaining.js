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



function startApp() {

    // getUser(fakeUser => {
    //     log('getuser is called')
    //     //log(fakeUser);
    //     login(fakeUser, response => {
    //         log('login method is called!!');
    //         showPage(response, spage => {
    //             log('show page is called');
    //             log(spage)
    //         }, fpage => log(fpage))

    //     }, error => {
    //         log(error);
    //     })

    // }, error => log(error))

    getUser()
        .then(user => {
            log('get user is called');
            //login
            login(user).then(status => {
                log('Login is called');
                //show page
                showPage(status).then(page => {
                    log('show page is called')
                    log(page)
                }).catch(err => log(err));

            }).catch(err => log(err));
        })
        .catch(error => {
            log(error)
        })
        .finally(() => log('done!!'));

    //simple version

    getUser().then(user => {
        log('get user is called');
        return login(user);
    }).then(status => {
        log('Login is called');
        return showPage(status)
    }).then(page => {
        log('show page is called')
        log(page);
    }).catch(error => {
        log(error)
    }).finally(() => log('done!!'));
    //single body ; only return
    getUser()
        .then(user => login(user))
        .then(status => showPage(status))
        .then(log)
        .catch(log)
        .finally(() => log('done!!'));

    getUser()
        .then(login)
        .then(showPage)
        .then(log)
        .catch(log)
        .finally(() => log('done!!'));


}
startApp()
