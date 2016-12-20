// import 'index.scss!';
import '../css/main.scss';

import angular from 'angular';
import uirouter from 'angular-ui-router';
import ngMaterial from 'angular-material';
import lodash from 'lodash';

import { config } from './app.config';
import { routerConfig } from './app.route';
import { runBlock } from './app.run';

// modules
import atom from './atom.module';

const MODULE_NAME = 'app';

angular.module(MODULE_NAME, [
  atom,
  uirouter,
  ngMaterial,
])
.config(config)
.config(routerConfig)
.run(runBlock);

export default MODULE_NAME;
