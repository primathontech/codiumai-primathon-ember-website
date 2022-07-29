import Controller from '@ember/controller';

export default class ServicesEndToEndProductsShopifyStoresController extends Controller {
  get faqTitle() {
    return this.model.faqData.title;
  }

  get faqData() {
    return this.model.faqData.data;
  }

  get shopifyStoresAbout() {
    return this.model.shopifyStoresData.about;
  }

  get shopifyStoresTitle() {
    return this.model.shopifyStoresData.title;
  }

  get shopifyStoresDescription() {
    return this.model.shopifyStoresData.description;
  }

  get shopifyStoresImg() {
    return this.model.shopifyStoresData.imgUrl;
  }

  get shopifyStoresBg() {
    return this.model.shopifyStoresData.bg;
  }

  get shopifyStoresCircularList() {
    return this.model.shopifyStoresData.circular_list;
  }

  get shopifyStoresArrowList() {
    return this.model.shopifyStoresData.arrow_list;
  }

  get shopifyStoresLinearList() {
    return this.model.shopifyStoresData.linear_list;
  }
}
