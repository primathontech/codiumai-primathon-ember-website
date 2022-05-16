import Controller from '@ember/controller';

export default class ServicesEndToEndProductsAdminPanelsAndCmsController extends Controller {
  get faqTitle() {
    return this.model.faqData.title;
  }

  get faqData() {
    return this.model.faqData.data;
  }

  get adminPanelsAndCmsHeading() {
    return this.model.adminPanelAndCms.heading;
  }

  get adminPanelsAndCmsSubHeading() {
    return this.model.adminPanelAndCms.subHeading;
  }
}
