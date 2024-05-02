import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import { CUSTOM_AI_SOLUTIONS } from '../constants/services/end-to-end-products';
import { TESTIMONIAL_DATA } from '../constants/homepage/testimonial';

export default class ServicesConsultingCategoryCustomAiSolutionsRoute extends Route {
  @service headData;

  async model() {
    const data = CUSTOM_AI_SOLUTIONS;
    const testinomialData = TESTIMONIAL_DATA;
    return { data, testinomialData };
  }

  beforeModel() {
    const title = 'Get Custom AI Solutions Today | Hire from Primathon';
    const description =
      "Our team of custom AI solutions specialists conducts a thorough evaluation of your company's operations, products, and objectives to identify potential opportunities for integrating AI technology.";
    const keywords =
      'best booking system software provider gurgaon top appointment scheduling software noida best online scheduling software company india online booking system software company noida ';
    this.headData.setData({ title, description, keywords });
  }
}
