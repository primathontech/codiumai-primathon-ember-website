import Controller from '@ember/controller';

export default class ServicesEndToEndProductsSmartContractController extends Controller {
  get faqTitle() {
    return this.model.faqData.title;
  }

  get faqData() {
    return this.model.faqData.data;
  }

  get smartContractAbout() {
    return this.model.smartContract.about;
  }

  get smartContractTitle() {
    return this.model.smartContract.title;
  }

  get smartContractDescription() {
    return this.model.smartContract.description;
  }

  get smartContractImg() {
    return this.model.smartContract.imgUrl;
  }

  get smartContractBg() {
    return this.model.smartContract.bg;
  }

  get smartContractCircularList() {
    return this.model.smartContract.circular_list;
  }

  get smartContractArrowList() {
    return this.model.smartContract.arrow_list;
  }

  get smartContractLinearList() {
    return this.model.smartContract.linear_list;
  }
}
