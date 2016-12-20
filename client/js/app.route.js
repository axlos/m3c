export function routerConfig ($stateProvider, $urlRouterProvider) {
  'ngInject';

  $urlRouterProvider.otherwise('/atom/list');
}
