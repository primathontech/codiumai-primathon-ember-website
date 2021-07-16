import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class HeaderComponent extends Component {
  @tracked openMenu = false;

  @action
  closeOpenMenu() {
    if (window.innerWidth < 1024) {
      const elm = document.getElementById('hamburger-btn');
      if (elm) {
        elm.click();
      }
    }
  }

  @action
  onHireUs() {
    if (this.args.onHireUs) {
      this.args.onHireUs();
    }

    this.closeOpenMenu();
  }
}
