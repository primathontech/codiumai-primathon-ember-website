import Controller from '@ember/controller';

export default class ServicesStaffAugmentationProductManagersController extends Controller {
  get productManagersHeading() {
    return this.model.productManagersData.heading;
  };

  get productManagersSubHeading() {
    return this.model.productManagersData.subHeading;
  };

  get faqTitle() {
    return this.model.faqData.title;
  };

  get faqData() {
    return this.model.faqData.data;
  };
};
