import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class ChatgptThirdpartyIntegrationComponent extends Component {
  @tracked active = 0;
  @tracked arr = this.args.thirdPartyIntegration.cardData;
  @tracked pointsLength = window.innerWidth < 768 ? 0 : window.innerWidth > 1440 ? 2 : 0;
  @tracked length = this.arr.slice(this.pointsLength);
  @tracked scrollValue = 0;
  width = window.innerWidth < 572 ? `${window.innerWidth - 60}px` : '510px';
  @tracked incrementor = 1;

  @action
  changeIndex() {
    this.interval = setInterval(() => {
      if (this.active + 1 >= this.length.length) {
        this.active = 0;
      } else {
        this.active = this.active + this.incrementor;
      }

      this.changeScroll();
    }, 3000);
  }

  @action
  onMouseOver() {
    clearInterval(this.interval);
  }

  @action
  onMouseOut() {
    this.changeIndex();
  }

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
