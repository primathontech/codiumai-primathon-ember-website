import Controller from '@ember/controller';

export default class ServicesEndToEndProductsAdminPanelsAndCmsController extends Controller {
  get faqTitle() {
    return this.model.faqData.title;
  }

  get faqData() {
    return this.model.faqData.data;
  }

  get adminPanelAndCmsTitle() {
    return this.model.adminPanelAndCms.title;
  }

  get adminPanelsAndCmsAbout() {
    return this.model.adminPanelAndCms.about;
  }

  get adminPanelAndCmsDescription() {
    return this.model.adminPanelAndCms.description;
  }

  get adminPanelAndCmsImg() {
    return this.model.adminPanelAndCms.imgUrl;
  }

  get adminPanelAndCmsBG() {
    return this.model.adminPanelAndCms.bg;
  }

  get adminPanelAndCmsCircularList() {
    return this.model.adminPanelAndCms.circular_list;
  }

  get adminPanelAndCmsArrowList() {
    return this.model.adminPanelAndCms.arrow_list;
  }

  get adminPanelAndCmsLinearList() {
    return this.model.adminPanelAndCms.linear_list;
  }
}
