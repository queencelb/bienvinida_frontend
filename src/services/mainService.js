class MainService {
       
    constructor($http, $window) {
        this.$http = $http;
        this.$window = $window;
        this.init();
    }

    init() {
        const userInfo = { id: 2, name: 'Ella', password:'asdasdasdasdasdasdasdsaad'};
        this.$window.localStorage.setItem('user_logged', JSON.stringify(userInfo));
        this.userInfo = this.$window.localStorage.getItem('user_logged');
        console.log(this.isLoggedin());
    }
        
    login() {
      //   return this.$http.get('/foo/bar/');
      return 'test test test service';

    }

    isLoggedin() {
        return !!this.userInfo;
    }
}
app.service('mainService', MainService);