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
  this.route('custom-ai-solutions');
  this.route('services', function () {
    this.route('staff-augmentation', function () {
      this.route('hire-frontend-developers');
      this.route('product-managers');
      this.route('hire-backend-developers');
      this.route('uiux-designers');
      this.route('hire-android-developers');
      this.route('hire-python-developers');
      this.route('hire-angular-developers'); // redirect to hire-angular-js-developers in route file
      this.route('hire-angular-js-developers');
      this.route('hire-javascript-developers');
      this.route('hire-react-developers'); // redirect to hire-react-js-developers in route file
      this.route('hire-react-js-developers');
      this.route('hire-ios-developers');
      this.route('hire-swift-developers');
      this.route('quality-analysts');
      this.route('platform');
      this.route('hire-vue-developers');
      this.route('hire-ember-developers'); // redirect to hire-ember-js-developers in route file
      this.route('hire-ember-js-developers');
    });
    this.route('ai-hub', function () {
      this.route('ai-consulting-services');
      this.route('custom-ai-solutions');
      this.route('ai-strategy');
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
    });
    this.route('build-and-manage');
  });
  this.route('solutions', function () {
    this.route('search-gpt');
    this.route('customer-behavior-analysis-tool');
    this.route('ai-chatbot');
    this.route('ai-discovery');
    this.route('ai-stock-predictor');
    this.route('ai-credit-scoring');
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
  this.route('privacy-policy');
  this.route('thank-you');
});

Router.reopen({
  // eslint-disable-next-line ember/no-function-prototype-extensions
  doSomethingOnUrlChange: function () {
    if (window?.scrollTo) {
      window?.scrollTo(0, 0); // for scroll to top of the page on change route
    }
    window?.gtag?.('config', 'G-JE8T1MS4RZ', {
      page_path: this.url,
    });
  }.on('didTransition'),
});
