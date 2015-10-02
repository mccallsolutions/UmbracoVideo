'use strict';

angular.module('umbraco')
    .directive('uvVimeo', function (providersResource) {
        return {
            scope: false, // Use parent scope
            templateUrl: '/App_Plugins/UmbracoVideo/Providers/Vimeo/editor.html',
            link: function (scope) {

                // Get provider
                var provider = providersResource.getProviderByAlias(scope.model.value, 'Vimeo');

                // Create provider property object
                scope.vimeo = {
                    Url: providersResource.getProviderPropertyValue(provider, "Url")
                };
            }
        }
    });