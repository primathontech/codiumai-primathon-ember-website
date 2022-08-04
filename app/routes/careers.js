import Route from '@ember/routing/route';
import fetch from 'fetch';

export default class CareersRoute extends Route {
  async model() {
    const employeeTestimonialData = await (await fetch('https://primathon.in/wp-json/wp/v2/testimonial')).json();
    return employeeTestimonialData;
  }
  afterModel() {
    // Raising Typeerror on window.scroll on installing fastboot
    // window?.scrollTo(0, 0);
  }
}
