import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class HomepageHireUsComponent extends Component {
  @tracked isModalOpen = false;

  @action
  openModal() {
    this.isModalOpen = true;
    document.body.style.overflow = 'hidden';
  }

  @action
  onCloseModal() {
    this.isModalOpen = false;
    document.body.style.overflow = 'unset';
  }
}
