export class CustomerListController {

  constructor ($log, Customer) {
    'ngInject';
    this.Customer = Customer;

    this.fetchCustomer ();
  }

  fetchCustomer () {
    this.Customer.getList ().then ((customers) => {
      this.customers = customers;
    });
  }

  onRemoveCustomer (customer) {
    customer.remove ().then (() => {
      var index = this.customers.indexOf(customer);
      this.customers.splice (index, 1);
    });
  }

}
