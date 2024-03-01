import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import { REACT_NATIVE } from '../../constants/technologies/react-native'
import { TESTIMONIAL_DATA } from '../../constants/homepage/testimonial';

export default class NodeJsRoute extends Route {
  @service headData;
  async model() {
    const ReactNativeData = REACT_NATIVE;
    const testinomialData = TESTIMONIAL_DATA;
    return { ReactNativeData, testinomialData };
  }

  beforeModel() {
    const title = "Redefining Your App Vision  With Primathon’s React Native Services";
    const description =
      "Embark on your app journey with Primathon's  React Native services. As your ultimate development partner, we streamline the process, offering cross-platform solutions for both Android and iOS. Backed by expertise and dedication, we deliver native-like experiences efficiently and effectively.";
    const keywords =
      'top software development services india custom software application development services web application development services india top web application development company delhi best companies for software engineers gurgaon software application development company noida';

    this.headData.setData({ title, description, keywords });
  }
}
