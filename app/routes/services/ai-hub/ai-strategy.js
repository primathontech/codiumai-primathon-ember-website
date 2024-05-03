import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import { AI_STRATEGY } from '../../../constants/services/ai-hub/ai-strategy';
import { TESTIMONIAL_DATA } from '../../../constants/homepage/testimonial';

export default class ServicesAiHubAiStrategyRoute extends Route {
  @service headData;

  async model() {
    const data = AI_STRATEGY;
    const testinomialData = TESTIMONIAL_DATA;
    return { data, testinomialData };
  }

  beforeModel() {
    const title = 'Get AI Strategy Consulting Service Today | Hire from Primathon';
    const description =
      "Our AI strategy service experts conduct an assessment of your company's operations, products, and objectives to pinpoint potential areas for AI integration.";
    this.headData.setData({ title, description });
  }
}
