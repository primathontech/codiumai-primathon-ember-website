import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import { AI_STOCK_PREDICTOR } from '../../constants/solutions/ai-stock-predictor';
import { TESTIMONIAL_DATA } from '../../constants/homepage/testimonial';

export default class SolutionsAiStockPredictor extends Route {
  @service headData;
  async model() {
    const data = AI_STOCK_PREDICTOR;
    const testinomialData = TESTIMONIAL_DATA;
    return { data, testinomialData };
  }

  beforeModel() {
    const title = 'Get AI Stock Predictor Service Today | Hire from Primathon';
    const description =
      "Unlock the power of predictive analytics with Primathon's AI Stock Predictor Service. Maximize your investment strategies and stay ahead of the curve.";

    this.headData.setData({ title, description });
  }
}
