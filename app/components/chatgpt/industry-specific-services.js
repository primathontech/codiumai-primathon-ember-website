import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class ChatgptIndustrySpecificServicesComponent extends Component {
  @tracked active = 0;
  @tracked scrollValue = 0;
  width = window.innerWidth < 500 ? `${window.innerWidth}px` : '500px';

  @action
  showNext() {
    if (this.active + 1 > 9) {
      this.active = 9;
    } else {
      this.active = this.active + 1;
    }

    this.changeScroll();
  }

  @action
  showPrevious() {
    if (this.active - 1 < 0) {
      this.active = 0;
    } else {
      this.active = this.active - 1;
    }

    this.changeScroll();
  }

  @action
  changeScroll() {
    this.scrollValue = `calc(${this.width} * ${-this.active})`;
  }
}
