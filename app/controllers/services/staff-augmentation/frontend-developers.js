import Controller from '@ember/controller';

export default class ServicesStaffAugmentationFrontendDeveloperController extends Controller {
  get frontendDeveloperTitle() {
    return this.model.frontendData.title;
  };

  get frontendDeveloperSubHeading() {
    return this.model.frontendData.sub_heading;  
  }

  get frontendDeveloperAbout() {
    return this.model.frontendData.about
  }

  get frontendDeveloperData() {
    return this.model.frontendData.data
  }

  get frontendDeveloperBg() {
    return this.model.frontendData.bg
  }

  get frontendDeveloperCircularList() {
    return this.model.frontendData.circular_list
  }

  get faqTitle() {
    return this.model.faqData.title;
  };

  get faqData() {
    return this.model.faqData.data;
  };
};
