import Controller from '@ember/controller';

export default class ServicesEndToEndProductsSmartContractController extends Controller {
  get faqTitle() {
    return this.model.faqData.title;
  }

  get faqData() {
    return this.model.faqData.data;
  }

  get smartContractHeading() {
    return this.model.smartContract.heading;
  }

  get smartContractSubHeading() {
    return this.model.smartContract.subHeading;
  }
}
