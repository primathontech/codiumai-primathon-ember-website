import Controller from '@ember/controller';

export default class ServicesStaffAugmentationQualityAnalystsController extends Controller {
  get qualityAnalystsTitle() {
    return this.model.qualityAnalystsData.title;
  };

  get qualityAnalystsData() {
    return this.model.qualityAnalystsData.data;
  };

  get qualityAnalystsAbout() {
    return this.model.qualityAnalystsData.about;
  };

  get qualityAnalystsBg() {
    return this.model.qualityAnalystsData.bg;
  };

  get faqTitle() {
    return this.model.faqData.title;
  };

  get faqData() {
    return this.model.faqData.data;
  };
};
