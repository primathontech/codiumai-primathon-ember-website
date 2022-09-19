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

  beforeModel() {
    const title = 'Hire Professional Shopify Developer Noida | Primathon';
    const description =
      'Primathon Technology Ventures Pvt Ltd provides the best web developer for Shopify Noida. To hire professional Shopify developer Noida contacts us today.';
    const keywords =
      'best shopify page builder delhi best web developer for shopify noida hire professional shopify developer noida hire shopify ecommerce developers gurgaon expert shopify developers india best shopify page builder gurgaon';

    this.headData.setData({ title, description, keywords });
  }
}
