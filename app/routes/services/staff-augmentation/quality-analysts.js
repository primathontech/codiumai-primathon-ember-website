import Route from '@ember/routing/route';
import { FAQ_DATA } from '../../../constants/services/faq';
import { QUALITY } from '../../../constants/services/staff-augmentation';

export default class ServicesStaffAugmentationQualityAnalystsRoute extends Route {
  async model() {
    const qualityAnalystsData = QUALITY;
    const faqData = FAQ_DATA;
    return { qualityAnalystsData, faqData };
  }

  afterModel() {}
}
