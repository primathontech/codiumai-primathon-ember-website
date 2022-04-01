import Component from '@glimmer/component';
import { action } from '@ember/object';
import { FOOTER_GET_IN_TOUCH_CLICK } from '../../../constants/event-name';

export default class HomepageHireUsComponent extends Component {
  @action
  trackGetInTouch() {
    if (window.gtag) {
      window.gtag('event', FOOTER_GET_IN_TOUCH_CLICK);
    }
  }
}
