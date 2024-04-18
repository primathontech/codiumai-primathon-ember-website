import Route from '@ember/routing/route';
import { FRONTEND_DEVELOPER } from '../../../constants/services/staff-augmentation';
import { TESTIMONIAL_DATA } from '../../../constants/homepage/testimonial';
import { inject as service } from '@ember/service';

export default class ServicesStaffAugmentationFrontendDevelopersRoute extends Route {
  @service headData;
  async model() {
    const data = FRONTEND_DEVELOPER;
    const testinomialData = TESTIMONIAL_DATA;
    return { data, testinomialData };
  }

  beforeModel() {
    const title = 'Hire Front End Developers | Contact Primathon';
    const description =
      'Hire Front End Developers from Primathon for tailored solutions. From bespoke to seamless integration, trust our certified experts. Get started now!';
    const keywords = '';

    this.headData.setData({ title, description, keywords });
  }
}
