import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class ContactRoute extends Route {
  @service headData;
  @service router;

  async model(_, transition) {
    // later to make this router protected
    if (transition.to?.queryParams?.name && transition.to?.queryParams?.prima_web_thank_you === 'protected') {
      return { name: transition.to?.queryParams?.name };
    } else {
      this.router.transitionTo('/');
    }
  }

  beforeModel() {
    const title = 'Thank You | Primathon';
    const description = '';

    this.headData.setData({ title, description });
  }
}
