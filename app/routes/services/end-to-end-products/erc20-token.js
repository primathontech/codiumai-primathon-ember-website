import Route from '@ember/routing/route';
import { FAQ_DATA } from '../../../constants/services/faq';
import { ERC } from '../../../constants/services/end-to-end-products';

export default class ServicesEndToEndProductsERC20TokenRoute extends Route {
  async model() {
    const faqData = FAQ_DATA;
    const ercToken = ERC
    return { faqData, ercToken };
  }

  afterModel() {}
}
