class MainService {
       
    constructor($http, $window) {
        this.$http = $http;
        this.$window = $window;
        this.init();
        this.apiBaseUrl = 'http://localhost/files/bienvinida_api';
        this.userInfo = JSON.parse(this.$window.localStorage.getItem('user_logged'));
    }

    init() {
        // const userInfo = { id: 2, name: 'Ella', password:'asdasdasdasdasdasdasdsaad'};
        // this.$window.localStorage.setItem('user_logged', JSON.stringify(userInfo));
        // this.userInfo = this.$window.localStorage.getItem('user_logged');
        // console.log(this.isLoggedin());
    }
        
    login(data) {
        return this.$http.post(`${this.apiBaseUrl}/user/login`, data)
            .then((response) => {
                return response && response.data;
            });
    }

    isLoggedin() {
        const userInfo = JSON.parse(this.$window.localStorage.getItem('user_logged'));
        return (typeof userInfo  !== 'undefined' && userInfo !== null);
    }

    getLoggedIn() {
        return JSON.parse(this.userInfo);
    }

    setLoggedIn(data) {
        this.$window.localStorage.setItem('user_logged', JSON.stringify(data));
        this.userInfo = JSON.parse(this.$window.localStorage.getItem('user_logged'));
    }
}
app.service('mainService', MainService);