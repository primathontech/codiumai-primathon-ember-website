import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import { STAFF_AUGMENTATIONS } from '../../../constants/services/staff-augmentation';

export default class ServicesStaffAugmentationIndexRoute extends Route {
  @service headData;

  async model() {
    const data = STAFF_AUGMENTATIONS;
    return { data };
  }

  beforeModel() {
    const title = 'Get Top Offshore Development Services | Contact Primathon';
    const description =
      'Discover top-tier offshore development services tailored to your needs. Our team offers comprehensive solutions, ensuring cost-effective, high-quality results.';

    this.headData.setData({ title, description });
  }
}
