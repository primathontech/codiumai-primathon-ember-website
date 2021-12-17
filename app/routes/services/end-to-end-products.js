import Route from '@ember/routing/route';

export default class ServicesEndToEndProductsRoute extends Route {
  afterModel() {
    window.scrollTo(0, 0);
  }
}
