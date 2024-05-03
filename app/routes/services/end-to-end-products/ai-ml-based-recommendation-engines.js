import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class ServicesEndToEndProductsAIMLBasedRecommendationRoute extends Route {
  @service router;

  beforeModel() {
    this.router.transitionTo('services.ai-hub.ai-software-development-services');
  }
}
