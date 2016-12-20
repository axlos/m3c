export function atomRouterConfig ($stateProvider) {
  'ngInject';

  $stateProvider
  .state('atom', {
    abstract: true,
    url: '/atom',
    templateUrl: 'views/atom/atom.html',
    controller: 'AtomController',
    controllerAs: 'vm'
  })
  .state('atom.list', {
    url: '/list',
    templateUrl: 'views/atom/browse.html',
    controller: 'AtomBrowseController', 
    controllerAs: 'vm'
  });

}
