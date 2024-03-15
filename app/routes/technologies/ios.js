import Route from '@ember/routing/route';
import { IOS } from '../../constants/technologies/ios';
import { TESTIMONIAL_DATA } from '../../constants/homepage/testimonial';
import { inject as service } from '@ember/service';

export default class JavaScriptRoute extends Route {
  @service headData;
  async model() {
    const iosData = IOS;
    const testinomialData = TESTIMONIAL_DATA;
    return { iosData, testinomialData };
  }

  beforeModel() {
    const title = 'Global Leaders in iOS Development Services | Hire from Primathon';
    const description =
      "Looking for comprehensive iOS app development services? From initial design to final deployment, our expertise spans the full spectrum of iOS development.";

    this.headData.setData({ title, description });
  }
}
