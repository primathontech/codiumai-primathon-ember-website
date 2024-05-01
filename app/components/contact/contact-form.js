import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import {
  CONTACT_SEND_MESSAGE_CLICK,
  CONTACT_FORM_PAYLOAD_VALID,
  CONTACT_FORM_PAYLOAD_INVALID,
  CONTACT_API_SUCCESS,
  CONTACT_API_ERROR,
} from '../../constants/event-name';

export default class ContactContactFormComponent extends Component {
  @service router;
  @service api;
  @tracked submitted = false; //check if form is submitted
  @tracked apiInProgress = false;
  @tracked apiError = false;
  @tracked countryTelCode = '+91';
  _COUNTRY_CODE_REGEX = /^(\+?\d{1,3}|\d{1,4})$/;

  //user questions
  @tracked userQuestion = {
    name: '',
    email: '',
    phone: '',
    companyName: '',
  };

  //for validation message
  @tracked validation = {
    name: '',
    email: '',
    phone: '',
    companyName: '',
  };

  //to remove validation message if focus on input
  @action
  resetErrorMessage(name) {
    if (this.apiError) {
      this.apiError = false;
    }
    if (this.validation[name]) {
      this.validation = { ...this.validation, [name]: '' };
    }
  }

  @action onChange(event) {
    this.countryTelCode = event.target.value;
  }

  @action validate() {
    let emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    let validateObj = { ...this.validation };
    let formObj = {};
    let isValidated = true;

    for (let key in this.userQuestion) {
      formObj[key] = this.userQuestion[key].trim();
    }
    if (formObj.name.length < 1) {
      validateObj.name = 'Please enter valid Name';
      isValidated = false;
    }
    if (!emailRegex.test(formObj.email)) {
      validateObj.email = 'Please enter valid email';
      isValidated = false;
    }

    if (!formObj.phone || formObj.phone.length !== 10) {
      validateObj.phone = 'Please enter valid phone number';
      isValidated = false;
    }

    if (formObj.companyName.length < 1) {
      validateObj.companyName = 'Please enter valid company name';
      isValidated = false;
    }
    this.validation = validateObj;
    return isValidated;
  }

  @action
  async sendMessage() {
    this.trackEvent(CONTACT_SEND_MESSAGE_CLICK);
    if (this.validate()) {
      this.userQuestion.phone = this.countryTelCode + this.userQuestion.phone;
      this.trackEvent(CONTACT_FORM_PAYLOAD_VALID, this.userQuestion);

      this.apiInProgress = true;
      const res = await this.api.sendContactMail(this.userQuestion);

      if (res.status === 200) {
        this.args.onCloseModal && this.args.onCloseModal();

        // redirect to thak you page
        this.router.transitionTo('thank-you', {
          queryParams: { name: this.userQuestion.name, prima_web_thank_you: 'protected' },
        });

        this.apiInProgress = true;
        // reset the form
        this.userQuestion = {
          name: '',
          email: '',
          phone: '',
          companyName: '',
        };
        this.trackEvent(CONTACT_API_SUCCESS, this.userQuestion);
      } else {
        this.apiError = true;
        this.apiInProgress = true;
        this.trackEvent(CONTACT_API_ERROR, this.userQuestion);
      }
    } else {
      this.trackEvent(CONTACT_FORM_PAYLOAD_INVALID, this.userQuestion);
    }
  }

  @action
  closeToast() {
    setTimeout(() => (this.submitted = false), 3000);
  }

  @action
  handleModalClick(event) {
    event.stopPropagation();
  }

  trackEvent(name, payload) {
    if (window.gtag) {
      window.gtag('event', name, payload);
    }
  }
}
