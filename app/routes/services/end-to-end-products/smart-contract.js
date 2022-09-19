import Route from '@ember/routing/route';
import { FAQ_DATA } from '../../../constants/services/faq';
import { CONTRACT } from '../../../constants/services/end-to-end-products';
import { inject as service } from '@ember/service';

export default class ServicesEndToEndProductsSmartContractRoute extends Route {
  @service headData;
  async model() {
    const faqData = FAQ_DATA;
    const smartContract = CONTRACT;
    return { faqData, smartContract };
  }

  afterModel() {
    this.headData.title='Professional Smart Contract Developer India | Primathon'
    this.headData.description = 'If you are looking for a professional smart contract developer India then you have come to right place. Primathon is the top smart contract blockchain development company.';
    this.headData.keywords = 'professional smart contract developer india smart contract development service provider best smart contract developers company gurgaon top smart contract blockchain development company ';
  }
}
