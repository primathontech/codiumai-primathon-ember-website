import Route from '@ember/routing/route';
import { REACT_DEVELOPER } from '../../../constants/services/staff-augmentation';
import { inject as service } from '@ember/service';
import { TESTIMONIAL_DATA } from '../../../constants/homepage/testimonial';

export default class ServicesStaffAugmentationAndroidDevelopersRoute extends Route {
  @service headData;
  async model() {
    const reactDevelopersData = REACT_DEVELOPER;
    const testinomialData = TESTIMONIAL_DATA;
    return { reactDevelopersData, testinomialData };
  }

  beforeModel() {
    const title = 'Hire React.js Developers | Contact Primathon';
    const description =
      'Hire React.js Developers from Primathon for tailored solutions. From bespoke to seamless integration, trust our certified experts. Get started now!';
    const keywords =
      'hire professional react.js developers gurgaon react.js development service provider company best react.js development solutions india top react.js developers service companies gurgaon best quality react.js development services ';

    this.headData.setData({ title, description, keywords });
  }
}