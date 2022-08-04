import Controller from '@ember/controller';

export default class ServicesEndToEndProductsDashboardAndDataVisualizationController extends Controller {
  get faqTitle() {
    return this.model.faqData.title;
  }

  get faqData() {
    return this.model.faqData.data;
  }

  get dashboardAndDataVisualizationAbout() {
    return this.model.dashboardData.about;
  }

  get dashboardAndDataVisualizationTitle() {
    return this.model.dashboardData.title;
  }

  get dashboardAndDataVisualizationImg() {
    return this.model.dashboardData.imgUrl;
  }

  get dashboardAndDataVisualizationDescription() {
    return this.model.dashboardData.description;
  }

  get dashboardAndDataVisualizationBg() {
    return this.model.dashboardData.bg;
  }

  get dashboardAndDataVisualizationCircularList() {
    return this.model.dashboardData.circular_list;
  }

  get dashboardAndDataVisualizationArrowList() {
    return this.model.dashboardData.arrow_list;
  }

  get dashboardAndDataVisualizationLinearList() {
    return this.model.dashboardData.linear_list;
  }
}
