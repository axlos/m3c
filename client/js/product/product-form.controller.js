export class ProductFormController {

  constructor ($log, $state, $stateParams, Product) {
    'ngInject';
    this.$stateParams = $stateParams;
    this.$state = $state;
    this.Product = Product;

    this.product = {};
    this.fetchProduct ();
  }

  fetchProduct () {
    if (this.$stateParams.id) {
      this.Product.one (this.$stateParams.id).get ().then ((response) => {
        this.product = response;
      });
    }
  }

  onSave () {
    if (this.$stateParams.id) {
      this.product.save ().then ((response) => {
        this.$state.go ('product.list');
      });
    } else {
      this.Product.post (this.product).then ((response) => {
        this.$state.go ('product.list');
      });
    }
  }


}
