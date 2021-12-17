import Route from '@ember/routing/route';

export default class ContactRoute extends Route {
  afterModel() {
    window.scrollTo(0, 0);
  }
}
