import Route from '@ember/routing/route';
import { FRONTEND } from '../../../constants/services/staff-augmentation';
import { TESTIMONIAL_DATA } from '../../../constants/homepage/testimonial';
import { inject as service } from '@ember/service';

export default class ServicesStaffAugmentationFrontendDevelopersRoute extends Route {
  @service headData;
  async model() {
    const frontendData = FRONTEND;
    const testinomialData = TESTIMONIAL_DATA;
    return { frontendData, testinomialData };
  }

  beforeModel() {
    const title = "Transform Your Web Development Experience with Primathon's Front End Services";
    const description =
      "Seeking outstanding web development services? Primathon's Front-end offerings are designed for businesses, ensuring quality performance on all platforms.";
    const keywords = '';

    this.headData.setData({ title, description, keywords });
  }
}
