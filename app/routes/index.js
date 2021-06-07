import Route from '@ember/routing/route';

export default class IndexRoute extends Route {
  async model() {
    // const p1 = fetch('/json-data/homepage/services.json');
    // const p2 = fetch('/json-data/homepage/services.json');
    // const p3 = fetch('/json-data/homepage/services.json');
    // const [serviceData, coreValueData, testimonialData] = await Promise.all([p1, p2, p3]);

    // console.log({ serviceData, coreValueData, testimonialData });

    const serviceData = await (await fetch('/json-data/homepage/services.json')).json();
    const coreValueData = await (await fetch('/json-data/homepage/core-value.json')).json();
    const testimonialData = await (await fetch('/json-data/homepage/testimonial.json')).json();
    return { serviceData, coreValueData, testimonialData };
  }
}
