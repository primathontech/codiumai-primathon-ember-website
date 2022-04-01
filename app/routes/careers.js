import Route from '@ember/routing/route';

export default class CareersRoute extends Route {
  async model() {
    const employeeTestimonialData = await (await fetch('https://primathon.in/wp-json/wp/v2/testimonial')).json();
    return employeeTestimonialData;
  }
  afterModel() {
    window.scrollTo(0, 0);
  }
}
