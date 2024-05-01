import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class ServicesStaffAugmentationReactDevelopersRoute extends Route {
  @service router;

  beforeModel() {
    this.router.transitionTo('services.staff-augmentation.hire-react-js-developers');
  }
}
