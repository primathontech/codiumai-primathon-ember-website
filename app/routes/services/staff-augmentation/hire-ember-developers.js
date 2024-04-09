import Route from '@ember/routing/route';
import { EMBER_DEVELOPER } from '../../../constants/services/staff-augmentation';
import { inject as service } from '@ember/service';
import { TESTIMONIAL_DATA } from '../../../constants/homepage/testimonial';

export default class ServicesStaffAugmentationAndroidDevelopersRoute extends Route {
  @service headData;
  async model() {
    const data = EMBER_DEVELOPER;
    const testinomialData = TESTIMONIAL_DATA;
    return { data, testinomialData };
  }

  beforeModel() {
    const title = 'Hire Ember.js Developer | Expert Ember.js Programmers - Primathon';
    const description =
      'Connect with top-tier Ember.js developers from Primathon. Hire Ember.js developers to bring your dynamic web applications to life with expertise and efficiency.';
    const keywords =
      'hire professional react.js developers gurgaon react.js development service provider company best react.js development solutions india top react.js developers service companies gurgaon best quality react.js development services ';
    this.headData.setData({ title, description, keywords });
  }
}
