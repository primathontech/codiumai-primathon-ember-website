import Route from '@ember/routing/route';

export default class CareersRoute extends Route {
  afterModel() {
    window.scrollTo(0, 0);
  }
}
