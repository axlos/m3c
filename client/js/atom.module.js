import { atomRouterConfig } from './atom/atom.route';
import { AtomController } from './atom/atom.controller';
import { AtomBroseController } from './atom/atom-browse.controller';

const MODULE_NAME = 'atom';

angular.module(MODULE_NAME, [
  'ui.router'
])
.config(atomRouterConfig)
.controller('AtomController', AtomController)
.controller('AtomBroseController', AtomBroseController);

export default MODULE_NAME;
