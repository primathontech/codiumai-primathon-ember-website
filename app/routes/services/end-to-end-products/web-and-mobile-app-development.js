import Route from '@ember/routing/route';
import { FAQ_DATA } from '../../../constants/services/faq';
import { APPDEVELOPEMENT } from '../../../constants/services/end-to-end-products';
import { inject as service } from '@ember/service';

export default class ServicesEndToEndProductsWebAndAppDevelopmentRoute extends Route {
  @service headData;
  async model() {
    const faqData = FAQ_DATA;
    const appDevelopmentData = APPDEVELOPEMENT;
    return { faqData, appDevelopmentData };
  }

  afterModel() {
    this.headData.title = 'Top Web And Mobile App Development Company | Primathon';
    this.headData.description = ' Primathon is the top web and mobile app development company in India. We provide custom web application development Gurgaon and web application development services Noida.';
    this.headData.keywords = 'hire mobile app development delhi best mobile app developers for hire application development for mobile delhi web application development services noida custom web application development gurgaon web and mobile app development company ';
  }
}
