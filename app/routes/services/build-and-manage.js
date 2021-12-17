import Route from '@ember/routing/route';

export default class ServicesBuildAndManageRoute extends Route {
  afterModel() {
    window.scrollTo(0, 0);
  }
}
