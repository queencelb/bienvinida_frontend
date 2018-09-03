class MainCtrl {
    static injections() {
        return ['$scope', '$state', 'mainService'];
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
        console.log(this.$state.current);
    }

    login(username, password) {
        console.log(username, password);
    }
}

app.controller('MainCtrl', MainCtrl.ngConstruct());
