import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import { CHATGPT_DATA } from '../../../constants/chatgpt/chatgpt';

export default class ServicesEndToEndProductsChatgptRoute extends Route {
  @service headData;

  async model() {
    const chatgptData = CHATGPT_DATA;
    return { chatgptData };
  }

  beforeModel() {
    const title = 'Custom ChatGPT Development Services India | Primathon';
    const description =
      'ChatGPT offers top-notch chatbot development services for businesses, utilizing cutting-edge AI technology to create engaging and personalized chat experiences.';
    const keywords =
      'best booking system software provider gurgaon top appointment scheduling software noida best online scheduling software company india online booking system software company noida ';
    this.headData.setData({ title, description, keywords });
  }
}
