import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

import { DATA_VISUALIZATION } from '../../../constants/solutions/data-visualization';
import { TESTIMONIAL_DATA } from '../../../constants/homepage/testimonial';

export default class ServicesEndToEndProductsDashboardAndDataVisualizationRoute extends Route {
  @service headData;
  async model() {
    const data = DATA_VISUALIZATION;
    const testinomialData = TESTIMONIAL_DATA;
    return { data, testinomialData };
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
