import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { toLeft, toRight } from 'ember-animated/transitions/move-over';
export default class HomepageTestimonialComponent extends Component {
  @tracked activeIndex = 0;
  @tracked firstRendering = true;

  get disableNext() {
    return this.activeIndex === this.args.data.length - 1;
  }

  get disablePrevious() {
    return this.activeIndex === 0;
  }

  get activeCardData() {
    return this.args.data[this.activeIndex];
  }

  increaseActiveIndex(elms) {
    const dataCount = this.args.data.length;
    if (this.activeIndex < dataCount - 1) {
      this.activeIndex += 1;

      elms[this.activeIndex].classList.add('insert');
      setTimeout(() => {
        elms[this.activeIndex].classList.add('opaque');
        elms[this.activeIndex].classList.remove('insert');
      }, 500);
    }
  }

  decreaseActiveIndex(elms) {
    if (this.activeIndex > 0) {
      this.activeIndex -= 1;

      elms[this.activeIndex].classList.add('insert');
      setTimeout(() => {
        elms[this.activeIndex].classList.add('opaque');
        elms[this.activeIndex].classList.remove('insert');
      }, 500);
    }
  }

  @action
  showNext() {
    if (this.firstRendering) {
      this.firstRendering = false;
    }
    const elms = document.querySelectorAll('.testimonial-item');
    elms[this.activeIndex].classList.add('remove');
    setTimeout(() => {
      elms[this.activeIndex].classList.remove('remove');
      elms[this.activeIndex].classList.remove('opaque');
      this.increaseActiveIndex(elms);
    }, 400);
  }

  @action
  showPrevious() {
    const elms = document.querySelectorAll('.testimonials-section .testimonial-item');
    elms[this.activeIndex].classList.add('remove');
    setTimeout(() => {
      elms[this.activeIndex].classList.remove('remove');
      elms[this.activeIndex].classList.remove('opaque');
      this.decreaseActiveIndex(elms);
    }, 400);
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
