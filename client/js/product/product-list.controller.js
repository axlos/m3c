export class ProductListController {

  constructor ($log, Product) {
    'ngInject';
    this.Product = Product;

    this.fetchProduct ();
  }

  fetchProduct () {
    this.Product.getList ().then ((products) => {
      this.products = products;
    });
  }

  onRemoveProduct (product) {
    product.remove ().then (() => {
      var index = this.products.indexOf(product);
      this.products.splice (index, 1);
    });
  }

}
