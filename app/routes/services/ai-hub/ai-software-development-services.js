import Route from '@ember/routing/route';
import { AI_DATA } from '../../../constants/ai-development/ai-development';
import { inject as service } from '@ember/service';

export default class ServicesAIHubAISoftwareDevelopmentServicesRoute extends Route {
  @service headData;
  async model() {
    const aiData = AI_DATA;
    return { aiData };
  }

  beforeModel() {
    const title = 'Custom Artificial Intelligence Development Services | Primathon';
    const description =
      'Best Artificial intelligence service consulting company specialize in AI software development Services provides AI development services to companies in various industries, from healthcare and education to cybersecurity and remote sensing.';

    this.headData.setData({ title, description });
  }
}
