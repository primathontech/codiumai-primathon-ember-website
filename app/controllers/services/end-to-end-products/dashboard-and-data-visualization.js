import Controller from '@ember/controller';

export default class ServicesEndToEndProductsDashboardAndDataVisualizationController extends Controller {
  get faqTitle() {
    return this.model.faqData.title;
  }

  get faqData() {
    return this.model.faqData.data;
  }

  get dashboardAndDataVisualizationHeading() {
    return this.model.dashboardData.heading;
  }

  get dashboardAndDataVisualizationSubHeading() {
    return this.model.dashboardData.subHeading;
  }
}
