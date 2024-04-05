import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import { SWIFT_DEVELOPER } from '../../../constants/services/staff-augmentation';
import { TESTIMONIAL_DATA } from '../../../constants/homepage/testimonial';

export default class ServicesStaffAugmentationSwiftDevelopersRoute extends Route {
  @service headData;
  async model() {
    const data = SWIFT_DEVELOPER;
    const testinomialData = TESTIMONIAL_DATA;
    return { data, testinomialData };
  }

  beforeModel() {
    const title = 'Hire Swift Developers | Dedicated & Certified Swift Programmers | Primathon';
    const description =
      'Hire Swift Developers from Primathon for solutions tailored to your business needs. Trust our professionals and expert team for seamless integration.';

    this.headData.setData({ title, description });
  }
}
