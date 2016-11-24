import angular from 'angular';
import uirouter from 'angular-ui-router';

import lodash from 'lodash';

import { config } from './app.config';
import { routerConfig } from './app.route';
import { runBlock } from './app.run';

// modules
import customer from './customer.module';
import product from './product.module';
import invoice from './invoice.module'; 

const MODULE_NAME = 'app';

angular.module(MODULE_NAME, [
  customer,
  product,
  invoice,
  uirouter,
  'restangular'
])
.config(config)
.config(routerConfig)
.run(runBlock);

export default MODULE_NAME;
