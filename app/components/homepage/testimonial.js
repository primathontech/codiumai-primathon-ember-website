import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class HomepageTestimonialComponent extends Component {
  @tracked activeIndex = 0;

  get disableNext() {
    return this.activeIndex === this.args.data.length - 1;
  }

  get disablePrevious() {
    return this.activeIndex === 0;
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
}
