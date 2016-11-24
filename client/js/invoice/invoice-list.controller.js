export class InvoiceListController {

  constructor ($scope, $log, Invoice) {
    'ngInject';
    this.Invoice = Invoice;

    this.fetchInvoices ();
  }

  fetchInvoices () {
    this.Invoice.getList ().then((response) => {
      this.invoices = response;
    });
  }

  onRemoveInvoice (invoice) {
    invoice.remove ().then (() => {
      var index = this.invoices.indexOf(invoice);
      this.invoices.splice (index, 1);
    });
  }

}
