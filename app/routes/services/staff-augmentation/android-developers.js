import Route from '@ember/routing/route';
import { ANDROID_DEVELOPER } from '../../../constants/services/staff-augmentation';
import { inject as service } from '@ember/service';

export default class ServicesStaffAugmentationAndroidDevelopersRoute extends Route {
  @service headData;
  async model() {
    const androidDevelopersData = ANDROID_DEVELOPER;
    return { androidDevelopersData };
  }

  beforeModel() {
    const title = ' Best Quality Android Development Services India | Primathon';
    const description =
      'Primathon provides the best quality android development services India. We are the top android development service provider company India, For more info visit our website.';
    const keywords =
      'hire professional android developers gurgaon android development service provider company best android development solutions india top android developers service companies gurgaon best quality android development services ';

    this.headData.setData({ title, description, keywords });
  }
}
