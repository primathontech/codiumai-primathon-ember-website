import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import { PYTHON_DEVELOPER } from '../../../constants/services/staff-augmentation';
import { TESTIMONIAL_DATA } from '../../../constants/homepage/testimonial';

export default class ServicesStaffAugmentationPythonDevelopersRoute extends Route {
  @service headData;
  async model() {
    const data = PYTHON_DEVELOPER;
    const testinomialData = TESTIMONIAL_DATA;
    return { data, testinomialData };
  }

  beforeModel() {
    const title = 'Hire Python Developers | Contact Primathon';
    const description =
      'Hire Python Developers from Primathon for solutions tailored to your business needs. Trust our professionals and expert team for seamless integration. ';

    this.headData.setData({ title, description });
  }
}
