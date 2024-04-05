import Route from '@ember/routing/route';
import { BACKEND } from '../../../constants/services/staff-augmentation';
import { TESTIMONIAL_DATA } from '../../../constants/homepage/testimonial';
import { inject as service } from '@ember/service';

export default class ServicesStaffAugmentationBackendDevelopersRoute extends Route {
  @service headData;
  async model() {
    const backendData = BACKEND;
    const testinomialData = TESTIMONIAL_DATA;
    return { backendData, testinomialData };
  }

  beforeModel() {
    const title = "Redefine Your Web Development Journey with Primathon's Backend Services";
    const description =
      'Are you looking for seamless and hassle free backend services? With Primathon, you have the chance to elevate your website with customized solutions today.';

    this.headData.setData({ title, description });
  }
}
