import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class ChatgptThirdpartyIntegrationComponent extends Component {
  @tracked active = 0;
  @tracked arr = this.args.thirdPartyIntegration.cardData;
  @tracked length = window.innerWidth < 768 ? this.arr : window.innerWidth > 1440 ? this.arr.slice(1) : this.arr;
  @tracked scrollValue = 0;
  width = window.innerWidth < 572 ? `${window.innerWidth - 60}px` : '510px';

  @action
  clickIndex(index) {
    this.active = index;
    this.changeScroll();
  }

  @action
  showNext() {
    if (this.active + 1 > 6) {
      this.active = 6;
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
