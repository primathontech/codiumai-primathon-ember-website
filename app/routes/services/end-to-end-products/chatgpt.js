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
    const title = 'Best Booking System Software Provider Gurgaon | Primathon';
    const description =
      'Primathon is the best booking system software provider Gurgaon.  We are the best online scheduling software company India and online booking system software company Noida';
    const keywords =
      'best booking system software provider gurgaon top appointment scheduling software noida best online scheduling software company india online booking system software company noida ';
    this.headData.setData({ title, description, keywords });
  }
}
