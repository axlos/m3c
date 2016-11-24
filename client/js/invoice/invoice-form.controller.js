export class InvoiceFormController {

  constructor ($log, $stateParams, Invoice, Product, Customer) {
    'ngInject';
    this.$stateParams = $stateParams;
    this.Invoice = Invoice;
    this.Customer = Customer;
    this.Product = Product;

    this.fetchCustomers ();
    this.fetchProducts ();
    this.items = [];
    this.invoice = {
      discount: 0
    };

    this.fetchInvoice ();
  }

  fetchInvoice () {
    if (this.$stateParams.id) {
      this.Invoice.one (this.$stateParams.id).get ().then ((response) => {
        this.invoice = response;
        this.fetchItems ();
      });
    } else {
      this.Invoice.post (this.invoice).then ((response) => {
        this.invoice = response;
        this.fetchItems ();
      });
    }
  }

  fetchItems () {
    // get Items
    this.Invoice.one(this.invoice.id).getList('items').then ((items) => {
      this.items = items;
    });
  }

  updateInvoice () {
    this.invoice.total = this.total ();
    this.invoice.save ();
  }

  updateItem (item) {
    item.save ().then ((response) => {
      item = response;
      this.updateInvoice ();
    });
  }

  fetchCustomers () {
    this.Customer.getList ().then ((customers) => {
      this.customers = customers;
    });
  }

  fetchProducts () {
    this.Product.getList ().then ((products) => {
      this.products = products;
    });
  }

  onAddProduct () {
    this.invoice.one('items').post ().then ((response) => {
      this.items.push (response);
    });
    //this.updateInvoice ();
  }

  onRemoveProduct (item) {
    item.remove ().then (() => {
      var index = this.items.indexOf(item);
      this.items.splice (index, 1);
    });
  }

  subTotal () {
    var subTotal = 0;
    angular.forEach(this.items, (item) => {
      if (item.product_id) {
        var product = this.getProductById (parseInt (item.product_id));
        subTotal += item.quantity * product.price;
      }
    });
    return subTotal;
  }

  total () {
    var subtotal = this.subTotal ();
    return subtotal - (this.subTotal () * (this.invoice.discount / 100));
  }

  getProductById (id) {
    var product = undefined;
    for (let i = 0; i < this.products.length; i++) {
      if (this.products[i].id === id) {
        product = this.products[i];
        break;
      }
    }
    return product;
  }

  onAddCustomer () {
    var name = prompt("Please enter customer name");
    if (name != null) {
      this.Customer.post ({
        name: name
      }).then ((response) => {
        this.customers.push (response);
      });
    }
  }

}
