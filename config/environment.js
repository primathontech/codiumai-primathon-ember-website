'use strict';

module.exports = function (environment) {
  let ENV = {
    modulePrefix: 'primathon-ember-web',
    environment,
    rootURL: '/',
    locationType: 'history',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        EMBER_NATIVE_DECORATOR_SUPPORT: true,
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false,
      },
    },

    // Add deployment pipeline configuration here
    pipeline: {
      gzip: {
        filePattern: '**/*.{hbs,js,css,json,ico,map,xml,txt,svg,eot,ttf,woff,woff2}',
        ignorePattern: '**/*.gz',
      },
      // other plugins in the pipeline...
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    },
    fastboot: {
      hostWhitelist: ['primathon.in', 'amazonaws.com', /^localhost:\d+$/],
    },
  };

  if (environment === 'development') {
    ENV.APP.LOG_RESOLVER = true;
    ENV.APP.LOG_ACTIVE_GENERATION = true;
    ENV.APP.LOG_TRANSITIONS = true;
    ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    ENV.APP.LOG_VIEW_LOOKUPS = true;

    // CDN URL ...................................................
    ENV.ASSETS_CDN_URL = null;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
    ENV.APP.autoboot = false;

    // CDN URL ...................................................
    ENV.ASSETS_CDN_URL = null;
  }

  if (environment === 'production') {
    // here you can enable a production-specific feature
    // CDN URL ...................................................
    ENV.ASSETS_CDN_URL = 'https://d1gh5idcovu9p3.cloudfront.net';
  }

  return ENV;
};
