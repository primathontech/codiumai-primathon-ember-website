import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import { EMBER_HERO_SECTION } from '../constants/emberjs/emberHeroSection';
import { EMBER_WORK } from '../constants/emberjs/emberWork';
import { EMBER_OFFER } from '../constants/emberjs/offer';

export default class EmberjsRoute extends Route {
  @service headData;

  async model() {
    const heroSection = EMBER_HERO_SECTION;
    const emberOffer = EMBER_OFFER;
    const emberWork = EMBER_WORK;

    return { heroSection, emberOffer, emberWork };
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
