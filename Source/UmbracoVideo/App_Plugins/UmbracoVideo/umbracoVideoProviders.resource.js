angular.module("umbraco.resources")
    .factory("providersResource", function () {
        return {
            init: function (storedProviders) {

                return storedProviders[0] === undefined ? this.loadProvidersFromDisk() : storedProviders;
            },
            loadProvidersFromDisk: function() {

                return {
                    'Providers': [
                        {
                            'Id': 'selfHosted',
                            'Alias': 'SelfHosted',
                            'Name': 'Self Hosted',
                            'IsSelected': true,
                            'Properties': [
                                {
                                    'Key': 'Path',
                                    'Value': '//media'
                                }
                            ]
                        },
                        {
                            'Id': 'vimeo',
                            'Alias': 'Vimeo',
                            'Name': 'Vimeo',
                            'IsSelected': false,
                            'Properties': [
                                {
                                    'Key': 'Url',
                                    'Value': 'http://'
                                }
                            ]
                        }
                    ]
                };
            },
            getSelectedProvider: function (providers) {

                var selectedVideoProvider = providers.Providers[0];

                for (var i = 0; i < providers.Providers.length; i++) {
                    if (providers.Providers[i].IsSelected) {
                        selectedVideoProvider = providers.Providers[i];
                        break;
                    }
                }

                return selectedVideoProvider;
            },
            getProviderByAlias: function (providers, alias) {

                var provider = providers.Providers[0];

                for (var i = 0; i < providers.Providers.length; i++) {
                    if (providers.Providers[i].Alias === alias) {
                        provider = providers.Providers[i];
                        break;
                    }
                }

                return provider;
            },
            getProviderPropertyValue: function (provider, key) {

                var propertyValue = null;

                for (var i = 0; i < provider.Properties.length; i++) {
                    if (provider.Properties[i].Key === key) {
                        propertyValue = provider.Properties[i].Value;
                        break;
                    }
                }

                return propertyValue;
            }
        };
    });