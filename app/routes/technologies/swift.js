import Route from '@ember/routing/route';
import { SWIFT } from '../../constants/technologies/swift';
import { TESTIMONIAL_DATA } from '../../constants/homepage/testimonial';
import { inject as service } from '@ember/service';

export default class JavaScriptRoute extends Route {
  @service headData;
  async model() {
    const swiftData = SWIFT;
    const testinomialData = TESTIMONIAL_DATA;
    return { swiftData, testinomialData };
  }

  beforeModel() {
    const title = 'Top Python Development Services Worldwide | Hire from Primathon';
    const description =
      'Need Python development services? Whether you need web, machine learning, AI or automation solutions, we have the expertise and experience to deliver them';

    this.headData.setData({ title, description });
  }
}
