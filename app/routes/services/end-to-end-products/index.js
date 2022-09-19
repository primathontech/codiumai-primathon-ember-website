import Route from '@ember/routing/route';
import { ENDTOENDSERVICES } from '../../../constants/services/end-to-end-products';
import { inject as service } from '@ember/service';
export default class ServicesEndToEndProductsIndexRoute extends Route {
  @service headData;

  async model() {
    const endToEndServices = ENDTOENDSERVICES;
    return { endToEndServices };
  }
  
  beforeModel() {
    const title = 'Best Custom Software Development Company India| Primathon';
    const description =
      ' If you are looking for the best custom software service India then you have come to the right place. Primathon is the top web application development company Delhi.';
    const keywords =
      'best custom software development company india custom software application development services web application development services india top web application development company delhi best companies for software engineers gurgaon software application development company noida ';
      
    this.headData.setData({ title, description, keywords });
  }
}
