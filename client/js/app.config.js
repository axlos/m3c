export function config ($logProvider, $httpProvider, RestangularProvider) {
  'ngInject';
  // Enable log
  $logProvider.debugEnabled(true);

  // CORS configuration
  $httpProvider.defaults.withCredentials = false;
  $httpProvider.defaults.useXDomain = true;
  RestangularProvider.setBaseUrl('http://localhost:8000/api');
}
