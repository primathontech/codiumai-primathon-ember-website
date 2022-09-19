import Route from '@ember/routing/route';
import { FAQ_DATA } from '../../../constants/services/faq';
import { ADMINPALENANDCMS } from '../../../constants/services/end-to-end-products';
import { inject as service } from '@ember/service';

export default class ServicesEndToEndProductsAdminPanelsAndCmsRoute extends Route {
  @service headData;
  async model() {
    const faqData = FAQ_DATA;
    const adminPanelAndCms = ADMINPALENANDCMS;
    return { faqData, adminPanelAndCms };
  }

  beforeModel() {
    this.headData.title = 'Affordable CMS Development Service Company India | Primathon';
    this.headData.description =
      ' Looking for an affordable cms development service company India? Primathon will be the best option for you. We provide the best admin panel development services Gurgaon';
    this.headData.keywords =
      'admin panel development services gurgaon admin panel development service provider top admin panel development company cms development services provider delhi affordable cms development service company';
  }
}
