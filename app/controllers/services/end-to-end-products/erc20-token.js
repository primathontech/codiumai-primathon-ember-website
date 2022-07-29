import Controller from '@ember/controller';

export default class ServicesEndToEndProductsERC20TokenController extends Controller {
  get faqTitle() {
    return this.model.faqData.title;
  }

  get faqData() {
    return this.model.faqData.data;
  }

  get erc20TokenAbout() {
    return this.model.ercToken.about;
  }

  get erc20TokenTitle() {
    return this.model.ercToken.title;
  }

  get erc20TokenDescription() {
    return this.model.ercToken.description;
  }

  get erc20TokenImg() {
    return this.model.ercToken.imgUrl;
  }

  get erc20TokenBg() {
    return this.model.ercToken.bg;
  }

  get erc20TokenCircularList() {
    return this.model.ercToken.circular_list;
  }

  get erc20TokenArrowList() {
    return this.model.ercToken.arrow_list;
  }
  get erc20TokenLinearList() {
    return this.model.ercToken.linear_list;
  }
}
