import Controller from '@ember/controller';

export default class ServicesEndToEndProductsBookingPlatformsController extends Controller {
  get faqTitle() {
    return this.model.faqData.title;
  }

  get faqData() {
    return this.model.faqData.data;
  }

  get bookingPlatformsHeading() {
    return this.model.bookingPlatformsData.heading;
  }

  get bookingPlatformsSubHeading() {
    return this.model.bookingPlatformsData.subHeading;
  }
}
