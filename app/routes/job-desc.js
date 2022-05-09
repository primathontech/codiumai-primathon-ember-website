import Route from '@ember/routing/route';

export default class JobDesc extends Route {
  model(_, transition) {
    return { id: transition?.to?.queryParams.id };
  }

  afterModel() {
    // Raising Typeerror on window.scroll on installing fastboot
    // window?.scrollTo(0, 0);
  }
}
