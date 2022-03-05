import EmberRouter from '@ember/routing/router';
import config from 'primathon-ember-web/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('contact');
  this.route('careers');
  this.route('about-us');
  this.route('services', function () {
    this.route('staff-augmentation');
    this.route('end-to-end-products');
    this.route('build-and-manage');
  });
  this.route('case-studies');
  this.route('job-desc');
  this.route('not-found', { path: '/*path' });
});
