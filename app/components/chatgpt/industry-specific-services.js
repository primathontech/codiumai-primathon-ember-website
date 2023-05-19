import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class ChatgptIndustrySpecificServicesComponent extends Component {
  @tracked active = 0;
  @tracked scrollValue = 0;
  width = window.innerWidth < 500 ? window.innerWidth : 500;
  maskWidth = (window.innerWidth % this.width);
  @tracked length =
    window.innerWidth < 768
      ? this.args.specificServices.items.length - 1
      : window.innerWidth > 1440
      ? this.args.specificServices.items.length - 3
      : this.args.specificServices.items.length - 1;

  @action
  showNext() {
    if (this.active + 1 > this.length) {
      this.active = this.length;
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
    this.scrollValue = `calc(${this.width}px * ${-this.active})`;
  }
}
