import Route from '@ember/routing/route';
import { FAQ_DATA } from '../../../constants/services/faq';
import { DASHBOARDANDDATA } from '../../../constants/services/end-to-end-products';

export default class ServicesEndToEndProductsDashboardAndDataVisualizationRoute extends Route {
  async model() {
    const faqData = FAQ_DATA;
    const dashboardData = DASHBOARDANDDATA;
    return { faqData, dashboardData };
  }

  afterModel() {}
}
