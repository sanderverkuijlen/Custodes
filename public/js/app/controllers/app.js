app.controller('AppCtrl', function AppCtrl($scope){

    $scope.page = 'login';

    $scope.goToPage = function(page, effect_in, effect_out){

        $scope.page = page;

        //TODO: effect_in, effect_out
    }
});