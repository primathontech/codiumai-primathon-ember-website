import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class HomepageClientsSectionComponent extends Component {
  @tracked activeIndex = null;

  @action
  setActiveIndex(index) {
    this.activeIndex = index;
  }

  @action
  removeActiveIndex() {
    this.activeIndex = null;
  }

  @action
  removeActiveIndexImage($event) {
    if ($event.offsetY < 12) {
      this.activeIndex = null;
    }
  }
}
