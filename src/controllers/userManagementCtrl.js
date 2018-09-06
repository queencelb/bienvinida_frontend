class UserManagementCtrl {
    static injections() {
        return ['$scope', 'modalService', 'userService'];
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
        this.getUsers();
    }

    getUsers() {
        this.userService.getUsers()
            .then((response) => {
                if(!response || !response.success) return;
                    this.users = response.data;
            });
    }

    // addItem() {
    //     const modalSettings = {
    //         templateUrl: './src/views/modals/add_item_inventory.html',
    //         controller: 'ModalInventoryCtrl',
    //         dataForComponent: { title: 'Add Item' },
    //       };

    //     this.modalService.open(modalSettings).result
    //       .then(() => {
    //         this.getItems();
    //       }, () => {
    //         console.log('cancelled');
    //       });
    // }
}

app.controller('UserManagementCtrl', UserManagementCtrl.ngConstruct());
