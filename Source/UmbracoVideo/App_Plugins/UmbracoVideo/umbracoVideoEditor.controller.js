'use strict';

angular.module('umbraco')
    .controller('ShaneBru.UmbracoVideo', function($scope, providersResource) {

        $scope.model.value = providersResource.init($scope.model.value);

        $scope.selectedVideoProvider = providersResource.getSelectedProvider($scope.model.value);
    });