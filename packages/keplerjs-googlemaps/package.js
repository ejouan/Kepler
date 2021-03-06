
Package.describe({
  name: "keplerjs:googlemaps",
  summary: "Keplerjs Goole Maps API",
  version: "1.1.0",
  git: "https://github.com/Keplerjs/Kepler.git"
});

Npm.depends({
  "googlemaps": "0.1.9",
});

Package.onUse(function (api) {

  api.versionsFrom(['METEOR@1.0']);

  api.use([
    'keplerjs:core@1.1.0',
  ]);

  api.addFiles([
    'plugin.js',
    'i18n/it.js',
    'i18n/en.js',
	'i18n/de.js'
  ]);

  api.addFiles([
  	'client/Place_streetview.js',
    'client/views/panels.html',
    'client/views/panels.js',
  ],'client');

  api.addFiles([
    'server/Googlemaps.js',
    'server/streetview.js',
  ],'server');

});
