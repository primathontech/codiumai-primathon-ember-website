import Controller from '@ember/controller';

export default class ServicesStaffAugmentationBackendDevelopersController extends Controller {
  get backendDevelopersHeading() {
    return this.model.backendData.heading;
  };

  get backendDeveloperSubHeading() {
    return this.model.backendData.subHeading;
  };

  get faqTitle() {
    return this.model.faqData.title;
  };

  get faqData() {
    return this.model.faqData.data;
  };
};
