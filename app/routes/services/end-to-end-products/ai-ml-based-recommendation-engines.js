import Route from '@ember/routing/route';
import { FAQ_DATA } from '../../../constants/services/faq';
import { AIML } from '../../../constants/services/end-to-end-products';

export default class ServicesEndToEndProductsAIMLBasedRecommendationRoute extends Route {
  async model() {
    const faqData = FAQ_DATA;
    const aiMl = AIML;
    return { faqData, aiMl };
  }

  afterModel() {}
}
