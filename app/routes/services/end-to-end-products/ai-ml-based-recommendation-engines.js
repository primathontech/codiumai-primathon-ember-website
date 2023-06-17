import Route from '@ember/routing/route';
import { AI_DATA } from '../../../constants/ai-development/ai-development';
import { AIML } from '../../../constants/services/end-to-end-products';
import { inject as service } from '@ember/service';

export default class ServicesEndToEndProductsAIMLBasedRecommendationRoute extends Route {
  @service headData;
  async model() {
    const aiData = AI_DATA;
    return { aiData };
  }

  beforeModel() {
    const title = 'Custom Artificial Intelligence Development Services | Primathon';
    const description =
      'Best Artificial intelligence service consulting company specialize in AI software development provides AI development services to companies in various industries, from healthcare and education to cybersecurity and remote sensing.';
    const keywords =
      'artificial intelligence services and solutions artificial intelligence service offerings noida artificial intelligence service provider delhi artificial intelligence services for business artificial intelligence solutions provider india ';

    this.headData.setData({ title, description, keywords });
  }
}
