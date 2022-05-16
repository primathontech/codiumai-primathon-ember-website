import Route from '@ember/routing/route';
import { FAQ_DATA } from '../../../constants/services/faq';
import { PRODUCT_DESIGNERS } from '../../../constants/services/staff-augmentation';

export default class ServicesStaffAugmentationProductDesignersRoute extends Route {
  async model() {
    const productDesignersData = PRODUCT_DESIGNERS;
    const faqData = FAQ_DATA;
    return { productDesignersData, faqData };
  }

  afterModel() {}
}
