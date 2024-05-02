import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class ServicesStaffAugmentationEmberDevelopersRoute extends Route {
  @service router;

  beforeModel() {
    this.router.transitionTo('services.staff-augmentation.hire-ember-js-developers');
  }
}
