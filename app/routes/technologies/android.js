import Route from '@ember/routing/route';
import { ANDROID } from '../../constants/technologies/android';
import { TESTIMONIAL_DATA } from '../../constants/homepage/testimonial';
import { inject as service } from '@ember/service';

export default class JavaScriptRoute extends Route {
  @service headData;
  async model() {
    const androidData = ANDROID;
    const testinomialData = TESTIMONIAL_DATA;
    return { androidData, testinomialData };
  }

  beforeModel() {
    const title = 'Top Android Development Services in India | Hire from Primathon';
    const description =
      "Seeking Android development services? Unlock innovation with our precise execution, ensuring top-notch products customized to meet your exact requirements.";

    this.headData.setData({ title, description });
  }
}
