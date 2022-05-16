import Controller from '@ember/controller';

export default class ServicesEndToEndProductsShopifyStoresController extends Controller {
  get faqTitle() {
    return this.model.faqData.title;
  }

  get faqData() {
    return this.model.faqData.data;
  }

  get shopifyStoresHeading() {
    return this.model.shopifyStoresData.heading;
  }

  get shopifyStoresSubHeading() {
    return this.model.shopifyStoresData.subHeading;
  }
}
