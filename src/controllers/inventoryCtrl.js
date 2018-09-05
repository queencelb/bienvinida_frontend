class InventoryCtrl {
    static injections() {
        return ['$scope', 'modalService', 'inventoryService'];
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
        this.inventoryService.getItems()
        .then((response) => {
            if(!response || !response.success) return;
                this.inventory_items = response.data;
        });
    }

    addItem() {
        const modalSettings = {
            templateUrl: './src/views/modals/add_item_inventory.html',
            controller: 'ModalInventoryCtrl',
            dataForComponent: { title: 'Add Item' },
          };

        this.modalService.open(modalSettings).result
          .then((data) => {
            console.log(data);
          }, () => {
            console.log('cancelled');
          });
    }
}

app.controller('InventoryCtrl', InventoryCtrl.ngConstruct());
