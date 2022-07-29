import Controller from '@ember/controller';

export default class ServicesStaffAugmentationProductManagersController extends Controller {
  get productManagersTitle() {
    return this.model.productManagersData.title;
  };

  get productManagersData() {
    return this.model.productManagersData.data;
  };

  get productManagersAbout() {
    return this.model.productManagersData.about;
  };

  get productManagersBg() {
    return this.model.productManagersData.bg;
  };

  get faqTitle() {
    return this.model.faqData.title;
  };

  get faqData() {
    return this.model.faqData.data;
  };
};
