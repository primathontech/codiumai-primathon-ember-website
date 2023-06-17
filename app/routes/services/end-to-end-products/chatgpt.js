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
    const title = 'Custom ChatGPT API Integration and Development Services | Primathon';
    const description =
      'Primathon ChatGPT software developers offer a variety of custom ChatGPT API integration and development services to enhance your business processes for growth and scalability.';
    const keywords =
      'best booking system software provider gurgaon top appointment scheduling software noida best online scheduling software company india online booking system software company noida ';
    this.headData.setData({ title, description, keywords });
  }
}
