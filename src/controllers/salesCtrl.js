class SalesCtrl {
    static injections() {
        return ['$scope'];
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
        // this.$compileProvider.preAssignBindingsEnabled(true);
        console.log(this.$scope);
        this.options = {
            scrollbarV: false
          };
     
          this.data = [
            { name: 'Austin', gender: 'Male' },
            { name: 'Marjan', gender: 'Male' }
          ];
    }
}

app.controller('SalesCtrl', SalesCtrl.ngConstruct());
