import Route from '@ember/routing/route';
import { BOOKING_PLATFORMS } from '../../../constants/services/end-to-end-products';
import { FAQ_DATA } from '../../../constants/services/faq';

export default class ServicesEndToEndProductsBookingPlatformsRoute extends Route {
  async model() {
    const faqData = FAQ_DATA;
    const bookingPlatformsData = BOOKING_PLATFORMS;
    return { faqData, bookingPlatformsData };
  }

  afterModel() {
    // Raising Typeerror on window.scroll on installing fastboot
    // window?.scrollTo(0, 0);
  }
}
