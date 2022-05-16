import Route from '@ember/routing/route';
import { FAQ_DATA } from '../../../constants/services/faq';
import { ADMINPALENANDCMS } from '../../../constants/services/end-to-end-products';

export default class ServicesEndToEndProductsAdminPanelsAndCmsRoute extends Route {
  async model() {
    const faqData = FAQ_DATA;
    const adminPanelAndCms = ADMINPALENANDCMS
    return { faqData, adminPanelAndCms };
  }

  afterModel() {}
}
