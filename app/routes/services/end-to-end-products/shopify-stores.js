import Route from '@ember/routing/route';
import { FAQ_DATA } from '../../../constants/services/faq';
import { SHOPIFY_STORES } from '../../../constants/services/end-to-end-products';
import { inject as service } from '@ember/service';
export default class ServicesEndToEndProductsShopifyStoresRoute extends Route {
  @service headData;

  async model() {
    const faqData = FAQ_DATA;
    const shopifyStoresData = SHOPIFY_STORES;
    return { faqData, shopifyStoresData };
  }

  afterModel() {
    this.headData.title = 'Hire Professional Shopify Developer Noida | Primathon';
    this.headData.description =
      'Primathon Technology Ventures Pvt Ltd provides the best web developer for Shopify Noida. To hire professional Shopify developer Noida contacts us today.';
    this.headData.keywords =
      'best shopify page builder delhi best web developer for shopify noida hire professional shopify developer noida hire shopify ecommerce developers gurgaon expert shopify developers india best shopify page builder gurgaon';
  }
}
