import Route from '@ember/routing/route';
import fetch from 'fetch';
import { inject as service } from '@ember/service';
import { EMPLOYEE_TESTIMONIAL_DATA } from '../constants/careers/testimonial';

export default class CareersRoute extends Route {
  @service headData;

  async model() {
    const employeeTestimonialData = EMPLOYEE_TESTIMONIAL_DATA
    return employeeTestimonialData;
  }

  beforeModel() {
    const title = 'Top Custom Software Development Services India| Primathon';
    const description =
      ' If you are looking for the best custom software service India then you have come to the right place. Primathon is the top web application development company Delhi.';
    const keywords =
      'top software development services india custom software application development services web application development services india top web application development company delhi best companies for software engineers gurgaon software application development company noida ';

    this.headData.setData({ title, description, keywords });
  }
}
