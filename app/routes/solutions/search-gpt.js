import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import { SEARCH_GPT } from '../../constants/solutions/search-gpt';
import { TESTIMONIAL_DATA } from '../../constants/homepage/testimonial';

export default class ServicesStaffAugmentationAndroidDevelopersRoute extends Route {
  @service headData;
  async model() {
    const data = SEARCH_GPT;
    const testinomialData = TESTIMONIAL_DATA;
    return { data, testinomialData };
  }

  beforeModel() {
    const title = 'Manage Documents with Search GPT Solution | Primathon';
    const description =
      "Discover how Primathon's AI-powered search GPT solution is transforming document management. Simplify your workflow with advanced tools that summarize documents.";

    this.headData.setData({ title, description });
  }
}
