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
    const title = ' Hire Android Developers | Contact Primathon';
    const description =
      'Hire Android Developers from Primathon for solutions tailored to your business needs. Trust our professionals and expert team for seamless integration.';
    const keywords =
      'hire professional android developers gurgaon android development service provider company best android development solutions india top android developers service companies gurgaon best quality android development services ';

    this.headData.setData({ title, description, keywords });
  }
}
