import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import { AI_CONSULTING_SERVICES } from '../../../constants/services/consulting-category';
import { TESTIMONIAL_DATA } from '../../../constants/homepage/testimonial';
export default class ServicesConsultingCategoryCustomAiConsultingRoute extends Route {
  @service headData;
  async model() {
    const data = AI_CONSULTING_SERVICES;
    const testinomialData = TESTIMONIAL_DATA;
    return { data, testinomialData };
  }
  beforeModel() {
    const title = 'Get Best AI Consulting Services | Hire from Primathon';
    const description =
      "Discover how Primathon's AI consulting services and adoption strategies can propel your business forward. Explore our comprehensive AI services for seamless integration and innovation.";
    const keywords =
      'best booking system software provider gurgaon top appointment scheduling software noida best online scheduling software company india online booking system software company noida ';
    this.headData.setData({ title, description, keywords });
  }
}
