import Route from '@ember/routing/route';
import { FAQ_DATA } from '../../../constants/services/faq';
import { FULL_STACK } from '../../../constants/services/staff-augmentation';

export default class ServicesStaffAugmentationFullStackDevelopersRoute extends Route {
  async model() {
    const fullStackDevelopersData = FULL_STACK;
    const faqData = FAQ_DATA;
    return { fullStackDevelopersData, faqData };
  }

  afterModel() {}
}
