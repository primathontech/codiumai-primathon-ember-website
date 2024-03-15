import Route from '@ember/routing/route';
import { JAVASCRIPT } from '../../constants/technologies/javascript';
import { TESTIMONIAL_DATA } from '../../constants/homepage/testimonial';
import { inject as service } from '@ember/service';

export default class JavaScriptRoute extends Route {
  @service headData;
  async model() {
    const javascriptData = JAVASCRIPT;
    const testinomialData = TESTIMONIAL_DATA;
    return { javascriptData, testinomialData };
  }

  beforeModel() {
    const title = 'India’s Best JavaScript Development Services | Hire from Primathon';
    const description =
      'Looking for top-tier JavaScript development services? Our team specializes in web applications, UI/UX design, optimization, and more to enhance your digital solutions.';

    this.headData.setData({ title, description });
  }
}
