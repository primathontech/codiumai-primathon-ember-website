import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import { JAVASCRIPT } from '../../../constants/services/staff-augmentation';
import { TESTIMONIAL_DATA } from '../../../constants/homepage/testimonial';

export default class ServicesStaffAugmentationPythonDevelopersRoute extends Route {
  @service headData;
  async model() {
    const data = JAVASCRIPT;
    const testinomialData = TESTIMONIAL_DATA;
    return { data, testinomialData };
  }

  beforeModel() {
    const title = 'Hire JavaScript Developers | Dedicated & Certified JavaScript Programmers | Primathon';
    const description =
      'Hire JavaScript Developers from Primathon for tailored solutions. From bespoke to seamless integration, trust our certified experts. Get started now!';

    this.headData.setData({ title, description });
  }
}
