export function config ($logProvider, $httpProvider) {
  'ngInject';
  // Enable log
  $logProvider.debugEnabled(true);

  // CORS configuration
  $httpProvider.defaults.withCredentials = false;
  $httpProvider.defaults.useXDomain = true;
}
