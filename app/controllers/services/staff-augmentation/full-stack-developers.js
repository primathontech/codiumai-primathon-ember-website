import Controller from '@ember/controller';

export default class ServicesStaffAugmentationFullStackDevelopersController extends Controller {
  get fullStackDeveloperHeading() {
    return this.model.fullStackDevelopersData.heading;
  };

  get fullStackDeveloperSubHeading() {
    return this.model.fullStackDevelopersData.subHeading;
  };

  get faqTitle() {
    return this.model.faqData.title;
  };

  get faqData() {
    return this.model.faqData.data;
  };
};
