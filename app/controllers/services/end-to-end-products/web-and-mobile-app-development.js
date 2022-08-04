import Controller from '@ember/controller';

export default class ServicesEndToEndProductsWebAndAppDevelopmentController extends Controller {
  get faqTitle() {
    return this.model.faqData.title;
  }

  get faqData() {
    return this.model.faqData.data;
  }

  get webAndAppDevelopmentAbout() {
    return this.model.appDevelopmentData.about;
  }

  get webAndAppDevelopmentTitle() {
    return this.model.appDevelopmentData.title;
  }

  get webAndAppDevelopmentDescription() {
    return this.model.appDevelopmentData.description;
  }

  get webAndAppDevelopmentImg() {
    return this.model.appDevelopmentData.imgUrl;
  }

  get webAndAppDevelopmentBg() {
    return this.model.appDevelopmentData.bg;
  }

  get webAndAppDevelopmentCircularList() {
    return this.model.appDevelopmentData.circular_list;
  }

  get webAndAppDevelopmentArrowList() {
    return this.model.appDevelopmentData.arrow_list;
  }

  get webAndAppDevelopmentLinearList() {
    return this.model.appDevelopmentData.linear_list;
  }
}
