import Route from '@ember/routing/route';
import { FAQ_DATA } from '../../../constants/services/faq';
import { BACKEND } from '../../../constants/services/staff-augmentation';
import { inject as service } from '@ember/service';

export default class ServicesStaffAugmentationBackendDevelopersRoute extends Route {
  @service headData;
  async model() {
    const backendData = BACKEND;
    const faqData = FAQ_DATA;
    return { backendData, faqData };
  }

  afterModel() {
    this.headData.title = 'Hire Top Quality Backend Developers India | Primathon';
    this.headData.description = ': If you are looking to hire top quality backend developers India, Primathon will be the option for you. We are the best development service provider company India.';
    this.headData.keywords = 'hire top quality backend developers india best backend development service provider company affordable backend development solutions top backend development company gurgaon best backend development service provider companies ';
  }
}
