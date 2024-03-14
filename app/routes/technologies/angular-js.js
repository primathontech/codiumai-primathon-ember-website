import Route from '@ember/routing/route';
import { ANGULAR } from '../../constants/technologies/angular-js';
import { TESTIMONIAL_DATA } from '../../constants/homepage/testimonial';
import { inject as service } from '@ember/service';

export default class AngularJsRoute extends Route {
  @service headData;
  async model() {
    const angularData = ANGULAR;
    const testinomialData = TESTIMONIAL_DATA;
    return { angularData, testinomialData };
  }

  beforeModel() {
    const title = 'AngularJS Development Company | Hire Best Developers in India';
    const description =
      'Are you looking for outstanding web development services? Primathon wields the best AngularJS services for sleek, responsive apps that elevate user experience.';

    this.headData.setData({ title, description });
  }
}
