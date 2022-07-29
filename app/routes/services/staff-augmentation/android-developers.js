import Route from '@ember/routing/route';
import { ANDROID_DEVELOPER } from '../../../constants/services/staff-augmentation';

export default class ServicesStaffAugmentationAndroidDevelopersRoute extends Route {
  async model() {
    const androidDevelopersData = ANDROID_DEVELOPER;
    return { androidDevelopersData };
  }

  afterModel() {}
}
