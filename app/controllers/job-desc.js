import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
export default class JobDescController extends Controller {
  queryParams = ['id'];

  @tracked id = null;
  @tracked model;
}
