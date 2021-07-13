import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class HomepageServicesSliderComponent extends Component {
  @tracked activeIndex = 0;

  get activeCardData() {
    return this.args.data[this.activeIndex];
  }

  @action
  onCardClick(index) {
    this.activeIndex = index;
  }
}
