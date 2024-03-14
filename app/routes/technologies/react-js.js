import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import { REACT_JS } from '../../constants/technologies/react-js';
import { TESTIMONIAL_DATA } from '../../constants/homepage/testimonial';

export default class NodeJsRoute extends Route {
  @service headData;
  async model() {
    const reactJsData = REACT_JS;
    const testinomialData = TESTIMONIAL_DATA;
    return { reactJsData, testinomialData };
  }

  beforeModel() {
    const title = 'Get Best React.js Development Services | Hire From Primathon Technology';
    const description =
      'With Primathon’s React.js development services, you can now experience seamless UI, integration, and scalability to bring your digital vision into reality.';
    const keywords = '';

    this.headData.setData({ title, description, keywords });
  }
}
