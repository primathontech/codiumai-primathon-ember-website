import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import { CUSTOM_AI_SOLUTIONS } from '../../../constants/services/ai-hub/custom-ai-solutions';
import { TESTIMONIAL_DATA } from '../../../constants/homepage/testimonial';

export default class ServicesConsultingCategoryCustomAiSolutionsRoute extends Route {
  @service headData;

  async model() {
    const data = CUSTOM_AI_SOLUTIONS;
    const testinomialData = TESTIMONIAL_DATA;
    return { data, testinomialData };
  }

  beforeModel() {
    const title = 'Get Custom AI Solutions Today | Hire from Primathon';
    const description =
      "Our team of custom AI solutions specialists conducts a thorough evaluation of your company's operations, products, and objectives to identify potential opportunities for integrating AI technology.";
    this.headData.setData({ title, description });
  }
}
