export function InvoiceService (Restangular) {
  'ngInject';

  return Restangular.service('invoices');
}
