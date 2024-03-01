import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import { NODE_JS } from '../../constants/technologies/node-js'
import { TESTIMONIAL_DATA } from '../../constants/homepage/testimonial';

export default class NodeJsRoute extends Route {
  @service headData;
  async model() {
    const nodeJsData = NODE_JS;
    const testinomialData = TESTIMONIAL_DATA;
    return { nodeJsData, testinomialData };
  }

  beforeModel() {
    const title = "Accelerate Your Web Development with Primathon's Node.js Services";
    const description =
      "Unlock the full potential of your web applications with Primathon's expert Node.js development services. Our team delivers scalable, high-performance solutions tailored to meet your business needs";
    const keywords =
      'top software development services india custom software application development services web application development services india top web application development company delhi best companies for software engineers gurgaon software application development company noida ';

    this.headData.setData({ title, description, keywords });
  }
}
