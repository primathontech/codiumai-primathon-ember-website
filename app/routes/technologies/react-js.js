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
    const title = " Enhance Your Experience with Primathon's React.js Development Services";
    const description = 'Get Best React.js Development Services | Contact Primathon Today';
    const keywords = 'Get Best React.js Development Services | Contact Primathon Today';

    this.headData.setData({ title, description, keywords });
  }
}
