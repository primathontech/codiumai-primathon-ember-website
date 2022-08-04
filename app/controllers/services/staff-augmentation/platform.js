import Controller from '@ember/controller';

export default class ServicesStaffAugmentationPlatformController extends Controller {
  get platformsTitle() {
    return this.model.platformData.title;
  }

  get platformsData() {
    return this.model.platformData.data;
  }

  get platformsAbout() {
    return this.model.platformData.about;
  }

  get platformsBg() {
    return this.model.platformData.bg;
  }

  get platformsCircularList() {
    return this.model.platformData.circular_list;
  }
}
