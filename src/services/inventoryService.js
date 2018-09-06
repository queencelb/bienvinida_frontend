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

      getCategories() {
        return this.$http.post(`${this.apiBaseUrl}/inventory/get-categories`)
            .then((response) => {
                return response && response.data;
            });
      }

      getMeasurements() {
        return this.$http.post(`${this.apiBaseUrl}/inventory/get-measurements`)
            .then((response) => {
                return response && response.data;
            });
      }

      addItem(data) {
        return this.$http.post(`${this.apiBaseUrl}/inventory/add-item`, data)
            .then((response) => {
                return response && response.data;
            });
      }
  }
app.service('inventoryService', InventoryServvice);