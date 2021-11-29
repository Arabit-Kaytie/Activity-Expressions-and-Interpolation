(function () {
    'use strict';
    angular.module('activity4', [])
    .controller('controller', controller);
    controller.inject = ['$scope'];
    function controller($scope) {
        $scope.cname = "Blue";
        $scope.changebg = "picture1";

        $scope.text = function () {
            return "Click Here!"
        };

        $scope.btn =function () {
            $scope.changebg = "picture2";
        }
    }

}) ();
