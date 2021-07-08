import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import move from 'ember-animated/motions/move';
import { easeOut, easeIn } from 'ember-animated/easings/cosine';

export default class HomepageTestimonialComponent extends Component {
  @tracked activeIndex = 3;
  @tracked _goForward = false;

  get disableNext() {
    return this.activeIndex === this.args.data.length - 1;
  }

  get disablePrevious() {
    return this.activeIndex === 0;
  }

  @action
  showNext() {
    this._goForward = true;
    const dataCount = this.args.data.length;
    if (this.activeIndex < dataCount - 1) {
      this.activeIndex += 1;
    }
  }

  @action
  showPrevious() {
    this._goForward = false;
    if (this.activeIndex > 0) {
      this.activeIndex -= 1;
    }
  }

  // eslint-disable-next-line require-yield
  *fordwardTransition({ insertedSprites, keptSprites, removedSprites }) {
    console.log('## fordwardTransition: ');
    for (let sprite of insertedSprites) {
      sprite.startAtPixel({ x: window.innerWidth });
      move(sprite, { easing: easeOut });
    }

    for (let sprite of keptSprites) {
      move(sprite);
    }

    for (let sprite of removedSprites) {
      sprite.endAtPixel({ x: -window.innerWidth });
      move(sprite, { easing: easeIn });
    }
  }

  /* eslint-disable require-yield */
  *backwardTransition({ insertedSprites, keptSprites, removedSprites }) {
    console.log('## backwardTransition: ');
    for (let sprite of insertedSprites) {
      sprite.startAtPixel({ x: -window.innerWidth });
      move(sprite, { easing: easeOut });
    }

    for (let sprite of keptSprites) {
      move(sprite);
    }

    for (let sprite of removedSprites) {
      sprite.endAtPixel({ x: window.innerWidth });
      move(sprite, { easing: easeIn });
    }
  }
}
