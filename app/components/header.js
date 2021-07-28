import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { MENU_HIRE_US_CLICK, MENU_CONTACT_CLICK, MENU_BLOG_CLICK } from '../constants/event-name';
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
  closeOpenMenu(title) {
    if (window.innerWidth < 1024) {
      const elm = document.getElementById('hamburger-btn');
      if (elm) {
        elm.click();
      }
    }

    if (title && window.gtag) {
      if (title === 'blog') {
        window.gtag('event', MENU_BLOG_CLICK);
      } else if (title === 'contact') {
        window.gtag('event', MENU_CONTACT_CLICK);
      }
    }
  }

  @action
  onHireUs() {
    if (this.args.onHireUs) {
      this.args.onHireUs();
    }

    this.closeOpenMenu();

    if (window.gtag) {
      window.gtag('event', MENU_HIRE_US_CLICK);
    }
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
  }
}
