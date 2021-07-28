import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class ContactContactFormComponent extends Component {
  @service api;
  @tracked submitted = false; //check if form is submitted
  @tracked apiInProgress = false;
  @tracked apiError = false;
  _COUNTRY_CODE_REGEX = /^(\+?\d{1,3}|\d{1,4})$/;

  //user questions
  @tracked userQuestion = {
    firstName: '',
    lastName: '',
    email: '',
    countryCode: '+91',
    phone: '',
    companyName: '',
    message: '',
  };

  //for validation message
  @tracked validation = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    companyName: '',
    message: '',
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

  countryCodeValidator(code) {
    return this._COUNTRY_CODE_REGEX.test(code);
  }

  @action validate() {
    let emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    let validateObj = { ...this.validation };
    let formObj = {};
    let isValidated = true;

    for (let key in this.userQuestion) {
      formObj[key] = this.userQuestion[key].trim();
    }
    if (formObj.firstName.length < 1) {
      validateObj.firstName = 'Please enter valid First name';
      isValidated = false;
    }
    if (formObj.lastName.length < 1) {
      validateObj.lastName = 'Please enter valid Last name';
      isValidated = false;
    }
    if (!emailRegex.test(formObj.email)) {
      validateObj.email = 'Please enter valid email';
      isValidated = false;
    }
    if (formObj.phone) {
      if (!this.countryCodeValidator(formObj.countryCode)) {
        validateObj.countryCode = 'Please enter valid country code';
        isValidated = false;
      }
    }

    // if ((formObj.phone.length > 10 || formObj.phone.length < 10) && formObj.phone.length !== 0) {
    //   validateObj.phone = 'Please enter valid phone number';
    //   isValidated = false;
    // }

    if (formObj.companyName.length < 1) {
      validateObj.companyName = 'Please enter valid company name';
      isValidated = false;
    }
    if (formObj.message.length < 10) {
      validateObj.message = 'Please enter valid message';
      isValidated = false;
    }
    this.validation = validateObj;
    return isValidated;
  }

  @action
  async sendMessage() {
    if (this.validate()) {
      this.apiInProgress = true;
      const res = await this.api.sendContactMail(this.userQuestion);

      if (res.status === 200) {
        this.submitted = true;
        this.apiInProgress = true;
      } else {
        this.apiError = true;
        this.apiInProgress = true;
      }
    }
  }
}
