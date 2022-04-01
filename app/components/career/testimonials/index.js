import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
export default class PagesCareerIndexComponent extends Component {
  @tracked activeIndex = 0;

  @action
  showContent(index) {
    this.activeIndex = index;
  }
}
