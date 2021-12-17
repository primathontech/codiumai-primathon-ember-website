import Route from '@ember/routing/route';

export default class BlogRoute extends Route {
  afterModel() {
    window.scrollTo(0, 0);
  }
}
