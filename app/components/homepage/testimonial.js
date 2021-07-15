import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { toLeft, toRight } from 'ember-animated/transitions/move-over';
export default class HomepageTestimonialComponent extends Component {
  @tracked activeIndex = 0;

  get disableNext() {
    return this.activeIndex === this.args.data.length - 1;
  }

  get disablePrevious() {
    return this.activeIndex === 0;
  }

  get activeCardData() {
    return this.args.data[this.activeIndex];
  }

  @action
  showNext() {
    const dataCount = this.args.data.length;
    if (this.activeIndex < dataCount - 1) {
      this.activeIndex += 1;
    }
  }

  @action
  showPrevious() {
    if (this.activeIndex > 0) {
      this.activeIndex -= 1;
    }
  }

  //get old state and new state and then perform animation
  rules = ({ oldItems, newItems }) => {
    let o = this.args.data.findIndex((value) => value === oldItems[0]);
    let n = this.args.data.findIndex((value) => value === newItems[0]);
    if (o < n) {
      return toLeft;
    } else {
      return toRight;
    }
  };
}
