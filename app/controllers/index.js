import Controller from '@ember/controller';

export default class IndexController extends Controller {
  get serviceTitle() {
    return this.model.serviceData.title;
  }

  get serviceDescription() {
    return this.model.serviceData.description;
  }

  get serviceData() {
    return this.model.serviceData.data;
  }

  get coreValueTitle() {
    return this.model.coreValueData.title;
  }

  get coreValueDescription() {
    return this.model.coreValueData.description;
  }

  get coreValueData() {
    return this.model.coreValueData.data;
  }

  get testimonialTitle() {
    return this.model.testimonialData.title;
  }

  get testimonialDescription() {
    return this.model.testimonialData.description;
  }

  get testimonialData() {
    return this.model.testimonialData.data;
  }

  get blogTitle() {
    return this.model.blogData.title;
  }

  get blogDescription() {
    return this.model.blogData.description;
  }

  get blogData() {
    return this.model.blogData.data;
  }
  get employeeTestimonialData() {
    return this.model.employeeTestimonialData.data;
  }

  get getInTouchClickEvent() {
    return this.model.getInTouchClickEvent;
  }
}
