import Route from '@ember/routing/route';
import { VUE_DEVELOPER } from '../../../constants/services/staff-augmentation';
import { inject as service } from '@ember/service';
import { TESTIMONIAL_DATA } from '../../../constants/homepage/testimonial';

export default class ServicesStaffAugmentationAndroidDevelopersRoute extends Route {
  @service headData;
  async model() {
    const data = VUE_DEVELOPER;
    const testinomialData = TESTIMONIAL_DATA;
    return { data, testinomialData };
  }

  beforeModel() {
    const title = 'Hire Vue.js Developers | Dedicated & Certified Vue.js Programmers | Primathon';
    const description =
      'Hire Vue.js Developers at Primathon for solutions tailored to your needs. Trust our professionals and expert team for seamless integration. Get started today!';
    const keywords =
      'hire professional react.js developers gurgaon react.js development service provider company best react.js development solutions india top react.js developers service companies gurgaon best quality react.js development services ';
    this.headData.setData({ title, description, keywords });
  }
}
