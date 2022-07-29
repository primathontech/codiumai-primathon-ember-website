import Controller from '@ember/controller';

export default class ServicesStaffAugmentationFrontendDeveloperController extends Controller {
  get frontendDeveloperTitle() {
    return this.model.frontendData.title;
  };

  get frontendDeveloperAbout() {
    return this.model.frontendData.about
  }

  get frontendDeveloperData() {
    return this.model.frontendData.data
  }

  get frontendDeveloperBg() {
    return this.model.frontendData.bg
  }

  get faqTitle() {
    return this.model.faqData.title;
  };

  get faqData() {
    return this.model.faqData.data;
  };
};
