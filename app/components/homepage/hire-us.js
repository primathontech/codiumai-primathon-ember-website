import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { FOOTER_GET_IN_TOUCH_CLICK } from '../../constants/event-name';

export default class HomepageHireUsComponent extends Component {
  @tracked isModalOpen = false;

  @action
  trackGetInTouch() {
    if (window.gtag) {
      window.gtag('event', FOOTER_GET_IN_TOUCH_CLICK);
    }
  }

  @action
  openModal() {
    this.isModalOpen = true;
    document.body.style.overflow = 'hidden';
  }

  @action
  closeModal() {
    this.isModalOpen = false;
    document.body.style.overflow = '';
  }
}
