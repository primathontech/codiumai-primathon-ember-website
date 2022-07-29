import Route from '@ember/routing/route';
import { PLATFORM } from '../../../constants/services/staff-augmentation';

export default class ServicesStaffAugmentationPlatformRoute extends Route {
  async model() {
    const platformData = PLATFORM;
    return { platformData };
  }

  afterModel() {}
}
