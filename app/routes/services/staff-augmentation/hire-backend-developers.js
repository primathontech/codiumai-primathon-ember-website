import Route from '@ember/routing/route';
import { BACKEND_DEVELOPER } from '../../../constants/services/staff-augmentation';
import { TESTIMONIAL_DATA } from '../../../constants/homepage/testimonial';
import { inject as service } from '@ember/service';

export default class ServicesStaffAugmentationBackendDevelopersRoute extends Route {
  @service headData;
  async model() {
    const data = BACKEND_DEVELOPER;
    const testinomialData = TESTIMONIAL_DATA;
    return { data, testinomialData };
  }

  beforeModel() {
    const title = 'Hire Backend developers | Dedicated & Certified BackendProgrammers | Primathon';
    const description =
      'Hire Backend developers from Primathon for solutions tailored to your business needs. Trust our professionals and expert team for seamless integration.';

    this.headData.setData({ title, description });
  }
}
