import Route from '@ember/routing/route';
import { FAQ_DATA } from '../../../constants/services/faq';
import { PRODUCT_MANAGER } from '../../../constants/services/staff-augmentation';

export default class ServicesStaffAugmentationProductManagersRoute extends Route {
  async model() {
    const productManagersData = PRODUCT_MANAGER;
    const faqData = FAQ_DATA;
    return { productManagersData, faqData };
  }

  afterModel() {}
}
