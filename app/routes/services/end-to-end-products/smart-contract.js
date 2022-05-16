import Route from '@ember/routing/route';
import { FAQ_DATA } from '../../../constants/services/faq';
import { CONTRACT } from '../../../constants/services/end-to-end-products';

export default class ServicesEndToEndProductsSmartContractRoute extends Route {
  async model() {
    const faqData = FAQ_DATA;
    const smartContract = CONTRACT;
    return { faqData, smartContract };
  }

  afterModel() {}
}
