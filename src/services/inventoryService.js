class InventoryServvice {
       
      constructor($http, mainService) {
          this.$http = $http;
          this.mainService = mainService;
          this.apiBaseUrl = this.mainService.apiBaseUrl;
      }
          
      getItems() {
        return this.$http.post(`${this.apiBaseUrl}/inventory/get-items`)
            .then((response) => {
                return response && response.data;
            });

      }
  }
app.service('inventoryService', InventoryServvice);