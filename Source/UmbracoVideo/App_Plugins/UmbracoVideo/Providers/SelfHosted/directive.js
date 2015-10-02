'use strict';

angular.module('umbraco')
    .directive('uvSelfhosted', function (providersResource) {
        return {
            scope: false, // Use parent scope
            templateUrl: '/App_Plugins/UmbracoVideo/Providers/SelfHosted/editor.html',            
            link: function (scope) {

                // Get provider
                var provider = providersResource.getProviderByAlias(scope.model.value, 'SelfHosted');

                // Create provider property object
                scope.selfHosted = {
                    Path: providersResource.getProviderPropertyValue(provider, "Path")
                };
            }
        }
    });