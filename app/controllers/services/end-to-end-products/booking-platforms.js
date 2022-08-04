import Controller from '@ember/controller';

export default class ServicesEndToEndProductsBookingPlatformsController extends Controller {
  get faqTitle() {
    return this.model.faqData.title;
  }

  get faqData() {
    return this.model.faqData.data;
  }

  get bookingPlatformsAbout() {
    return this.model.bookingPlatformsData.about;
  }

  get bookingPlatformsTitle() {
    return this.model.bookingPlatformsData.title;
  }

  get bookingPlatformsDescription() {
    return this.model.bookingPlatformsData.description;
  }

  get bookingPlatformsImg() {
    return this.model.bookingPlatformsData.imgUrl;
  }

  get bookingPlatformsBg() {
    return this.model.bookingPlatformsData.bg;
  }

  get bookingPlatformsCircularList() {
    return this.model.bookingPlatformsData.circular_list;
  }

  get bookingPlatformsArrowList() {
    return this.model.bookingPlatformsData.arrow_list;
  }

  get bookingPlatformsLinearList() {
    return this.model.bookingPlatformsData.linear_list;
  }
}
