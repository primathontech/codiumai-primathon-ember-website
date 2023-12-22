import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class CaseStudiesRoute extends Route {
  @service headData;

  beforeModel() {
    const title = 'Top Custom Software Development Services | Primathon';
    const description =
    'Looking for the best custom software service in India? Look no further than Primathon - the premier web application development company in Delhi.';
    const keywords =
      'top software development services india custom software application development services web application development services india top web application development company delhi best companies for software engineers gurgaon software application development company noida ';

    this.headData.setData({ title, description, keywords });
  }
}
