import Controller from '@ember/controller';

export default class ServicesEndToEndProductsWebAndAppDevelopmentController extends Controller {
  get faqTitle() {
    return this.model.faqData.title;
  }

  get faqData() {
    return this.model.faqData.data;
  }

  get webAndAppDevelopmentHeading() {
    return this.model.appDevelopmentData.heading;
  }

  get webAndAppDevelopmentSubHeading() {
    return this.model.appDevelopmentData.subHeading;
  }
}
