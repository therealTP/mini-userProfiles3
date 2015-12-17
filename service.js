var app = angular.module('userProfiles');

app.service('mainService', function($http, $q) {

  this.getUsers = function() {
    var deferred = $q.defer(); // deferrer object
    $http({
      method: 'GET',
      url: 'http://reqres.in/api/users?page=1'
    }).then(
      function(result) {
        var dataWeNeed = result.data.data;
        for (var i = 0; i < dataWeNeed.length; i++) {
          dataWeNeed[i].first_name = 'Ralf';
        }
        return deferred.resolve(dataWeNeed);
      },
      function(result) {
        return deferred.reject(result.status);
      }
    );
    return deferred.promise;
  };
});
