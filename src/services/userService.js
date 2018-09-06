class UserService {
       
    constructor($http, mainService) {
        this.$http = $http;
        this.mainService = mainService;
        this.apiBaseUrl = this.mainService.apiBaseUrl;
    }
        
    getUsers() {
      return this.$http.post(`${this.apiBaseUrl}/user/get-users`)
          .then((response) => {
              return response && response.data;
          });
    }   
}
app.service('userService', UserService);