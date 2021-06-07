import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class HomepageTestimonialComponent extends Component {
  _totoalCardCount = 4;
  @tracked _activeIndex = 0;
  @tracked activeIndexArray = [true, false, false, false, false, false];

  isIndexActive(index) {
    console.log({ index });
    return true;
  }

  @action
  showNext() {
    console.log(this._activeIndex, this._totoalCardCount);
    if (this._activeIndex < this._totoalCardCount - 1) {
      this.activeIndexArray.fill(false);
      this._activeIndex += 1;
      this.activeIndexArray[this.activeIndex] = true;
    }
  }

  @action
  showPrevious() {
    console.log(this._activeIndex, this._totoalCardCount);

    if (this._activeIndex > 0) {
      this.activeIndexArray.fill(false);
      this._activeIndex -= 1;
      this.activeIndexArray[this.activeIndex] = true;
    }
  }
}
