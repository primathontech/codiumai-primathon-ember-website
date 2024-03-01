import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import {
  MENU_HIRE_US_CLICK,
  MENU_CONTACT_CLICK,
  MENU_BLOG_CLICK,
  MENU_ABOUT_CLICK,
  MENU_SERVICES_CLICK,
  MENU_CASE_STUDIES_CLICK,
  MENU_CAREERS_CLICK,
} from '../../constants/event-name';

export default class HeaderIndexComponent extends Component {
  @tracked openMenu = false;
  @tracked openTechnologiesMenu = false;
  @tracked isHeaderfixed = false;
  @tracked activePrimathon = true;

  get extraClass() {
    if (this.args.type === '2') {
      return this.isHeaderfixed ? 'bg-white border-grey' : 'bg-white border-white';
    } else if (this.args.type === '3') {
      return 'bg-white border-grey';
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
      } else if (title === 'about') {
        window.gtag('event', MENU_ABOUT_CLICK);
      } else if (title === 'services') {
        window.gtag('event', MENU_SERVICES_CLICK);
      } else if (title === 'case-studies') {
        window.gtag('event', MENU_CASE_STUDIES_CLICK);
      } else if (title === 'careers') {
        window.gtag('event', MENU_CAREERS_CLICK);
      } else if (title === 'technologies') {
        window.gtag('event', TECHNOLOGIES);
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

  @action
  onLogoClick() {
    this.activePrimathon = !this.activePrimathon;
  }

  @action
  onMenuOpen(title) {
    if (title === 'technologies') {
      this.openTechnologiesMenu = !this.openTechnologiesMenu;
    } else {
      this.openMenu = !this.openMenu;
    }
  }
}
