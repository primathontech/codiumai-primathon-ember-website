import Route from '@ember/routing/route';

export default class ServicesRoute extends Route {
  afterModel() {
    window.scrollTo(0, 0);
  }
}
