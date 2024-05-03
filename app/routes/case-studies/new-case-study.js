import Route from '@ember/routing/route';
import fetch from 'fetch';
import { inject as service } from '@ember/service';
export default class CaseStudiesNewCaseStudyRoute extends Route {
  @service headData;
  async model() {
    const response = await fetch('/json-data/casestudies/bloomPageData.json');
    const data = await response.json();
    console.log('blog', data);
    return data;
  }
  beforeModel() {
    const title = 'Top Custom Software Development Services | Primathon';
    const description =
      'Looking for the best custom software service in India? Look no further than Primathon - the premier web application development company in Delhi.';
    const keywords =
      'top software development services india custom software application development services web application development services india top web application development company delhi best companies for software engineers gurgaon software application development company noida ';
    this.headData.setData({ title, description, keywords });
  }
}