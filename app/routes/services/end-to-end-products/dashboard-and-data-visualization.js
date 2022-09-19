import Route from '@ember/routing/route';
import { FAQ_DATA } from '../../../constants/services/faq';
import { DASHBOARDANDDATA } from '../../../constants/services/end-to-end-products';
import { inject as service } from '@ember/service';

export default class ServicesEndToEndProductsDashboardAndDataVisualizationRoute extends Route {
  @service headData;
  async model() {
    const faqData = FAQ_DATA;
    const dashboardData = DASHBOARDANDDATA;
    return { faqData, dashboardData };
  }

  beforeModel() {
    const title = 'Affordable Data Visualization Service Provider India | Primathon';
    const description =
      'Primathon is an affordable data visualization service provider India. If you are looking to hire the best data visualization company India, then choose us.';
    const keywords =
      'data analytics and visualization services data visualization services provider delhi hire the best data visualization company best data visualization company india affordable data visualization service provider ';
    
    this.headData.setData({ title, description, keywords });
  }
}
