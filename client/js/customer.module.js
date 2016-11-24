import { customerRouterConfig } from './customer/customer.route';
import { CustomerService } from './customer/customer.service';
import { CustomerController } from './customer/customer.controller';
import { CustomerListController } from './customer/customer-list.controller';
import { CustomerFormController } from './customer/customer-form.controller';

const MODULE_NAME = 'customer';

angular.module(MODULE_NAME, [
  'restangular', 'ui.router'
])
.config(customerRouterConfig)
.factory('Customer', CustomerService)
.controller('CustomerController', CustomerController)
.controller('CustomerListController', CustomerListController)
.controller('CustomerFormController', CustomerFormController);

export default MODULE_NAME;
