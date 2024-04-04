import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class FooterIndexComponent extends Component {
  @tracked openCompanyMenu = false;
  @tracked openServicesMenu = false;
  @tracked openSolutionsMenu = false;
  @tracked isSmallScreen = window.innerWidth < 950;

  @action
  onMenuOpen(title) {
    if (title === 'company') {
      this.openCompanyMenu = !this.openCompanyMenu;
    } else if (title === 'services') {
      this.openServicesMenu = !this.openServicesMenu;
    } else {
      this.openSolutionsMenu = !this.openSolutionsMenu;
    }
  }

  @action
  onResizeScreen() {
    if (window.innerWidth < 950 && !this.isSmallScreen) {
      this.isSmallScreen = true;
    } else if (window.innerWidth >= 950 && this.isSmallScreen) {
      this.isSmallScreen = false;
    }
  }
}
