import Route from '@ember/routing/route';
import fetch from 'fetch';
import { inject as service } from '@ember/service';

export default class OpenPositionRoute extends Route {
  @service headData;

  async model() {
    const jobData = await (await fetch('https://primathon.in/blog/wp-json/wp/v2/jobs_posting')).json();
    return jobData;
  }
  beforeModel() {
    const title = 'Top Custom Software Development Services | Primathon';
    const description =
      ' If you are looking for the best custom software service India then you have come to the right place. Primathon is the top web application development company Delhi.';
    const keywords =
      'top software development services india custom software application development services web application development services india top web application development company delhi best companies for software engineers gurgaon software application development company noida ';

    this.headData.setData({ title, description, keywords });
  }
}
