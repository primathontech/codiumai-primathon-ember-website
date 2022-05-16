import Controller from '@ember/controller';

export default class ServicesStaffAugmentationProductDesignersController extends Controller {
  get productDesignersHeading() {
    return this.model.productDesignersData.heading;
  };

  get productDesignersSubHeading() {
    return this.model.productDesignersData.subHeading;
  };

  get faqTitle() {
    return this.model.faqData.title;
  };

  get faqData() {
    return this.model.faqData.data;
  };
};
