import Route from '@ember/routing/route';
import { FAQ_DATA } from '../../../constants/services/faq';
import { SHOPIFY_STORES } from '../../../constants/services/end-to-end-products';

export default class ServicesEndToEndProductsShopifyStoresRoute extends Route {
  async model() {
    const faqData = FAQ_DATA;
    const shopifyStoresData = SHOPIFY_STORES;
    return { faqData, shopifyStoresData };
  }

  afterModel() {}
}
