import Route from '@ember/routing/route';
import { REACT_DEVELOPER } from '../../../constants/services/staff-augmentation';
import { inject as service } from '@ember/service';
import { TESTIMONIAL_DATA } from '../../../constants/homepage/testimonial';

export default class ServicesStaffAugmentationReactDevelopersRoute extends Route {
  @service headData;
  async model() {
    const data = REACT_DEVELOPER;
    const testinomialData = TESTIMONIAL_DATA;
    return { data, testinomialData };
  }

  beforeModel() {
    const title = 'Hire React.js Developers | Dedicated & Certified React.js Programmers | Primathon';
    const description =
      'Hire React.js Developers from Primathon for tailored solutions. From bespoke to seamless integration, trust our certified experts. Get started now!';

    this.headData.setData({ title, description });
  }
}