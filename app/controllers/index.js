import Controller from '@ember/controller';

export default class IndexController extends Controller {
  get serviceTitle() {
    console.log('Hello There', this.model.serviceData);
    return this.model.serviceData.title;
  }

  get serviceDescription() {
    return this.model.serviceData.description;
  }

  get serviceData() {
    return this.model.serviceData.data;
  }

  get coreValueTitle() {
    console.log('Hello There', this.model.coreValueData);
    return this.model.coreValueData.title;
  }

  get coreValueDescription() {
    return this.model.coreValueData.description;
  }

  get coreValueData() {
    return this.model.coreValueData.data;
  }

  get testimonialTitle() {
    console.log('Hello There', this.model.testimonialData);
    return this.model.testimonialData.title;
  }

  get testimonialDescription() {
    return this.model.testimonialData.description;
  }

  get testimonialData() {
    return this.model.testimonialData.data;
  }
}
