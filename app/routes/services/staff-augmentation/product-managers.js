import Route from '@ember/routing/route';
import { FAQ_DATA } from '../../../constants/services/faq';
import { PRODUCT_MANAGER } from '../../../constants/services/staff-augmentation';
import { inject as service } from '@ember/service';

export default class ServicesStaffAugmentationProductManagersRoute extends Route {
  @service headData;
  async model() {
    const productManagersData = PRODUCT_MANAGER;
    const faqData = FAQ_DATA;
    return { productManagersData, faqData };
  }

  beforeModel() {
    const title = 'Specialist Product Management Services Noida | Primathon';
    const description =
      'Primathon Technology Ventures Pvt Ltd provides specialist product management services Noida. Choose Primatho for affordable product management solutions Delhi.';
    const keywords =
      'product management services in india best product management service gurgaon affordable product management solutions delhi specialist product management services noida ';

    this.headData.setData({ title, description, keywords });
  }
}
