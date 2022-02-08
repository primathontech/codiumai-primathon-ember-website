import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
export default class PagesOpenPositionIndexComponent extends Component {
  @tracked query = null;

  @action
  setQuery(query) {
    console.log(query);
    this.query = query;
  }
}
