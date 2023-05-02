import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action, set } from '@ember/object';

export default class ChatgptCustomchatgptComponent extends Component {
  @tracked obj = [...this.args.benefitsOfCustomChatGpt.cardData];

  @action
  btnClick(index) {
    this.obj.forEach((value, ind) => {
      if (ind == index) set(value, 'active', !value.active);
    });
  }
}
