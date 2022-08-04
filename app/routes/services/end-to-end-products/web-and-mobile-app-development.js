import Route from '@ember/routing/route';
import { FAQ_DATA } from '../../../constants/services/faq';
import { APPDEVELOPEMENT } from '../../../constants/services/end-to-end-products';

export default class ServicesEndToEndProductsWebAndAppDevelopmentRoute extends Route {
  async model() {
    const faqData = FAQ_DATA;
    const appDevelopmentData = APPDEVELOPEMENT;
    return { faqData, appDevelopmentData };
  }

  afterModel() {}
}
