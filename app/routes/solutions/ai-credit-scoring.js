import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import { AI_CREDIT_SCORING } from '../../constants/solutions/ai-credit-scoring';
import { TESTIMONIAL_DATA } from '../../constants/homepage/testimonial';

export default class SolutionsAiCreditScoring extends Route {
  @service headData;
  async model() {
    const data = AI_CREDIT_SCORING;
    const testinomialData = TESTIMONIAL_DATA;
    return { data, testinomialData };
  }

  beforeModel() {
    const title = 'Get AI Credit Scoring Service Today | Hire from Primathon';
    const description =
      ' Unlock financial insights and make informed decisions with our AI Credit Scoring Service. Empower your business with accurate, efficient, and scalable credit assessments.';

    this.headData.setData({ title, description });
  }
}
