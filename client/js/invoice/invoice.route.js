export function invoiceRouterConfig ($stateProvider) {
  'ngInject';

  $stateProvider
  .state('invoice', {
    abstract: true,
    url: '/invoice',
    templateUrl: './js/app/invoice/invoice.html',
    controller: 'InvoiceController',
    controllerAs: 'vm'
  })
  .state('invoice.list', {
    url: '/list',
    templateUrl: './js/app/invoice/list.html',
    controller: 'InvoiceListController',
    controllerAs: 'vm'
  })
  .state('invoice.new', {
    url: '/new',
    templateUrl: './js/app/invoice/form.html',
    controller: 'InvoiceFormController',
    controllerAs: 'vm'
  })
  .state('invoice.edit', {
    url: '/edit/:id',
    templateUrl: './js/app/invoice/form.html',
    controller: 'InvoiceFormController',
    controllerAs: 'vm'
  });

}
