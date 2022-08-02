import Controller from '@ember/controller';

export default class ServicesStaffAugmentationBackendDevelopersController extends Controller {
  get backendDevelopersTitle() {
    return this.model.backendData.title;
  };

  get backendDevelopersData() {
    return this.model.backendData.data
  }

  get backendDeveloperAbout() {
    return this.model.backendData.about
  }

  
  get backendDeveloperBg() {
    return this.model.backendData.bg
  }

  get backendDeveloperCircularList() {
    return this.model.backendData.circular_list
  }

  get faqTitle() {
    return this.model.faqData.title;
  };

  get faqData() {
    return this.model.faqData.data;
  };
};
