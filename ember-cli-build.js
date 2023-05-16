'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');

// const isProduction = EmberApp.env() === 'production';

module.exports = function (defaults) {
  let app = new EmberApp(defaults, {
    'ember-cli-babel': {
      includePolyfill: true,
    },
    fingerprint: {
      exclude: ['assets/*/*'],
    },
    babel: {
      plugins: [require.resolve('ember-auto-import/babel-plugin')],
    },
    'ember-composable-helpers': {
      only: ['noop', 'includes', 'inc'],
    },
    postcssOptions: {
      compile: {
        cacheExclude: [],
        cacheInclude: [/.*\.(css|scss|sass|hbs)$/],
        plugins: [require('postcss-import'), require('tailwindcss')('./tailwind.config.js'), require('autoprefixer')],
      },
    },
  });
  return app.toTree();
};
