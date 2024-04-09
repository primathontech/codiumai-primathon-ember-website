import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import { AI_DRIVEN_TOOL } from '../../../constants/ai-driven-tool/ai-driven-tool';
import { TESTIMONIAL_DATA } from '../../../constants/homepage/testimonial';

export default class ServicesStaffAugmentationPythonDevelopersRoute extends Route {
  @service headData;
  async model() {
    const data = AI_DRIVEN_TOOL;
    const testinomialData = TESTIMONIAL_DATA;
    return { data, testinomialData };
  }

  beforeModel() {
    const title =
      'AI-Driven Customer Behavior Analysis Tool SolutionAI-Driven Customer Behavior Analysis Tool Solution |Unlock insights with our AI-Driven Customer Behavior Analysis Tool| Primathon';
    const description = 'Understand customer trends effortlessly with our AI solutions. Enhance your strategy today';

    this.headData.setData({ title, description });
  }
}
