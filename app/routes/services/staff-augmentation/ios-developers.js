import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import { IOS_DEVELOPER } from '../../../constants/services/staff-augmentation';
import { TESTIMONIAL_DATA } from '../../../constants/homepage/testimonial';

export default class ServicesStaffAugmentationAndroidDevelopersRoute extends Route {
  @service headData;
  async model() {
    const data = IOS_DEVELOPER;
    const testinomialData = TESTIMONIAL_DATA;
    return { data, testinomialData };
  }

  beforeModel() {
    const title = 'Hire iOS Developers | Dedicated & Certified IOS Programmers | Primathon';
    const description =
      'Hire iOS Developers from Primathon for solutions tailored to your business needs. Trust our professionals and expert team for seamless integration.';

    this.headData.setData({ title, description });
  }
}
