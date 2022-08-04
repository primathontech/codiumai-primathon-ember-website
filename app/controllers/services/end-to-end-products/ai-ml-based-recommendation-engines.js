import Controller from '@ember/controller';

export default class ServicesEndToEndProductsAiMlBasedRecommendationEnginesController extends Controller {
  get faqTitle() {
    return this.model.faqData.title;
  }

  get faqData() {
    return this.model.faqData.data;
  }

  get aiMlBasedRecommendationEnginesAbout() {
    return this.model.aiMl.about;
  }

  get aiMlBasedRecommendationEnginesTitle() {
    return this.model.aiMl.title;
  }

  get aiMlBasedRecommendationEnginesDescription() {
    return this.model.aiMl.description;
  }

  get aiMlBasedRecommendationEnginesImg() {
    return this.model.aiMl.imgUrl;
  }

  get aiMlBasedRecommendationEnginesBg() {
    return this.model.aiMl.bg
  }

  get aiMlBasedRecommendationEnginesCircularList() {
    return this.model.aiMl.circular_list
  }

  get aiMlBasedRecommendationEnginesArrowList() {
    return this.model.aiMl.arrow_list
  }

  get aiMlBasedRecommendationEnginesLinearList() {
    return this.model.aiMl.linear_list
  }
}
