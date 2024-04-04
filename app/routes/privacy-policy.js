import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import { PRIVACY_POLICY } from '../constants/privacy-policy';

export default class PrivacyPolicyRoute extends Route {
  @service headData;
  async model() {
    const data = PRIVACY_POLICY;
    return { data };
  }

  beforeModel() {
    const title = 'Privacy Policy | Primathon Technology';

    this.headData.setData({ title });
  }
}
