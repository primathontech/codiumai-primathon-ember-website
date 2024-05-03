import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import { AI_INTEGRATION } from '../../../constants/services/ai-hub/ai-integration';
import { TESTIMONIAL_DATA } from '../../../constants/homepage/testimonial';

export default class ServicesAiHubConsultingCategoryRoute extends Route {
  @service headData;
  async model() {
    const data = AI_INTEGRATION;
    const testinomialData = TESTIMONIAL_DATA;
    return { data, testinomialData };
  }
  beforeModel() {
    const title = 'Get AI Integration Service Today | Hire from Primathon';
    const description =
      ' Unlock the potential of AI integration for your business with Primathon. Hire our expert services today for seamless implementation and transformative results.';
    this.headData.setData({ title, description });
  }
}
