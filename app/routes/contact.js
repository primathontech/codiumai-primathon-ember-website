import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

import { TESTIMONIAL_DATA } from '../constants/homepage/testimonial';

export default class ContactRoute extends Route {
  @service headData;

  async model() {
    const testimonialData = TESTIMONIAL_DATA;
    return { testimonialData };
  }

  beforeModel() {
    const title = 'Contact Primathon for Best Custom Software Development Services';
    const description =
      ' If you are looking for the best custom software service India then you have come to the right place. Primathon is the top web application development company Delhi.';
    const keywords =
      'top software development services india custom software application development services web application development services india top web application development company delhi best companies for software engineers gurgaon software application development company noida ';

    this.headData.setData({ title, description, keywords });
  }
}
