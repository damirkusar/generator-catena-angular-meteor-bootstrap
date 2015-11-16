angular.module('<%= appName %>', [
  'angular-meteor',
  'ui.router',
  'ui.bootstrap',
]);

function onReady() {
  angular.bootstrap(document, ['<%= appName %>']);
}

if (Meteor.isCordova)
  angular.element(document).on("deviceready", onReady);
else
  angular.element(document).ready(onReady);
