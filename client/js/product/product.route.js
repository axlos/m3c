export function productRouterConfig ($stateProvider) {
  'ngInject';

  $stateProvider
  .state('product', {
    url: '/product',
    templateUrl: './js/app/product/product.html',
    controller: 'ProductController',
    controllerAs: 'vm'
  })
  .state('product.list', {
    url: '/list',
    templateUrl: './js/app/product/list.html',
    controller: 'ProductListController',
    controllerAs: 'vm'
  })
  .state('product.new', {
    url: '/new',
    templateUrl: './js/app/product/form.html',
    controller: 'ProductFormController',
    controllerAs: 'vm'
  })
  .state('product.edit', {
    url: '/edit/:id',
    templateUrl: './js/app/product/form.html',
    controller: 'ProductFormController',
    controllerAs: 'vm'
  });

}
