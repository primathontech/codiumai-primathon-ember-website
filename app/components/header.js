import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class HeaderComponent extends Component {
  @tracked openMenu = false;
  @tracked isHeaderfixed = false;

  get extraClass() {
    if (this.args.type === '2') {
      return this.isHeaderfixed ? 'bg-white border-grey' : 'bg-white border-white';
    }
    return this.isHeaderfixed ? 'bg-white border-grey' : 'bg-spring-wood border-spring-wood';
  }

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

  @action
  onScroll() {
    if (window.scrollY < 30) {
      if (this.isHeaderfixed) {
        this.isHeaderfixed = false;
      }
    } else {
      if (!this.isHeaderfixed) {
        this.isHeaderfixed = true;
      }
    }

    console.log(this.isHeaderfixed);
  }
}
