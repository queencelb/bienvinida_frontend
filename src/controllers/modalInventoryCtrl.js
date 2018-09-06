class ModalInventoryCtrl {
    static injections() {
        return ['$uibModalInstance', 'props', 'inventoryService', 'mainService', 'toaster'];
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
        this.getCategories();
        this.getMeasurements();
    }

    getCategories() {
        this.inventoryService.getCategories()
            .then((response) => {
                if(!response || !response.success) return;
                    this.inventory_categories = response.data;
            });
    }

    getMeasurements() {
        this.inventoryService.getMeasurements()
            .then((response) => {
                if(!response || !response.success) return;
                    this.inventory_measurements = response.data;
            });
    }

    addItem(data) {
        const modifiedBy = this.mainService.userInfo.id;
        this.inventoryService.addItem({ ...data, modifiedBy })
            .then((response) => {
                if(!response || !response.success) return;
                this.toaster.pop('success', 'Success', 'Item added successfully!', 800);
                this.close();
            });
    }

    close() {
        this.$uibModalInstance.close();
    }
}

app.controller('ModalInventoryCtrl', ModalInventoryCtrl.ngConstruct());
