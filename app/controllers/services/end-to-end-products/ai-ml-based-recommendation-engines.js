import Controller from '@ember/controller';

export default class ServicesEndToEndProductsAiMlBasedRecommendationEnginesController extends Controller {
  get faqTitle() {
    return this.model.faqData.title;
  }

  get faqData() {
    return this.model.faqData.data;
  }

  get aiMlBasedRecommendationEnginesHeading() {
    return this.model.aiMl.heading;
  }

  get aiMlBasedRecommendationEnginesSubHeading() {
    return this.model.aiMl.subHeading;
  }
}
