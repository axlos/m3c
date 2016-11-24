import { invoiceRouterConfig } from './invoice/invoice.route';
import { InvoiceService } from './invoice/invoice.service';
import { InvoiceController } from './invoice/invoice.controller';
import { InvoiceFormController } from './invoice/invoice-form.controller';
import { InvoiceListController } from './invoice/invoice-list.controller';

const MODULE_NAME = 'invoice';

angular.module(MODULE_NAME, [
  'restangular', 'ui.router'
])
.config(invoiceRouterConfig)
.factory('Invoice', InvoiceService)
.controller('InvoiceController', InvoiceController)
.controller('InvoiceFormController', InvoiceFormController)
.controller('InvoiceListController', InvoiceListController)
;

export default MODULE_NAME;
