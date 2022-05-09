import Route from '@ember/routing/route';

export default class ContactRoute extends Route {
  afterModel() {
    // Raising Typeerror on window.scroll on installing fastboot
    // window?.scrollTo(0, 0);
  }
}
