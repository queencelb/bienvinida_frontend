class MainCtrl {
    static injections() {
        return ['$scope', '$state', '$window', '$timeout', 'mainService'];
    }
    static ngConstruct() {
        return [...this.injections().map(el=>el.split(':').pop()), this];
    }
    constructor(...args) {
        this.constructor.injections().forEach((el,index) => this._defineKey(el,args[index]));
        this.setupController(args);
    }
    _defineKey(key, value) {
        Object.defineProperty(this, key.split(':')[0], {enumerable: true, value});
    }
    setupController(args) {
        this.init();
    }
    init() {
        const loggedIn = this.mainService.isLoggedin();
        console.log(!loggedIn);
        if (!loggedIn) {
            this.$timeout(() => {
                this.$state.go('login');
            });
        }
        
        if(loggedIn && this.$state.current.name === 'login') {
            this.$timeout(() => {
                this.$state.go('dashboard');
                });
        } else {
            this.$timeout(() => {
                this.$state.go('login');
            });
        }

    }

    login(username, password) {
        const data = { username, password };
        this.mainService.login(data)
            .then((response) => {
                if(response && response.success) {
                    this.$window.localStorage.setItem('user_logged', JSON.stringify(response.data));
                    this.mainService.setLoggedIn(response.data);
                    this.$state.go('dashboard');
                } else {
                    this.errorLogin = true;
                }
            });
    }

    logout() {
        this.$window.localStorage.removeItem('user_logged');
        this.$state.go('login');
    }
}

app.controller('MainCtrl', MainCtrl.ngConstruct());
