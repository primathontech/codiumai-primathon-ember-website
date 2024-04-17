import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import { DATA_VISUALIZATION } from '../../constants/solutions/data-visualization';
import { TESTIMONIAL_DATA } from '../../constants/homepage/testimonial';

export default class ServicesStaffAugmentationPythonDevelopersRoute extends Route {
  @service headData;
  async model() {
    const data = DATA_VISUALIZATION;
    const testinomialData = TESTIMONIAL_DATA;
    return { data, testinomialData };
  }

  beforeModel() {
    const title = 'Premier Data Visualization Services for Insightful Dashboards | Primathon';
    const description =
      'Unlock actionable insights with our premier data visualization services for dashboards. Transform raw data into intuitive visuals for informed decision-making.';

    this.headData.setData({ title, description });
  }
}
