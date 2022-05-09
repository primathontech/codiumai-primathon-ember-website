import Route from '@ember/routing/route';
import { FAQ_DATA } from '../../../constants/services/faq';

export default class ServicesEndToEndProductsBookingPlatformsRoute extends Route {
  async model() {
    const faqData = FAQ_DATA;
    return { faqData };
  }

  afterModel() {
    // Raising Typeerror on window.scroll on installing fastboot
    // window?.scrollTo(0, 0);
  }
}
