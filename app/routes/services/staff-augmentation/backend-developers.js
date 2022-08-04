import Route from '@ember/routing/route';
import { FAQ_DATA } from '../../../constants/services/faq';
import { BACKEND } from '../../../constants/services/staff-augmentation';

export default class ServicesStaffAugmentationBackendDevelopersRoute extends Route {
  async model() {
    const backendData = BACKEND;
    const faqData = FAQ_DATA;
    return { backendData, faqData };
  }

  afterModel() {}
}
