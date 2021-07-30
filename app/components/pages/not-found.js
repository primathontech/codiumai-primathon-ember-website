import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class PagesNotFoundComponent extends Component {
  @action
  onHireUs() {
    const elm = document.getElementById('contact-hero');
    if (elm) {
      elm.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
