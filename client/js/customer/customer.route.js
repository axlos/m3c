export function customerRouterConfig ($stateProvider) {
  'ngInject';

  $stateProvider
  .state('customer', {
    abstract: true,
    url: '/customer',
    templateUrl: './js/app/customer/customer.html',
    controller: 'CustomerController',
    controllerAs: 'vm'
  })
  .state('customer.list', {
    url: '/list',
    templateUrl: './js/app/customer/list.html',
    controller: 'CustomerListController',
    controllerAs: 'vm'
  })
  .state('customer.new', {
    url: '/new',
    templateUrl: './js/app/customer/form.html',
    controller: 'CustomerFormController',
    controllerAs: 'vm'
  })
  .state('customer.edit', {
    url: '/edit/:id',
    templateUrl: './js/app/customer/form.html',
    controller: 'CustomerFormController',
    controllerAs: 'vm'
  });

}
