import Route from '@ember/routing/route';
import { ENDTOENDSERVICES } from '../../../constants/services/end-to-end-products';

export default class ServicesEndToEndProductsIndexRoute extends Route {
  async model() {
    const endToEndServices = ENDTOENDSERVICES;
    return { endToEndServices };
  }
  afterModel() {
    // Raising Typeerror on window.scroll on installing fastboot
    // window?.scrollTo(0, 0);
  }
}
