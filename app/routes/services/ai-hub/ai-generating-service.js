import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import { AI_GENERATING_SERVICE } from '../../../constants/services/ai-hub/ai-generating-service';
import { TESTIMONIAL_DATA } from '../../../constants/homepage/testimonial';

export default class ServicesConsultingCategoryCustomAiSolutionsRoute extends Route {
  @service headData;

  async model() {
    const data = AI_GENERATING_SERVICE;
    const testinomialData = TESTIMONIAL_DATA;
    return { data, testinomialData };
  }

  beforeModel() {
    const title = 'Get AI Generative AI Service Today | Hire from Primathon';
    const description =
      "Experience the future of AI with Primathon's cutting-edge Generative AI services. Transform your business with innovative solutions that are customized as per your needs.";
    this.headData.setData({ title, description });
  }
}
