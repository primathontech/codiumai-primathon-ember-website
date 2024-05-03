import Route from '@ember/routing/route';
import { NODE_DEVELOPER } from '../../../constants/services/staff-augmentation';
import { inject as service } from '@ember/service';
import { TESTIMONIAL_DATA } from '../../../constants/homepage/testimonial';

export default class ServicesStaffAugmentationHireNodeJsDevelopersRoute extends Route {
  @service headData;
  async model() {
    const data = NODE_DEVELOPER;
    const testinomialData = TESTIMONIAL_DATA;
    return { data, testinomialData };
  }

  beforeModel() {
    const title = 'Hire Node.js Developers | Contact Primathon';
    const description =
      'Hire Node.js Developers from Primathon for solutions tailored to your business needs. Trust our professionals and expert team for seamless integration.';
    const keywords =
      'hire professional react.js developers gurgaon react.js development service provider company best react.js development solutions india top react.js developers service companies gurgaon best quality react.js development services ';
    this.headData.setData({ title, description, keywords });
  }
}
