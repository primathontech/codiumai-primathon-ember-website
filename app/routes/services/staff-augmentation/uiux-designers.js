import Route from '@ember/routing/route';
import { UI_UX } from '../../../constants/services/staff-augmentation';

export default class ServicesStaffAugmentationUiuxDesignersRoute extends Route {
  async model() {
    const uiuxDesignersData = UI_UX;
    return { uiuxDesignersData };
  }

  afterModel() {}
}
