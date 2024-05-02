import Application from '@ember/application';
import Resolver from 'ember-resolver';
import loadInitializers from 'ember-load-initializers';
import config from 'primathon-ember-web/config/environment';

export default class App extends Application {
  modulePrefix = config.modulePrefix;
  podModulePrefix = config.podModulePrefix;
  Resolver = Resolver;
}

loadInitializers(App, config.modulePrefix);

// Load Google Analytics script
Ember.run.scheduleOnce('afterRender', this, function () {
  //Google Tag Manager
  let script = document.createElement('script');
  script.src = `https://www.googletagmanager.com/gtag/js?id=G-EEXF1B3HZD`;
  script.async = true;
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  function gtag() {
    dataLayer.push(arguments);
  }
  gtag('js', new Date());

  gtag('config', 'G-EEXF1B3HZD');

  (function (w, d, s, l, i) {
    w[l] = w[l] || [];
    w[l].push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' });
    var f = d.getElementsByTagName(s)[0],
      j = d.createElement(s),
      dl = l != 'dataLayer' ? '&l=' + l : '';
    j.async = true;
    j.src = 'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
    f.parentNode.insertBefore(j, f);
  })(window, document, 'script', 'dataLayer', 'GTM-TRCR27CH');
  //End Google Tag Manager

  // Calendly
  let calendlyScript = document.createElement('script');
  calendlyScript.src = 'https://assets.calendly.com/assets/external/widget.js';
  calendlyScript.async = true;
  document.head.appendChild(calendlyScript);

  let calendlyLink = document.createElement('link');
  calendlyLink.href = 'https://assets.calendly.com/assets/external/widget.css';
  calendlyLink.rel = 'stylesheet';
  document.head.appendChild(calendlyLink);
  // End calendly
});
