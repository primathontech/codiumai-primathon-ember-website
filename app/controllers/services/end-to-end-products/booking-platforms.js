import Controller from '@ember/controller';

export default class ServicesEndToEndProductsBookingPlatformsController extends Controller {
  get faqTitle() {
    return this.model.faqData.title;
  }

  get faqData() {
    return this.model.faqData.data;
  }
}
