import Controller from '@ember/controller';

export default class ServicesStaffAugmentationQualityAnalystsController extends Controller {
  get qualityAnalystsHeading() {
    return this.model.qualityAnalystsData.heading;
  };

  get qualityAnalystsSubHeading() {
    return this.model.qualityAnalystsData.subHeading;
  };

  get faqTitle() {
    return this.model.faqData.title;
  };

  get faqData() {
    return this.model.faqData.data;
  };
};
