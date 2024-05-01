import Component from '@glimmer/component';
import { action } from '@ember/object';

import { CONTACT_SCHEDULE_MEETING_CLICK, CONTACT_CAREER_CLICK } from '../../../constants/event-name';

export default class PagesContactIndexComponent extends Component {
  CONTACT_CAREER_CLICK = CONTACT_CAREER_CLICK;
  CONTACT_SCHEDULE_MEETING_CLICK = CONTACT_SCHEDULE_MEETING_CLICK;

  @action
  onHireUs() {
    const elm = document.getElementById('contact-hero');
    if (elm) {
      elm.scrollIntoView({ behavior: 'smooth' });
    }
  }

  trackEvent(name) {
    if (window.gtag) {
      window.gtag('event', name);
    }
  }
}
