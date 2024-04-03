import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import { ANGULAR_DEVELOPER } from '../../../constants/services/staff-augmentation';
import { TESTIMONIAL_DATA } from '../../../constants/homepage/testimonial';

export default class ServicesStaffAugmentationPythonDevelopersRoute extends Route {
  @service headData;
  async model() {
    const data = ANGULAR_DEVELOPER;
    const testinomialData = TESTIMONIAL_DATA;
    return { data, testinomialData };
  }

  beforeModel() {
    const title = 'Hire AngularJS  Developers | Contact Primathon';
    const description =
      ' Hire AngularJS Developers at Primathon for solutions tailored to your needs. Trust our professionals and expert team for seamless integration. Get started today!';

    this.headData.setData({ title, description });
  }
}
