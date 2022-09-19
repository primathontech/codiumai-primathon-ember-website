import Route from '@ember/routing/route';
import { BOOKING_PLATFORMS } from '../../../constants/services/end-to-end-products';
import { FAQ_DATA } from '../../../constants/services/faq';
import { inject as service } from '@ember/service';

export default class ServicesEndToEndProductsBookingPlatformsRoute extends Route {
  @service headData;
  async model() {
    const faqData = FAQ_DATA;
    const bookingPlatformsData = BOOKING_PLATFORMS;
    return { faqData, bookingPlatformsData };
  }

  beforeModel() {
    this.headData.title = 'Best Booking System Software Provider Gurgaon | Primathon';
    this.headData.description =
      'Primathon is the best booking system software provider Gurgaon.  We are the best online scheduling software company India and online booking system software company Noida';
    this.headData.keywords =
      'best booking system software provider gurgaon top appointment scheduling software noida best online scheduling software company india online booking system software company noida ';
  }
}
