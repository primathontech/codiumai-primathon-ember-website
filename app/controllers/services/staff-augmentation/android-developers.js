import Controller from '@ember/controller';

export default class ServicesStaffAugmentationAndroidDevelopersController extends Controller {
  get androidDevelopersTitle() {
    return this.model.androidDevelopersData.title;
  }

  get androidDevelopersData() {
    return this.model.androidDevelopersData.data;
  }

  get androidDeveloperAbout() {
    return this.model.androidDevelopersData.about;
  };

  get androidDeveloperBg() {
    return this.model.androidDevelopersData.bg;
  };
};
