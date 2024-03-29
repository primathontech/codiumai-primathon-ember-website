import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import { EMBER } from '../constants/emberjs/emberjs';
import { EMBER_HERO_SECTION } from '../constants/emberjs/emberHeroSection';
import { EMBER_WORK } from '../constants/emberjs/emberWork';
import { EMBER_OFFER } from '../constants/emberjs/offer';
import { TESTIMONIAL_DATA } from '../constants/homepage/testimonial';

export default class EmberJsDevelopmentServicesRoute extends Route {
  @service headData;

  async model() {
    const heroSection = EMBER_HERO_SECTION;
    const emberOffer = EMBER_OFFER;
    const emberWork = EMBER_WORK;
    const emberRemaingSection = EMBER;
    const testinomialData = TESTIMONIAL_DATA;

    return { heroSection, emberOffer, emberWork, emberRemaingSection, testinomialData };
  }

  beforeModel() {
    const title = 'Best ember js development company | Hire ember js developers';
    const description =
      'Are you looking for professional ember js development company in UK, US, India? Hire professional ember js developers and programmers in Primathon.';
    const keywords =
      'top software development services india custom software application development services web application development services india top web application development company delhi best companies for software engineers gurgaon software application development company noida ';

    this.headData.setData({ title, description, keywords });
  }
}
