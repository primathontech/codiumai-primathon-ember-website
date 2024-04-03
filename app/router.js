import EmberRouter from '@ember/routing/router';
import config from 'primathon-ember-web/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('contact');
  this.route('careers');
  this.route('open-position');
  this.route('about-us');
  this.route('services', function () {
    this.route('staff-augmentation', function () {
      this.route('frontend-developers');
      this.route('product-managers');
      this.route('backend-developers');
      this.route('uiux-designers');
      this.route('android-developers');
      this.route('python-developers');
      this.route('angular-developers');
      this.route('javascript-developers');
      this.route('quality-analysts');
      this.route('platform');
    });
    this.route('end-to-end-products', function () {
      this.route('booking-platforms');
      this.route('shopify-stores');
      this.route('dashboard-and-data-visualization');
      this.route('admin-panels-and-cms');
      this.route('web-and-mobile-app-development');
      this.route('ai-ml-based-recommendation-engines');
      this.route('erc20-token');
      this.route('smart-contract');
      this.route('chatgpt');
      this.route('ai-chatbot');
      this.route('ai-discovery');
    });
    this.route('build-and-manage');
  });
  this.route('technologies', function () {
    this.route('node-js');
    this.route('react-js');
    this.route('react-native');
    this.route('angular-js');
    this.route('javascript');
    this.route('android');
    this.route('python');
    this.route('ios');
    this.route('vue');
    this.route('swift');
  });
  this.route('case-studies', function () {
    this.route('case-study', { path: '/:post_id' });
    // this.route('index', { path: '/' });
  });
  this.route('job-desc');
  this.route('not-found', { path: '/*path' });
  this.route('ember-js-development-services');
  this.route('sitemap');
});

Router.reopen({
  // eslint-disable-next-line ember/no-function-prototype-extensions
  doSomethingOnUrlChange: function () {
    window?.scrollTo(0, 0); // for scroll to top of the page on change route
    window?.gtag?.('config', 'G-JE8T1MS4RZ', {
      page_path: this.url,
    });
  }.on('didTransition'),
});
