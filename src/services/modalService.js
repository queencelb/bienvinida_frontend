class ModalService {
  constructor($uibModal) {
    this.$uibModal = $uibModal;
  }

  open(settings) {
    const { templateUrl, controller, dataForComponent, modalSize } = settings;
    const modalInstance = this.$uibModal.open({
      windowTemplateUrl: `./src/views/modals/window.html`,
      templateUrl,
      backdrop: 'static',
      keyboard: true,
      controller,
      controllerAs: 'vm',
      size: modalSize || 'lg',
      resolve: {
        props: () => { return dataForComponent },
      },
    });
    return modalInstance;
  }

  close() {
    this.$uibModal.close();
  }
  
}
app.service('modalService', ModalService);