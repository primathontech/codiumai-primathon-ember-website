import Route from '@ember/routing/route';
import { FAQ_DATA } from '../../../constants/services/faq';
import { ERC } from '../../../constants/services/end-to-end-products';
import { inject as service } from '@ember/service';

export default class ServicesEndToEndProductsERC20TokenRoute extends Route {
  @service headData;
  async model() {
    const faqData = FAQ_DATA;
    const ercToken = ERC;
    return { faqData, ercToken };
  }

  afterModel() {
    this.headData.title = 'Ethereum ERC 20 Tokens Solutions Company India | Primathon';
    this.headData.description = 'Looking for the best ethereum 20 tokend solution company India? Then you have come to the right place. Primathon is the top ERC 20 tokens service provider Gurgaon.';
    this.headData.keywords = 'top ethereum erc 20 token standard delhi erc 20 tokens service provider gurgaon ethereum erc 20 tokens solutions company';
  }
}
