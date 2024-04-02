import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import { AI_DISCOVERY } from '../../../constants/services/end-to-end-products';
import { TESTIMONIAL_DATA } from '../../../constants/homepage/testimonial';

export default class ServicesEndToEndProductsAiChatbotRoute extends Route {
  @service headData;
  async model() {
    const data = AI_DISCOVERY;
    const testinomialData = TESTIMONIAL_DATA;
    return { data, testinomialData };
  }

  beforeModel() {
    const title = 'Get AI Discovery Service Today | Hire from Primathon';
    const description =
      "Our AI discovery service experts conduct an assessment of your company's operations, products, and objectives to pinpoint potential areas for AI integration.";

    this.headData.setData({ title, description });
  }
}
