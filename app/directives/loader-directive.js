angular.module('auApp', [])
.directive('loading', function () {
  return {
    restrict: 'E',
    replace: true,
    template: '<div class="loading">' +
              '<img src="http://www.nasa.gov/multimedia/videogallery/ajax-loader.gif" width="20" height="20"/>' +
              '</div>',
    link: function(scope, element, attr) {
      scope.$watch('loading', function(val) {
        if (val)
          $(element).show();
        else
          $(element).hide();
      });
    }
  }
})

.controller('policyCtrl', function($scope, $http))
