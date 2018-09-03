class DashboardService {
       
      constructor($http) {
          this.$http = $http;
      }
          
      getResults() {
        //   return this.$http.get('/foo/bar/');
        return 'test test test service';

      }
  }
app.service('dashboardService', DashboardService);