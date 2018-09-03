class DashboardCtrl {
    static injections() {
        return ['$http', 'dashboardService'];
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
        this.chart = {
            data:[[65, 59, 80, 81, 56, 55, 40],
            [28, 48, 40, 19, 86, 27, 90]],
            labels: ['2006', '2007', '2008', '2009', '2010', '2011', '2012'],
            series: ['Series A', 'Series B'],
        };
        console.log(this.chart);
        this.test = this.dashboardService.getResults();
    }
}

app.controller('DashboardCtrl', DashboardCtrl.ngConstruct());
