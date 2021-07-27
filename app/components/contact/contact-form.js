import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class ContactContactFormComponent extends Component {
  @tracked submitted = false; //check if form is submitted

  //user questions
  @tracked userQuestion = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
  };

  //for validation message
  @tracked validation = {
    firstName: '',
    lastName: '',
    email: '',
    phone:'',
    message: '',
  };

  //to remove validation message if focus on input
  focus = (event) => {
    this.validation[event.target.name] = '';
  };

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
    if ((formObj.phone.length > 10 || formObj.phone.length < 10) && formObj.phone.length !== 0 ) {
      validateObj.phone = 'Please enter valid phone number';
      isValidated = false;
    }
    if (formObj.message.length < 10) {
      validateObj.message = 'Please enter valid message';
      isValidated = false;
    }
    this.validation = validateObj;
    return isValidated;
  }

  @action sendMessage() {
    if (this.validate()) {
      console.log(this.userQuestion);
      this.submitted = true;
      const recipient = 'yashveer@primathon.in'
      const subject = 'New Sales Enquiry'
      const body = `Name: ${this.userQuestion.firstName} ${this.userQuestion.lastName}
Email: ${this.userQuestion.email} 
${this.userQuestion.phone ? 'Phone: '+ this.userQuestion.phone : ''}
      
${this.userQuestion.message}`
      window.open(`mailto:${recipient}?subject=${subject}&body=${encodeURIComponent(body)}`);
    } else {
      console.log(this.validation);
    }
  }
}