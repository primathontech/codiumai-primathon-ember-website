import Route from '@ember/routing/route';
import { FAQ_DATA } from '../../../constants/services/faq';
import { QUALITY } from '../../../constants/services/staff-augmentation';
import { inject as service } from '@ember/service';

export default class ServicesStaffAugmentationQualityAnalystsRoute extends Route {
  @service headData;
  async model() {
    const qualityAnalystsData = QUALITY;
    const faqData = FAQ_DATA;
    return { qualityAnalystsData, faqData };
  }

  beforeModel() {
    const title = ' Hire Senior Quality Assurance Analyst Gurgaon | Primathon';
    const description =
      'Looking to hire senior quality assurance analyst Gurgaon? Then you have come to the right place. Primathon provides the certified software quality analyst service India.';
    const keywords =
      'hire quality assurance analyst gurgaon certified software quality analyst service india hire senior quality assurance analyst gurgaon quality assurance data analyst solutions delhi ';

    this.headData.setData({ title, description, keywords });
  }
}
