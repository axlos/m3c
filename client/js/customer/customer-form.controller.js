export class CustomerFormController {

  constructor ($log, $state, $stateParams, Customer) {
    'ngInject';
    this.$stateParams = $stateParams;
    this.$state = $state;
    this.Customer = Customer;

    this.customer = {};
    this.fetchCustomer ();
  }

  fetchCustomer () {
    if (this.$stateParams.id) {
      this.Customer.one (this.$stateParams.id).get ().then ((response) => {
        this.customer = response;
      });
    }
  }

  onSave () {
    if (this.$stateParams.id) {
      this.customer.save ().then ((response) => {
        this.$state.go ('customer.list');
      });
    } else {
      this.Customer.post (this.customer).then ((response) => {
        this.$state.go ('customer.list');
      });
    }
  }


}
