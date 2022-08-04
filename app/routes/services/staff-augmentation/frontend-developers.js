import Route from '@ember/routing/route';
import { FAQ_DATA } from '../../../constants/services/faq';
import { FRONTEND } from '../../../constants/services/staff-augmentation';

export default class ServicesStaffAugmentationFrontendDevelopersRoute extends Route {
  async model() {
    const frontendData = FRONTEND;
    const faqData = FAQ_DATA;
    return { frontendData, faqData };
  }

  afterModel() {}
}
