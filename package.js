Package.describe({
  name: 'trendyshop:paypal',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'Paypal package for TrendyShop',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Npm.depends({
  'paypal-adaptive': '0.4.2'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');
  api.addFiles('paypal.js', 'server');
  api.export('Paypal', 'server');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('trendy:paypal');
  api.addFiles('paypal-tests.js');
});
