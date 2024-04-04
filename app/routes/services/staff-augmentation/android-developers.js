import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import { ANDROID_DEVELOPER } from '../../../constants/services/staff-augmentation';
import { TESTIMONIAL_DATA } from '../../../constants/homepage/testimonial';

export default class ServicesStaffAugmentationAndroidDevelopersRoute extends Route {
  @service headData;
  async model() {
    const data = ANDROID_DEVELOPER;
    const testinomialData = TESTIMONIAL_DATA;
    return { data, testinomialData };
  }

  beforeModel() {
    const title = 'Hire Android Developers | Dedicated & Certified Android Programmers | Primathon';
    const description =
      'Hire Android Developers from Primathon for solutions tailored to your business needs. Trust our professionals and expert team for seamless integration.';

    this.headData.setData({ title, description });
  }
}
