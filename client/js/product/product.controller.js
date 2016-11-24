export class ProductController {

  constructor ($scope, $log, Product) {
    'ngInject';

    Product.getList ().then ((products) => {
      this.products = products;
    });
  }

}
