export function routerConfig ($stateProvider, $urlRouterProvider) {
  'ngInject';

  $urlRouterProvider.otherwise('invoice/list');
}
