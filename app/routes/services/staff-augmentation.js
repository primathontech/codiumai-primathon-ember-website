import Route from '@ember/routing/route';

export default class ServicesStaffAugmentationRoute extends Route {
  afterModel() {
    window.scrollTo(0, 0);
  }
}
