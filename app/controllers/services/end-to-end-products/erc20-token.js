import Controller from '@ember/controller';

export default class ServicesEndToEndProductsERC20TokenController extends Controller {
  get faqTitle() {
    return this.model.faqData.title;
  }

  get faqData() {
    return this.model.faqData.data;
  }

  get erc20TokenHeading() {
    return this.model.ercToken.heading;
  }

  get erc20TokenSubHeading() {
    return this.model.ercToken.subHeading;
  }
}
