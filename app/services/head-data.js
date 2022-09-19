import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
export default class HeadDataService extends Service {
  @tracked description;
  @tracked keywords;
  @tracked title;

  @action
  setData(object) {
    const { title, keywords, description } = object;

    this.title = title;
    this.keywords = keywords;
    this.description = description;
  }
}
