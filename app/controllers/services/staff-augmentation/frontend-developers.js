import Controller from '@ember/controller';

export default class ServicesStaffAugmentationFrontendDeveloperController extends Controller {
  get frontendDeveloperHeading() {
    return this.model.frontendData.heading;
  };

  get frontendDeveloperSubHeading() {
    return this.model.frontendData.subHeading;
  };

  get faqTitle() {
    return this.model.faqData.title;
  };

  get faqData() {
    return this.model.faqData.data;
  };
};
