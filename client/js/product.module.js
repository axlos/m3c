import { productRouterConfig } from './product/product.route';
import { ProductController } from './product/product.controller';
import { ProductService } from './product/product.service';
import { ProductListController } from './product/product-list.controller';
import { ProductFormController } from './product/product-form.controller';

const MODULE_NAME = 'product';

angular.module(MODULE_NAME, [
  'restangular', 'ui.router'
])
.config(productRouterConfig)
.factory('Product', ProductService)
.controller('ProductController', ProductController)
.controller('ProductListController', ProductListController)
.controller('ProductFormController', ProductFormController);

export default MODULE_NAME;
