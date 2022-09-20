import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import {
  CAREER_API_ERROR,
  CAREER_API_SUCCESS,
  CAREER_FORM_PAYLOAD_INVALID,
  CAREER_FORM_PAYLOAD_VALID,
  CAREER_SEND_MESSAGE_CLICK,
} from '../../../constants/event-name';

export default class JobDescComponent extends Component {
  @service api;
  @tracked submitted = false; //check if form is submitted
  @tracked apiInProgress = false;
  @tracked apiError = false;
  _COUNTRY_CODE_REGEX = /^(\+?\d{1,3}|\d{1,4})$/;

  //for JD
  @tracked data = {};

  //for form data
  @tracked formData = {
    name: '',
    email: '',
    portfolio: '',
    cv: null,
  };

  //for validation message
  @tracked validation = {
    name: '',
    email: '',
    portfolio: '',
    cv: null,
  };

  headings = {
    job_objectives: 'About the position',
    qualifications: 'Requirements for this role',
    responsibilities: 'Your responsibilities',
  };

  @action
  async dataHandler({ id }) {
    const data = await (await fetch(`http://blog.primathon.in//wp-json/wp/v2/job_description/${id}`)).json();
    const jd = data;
    const span = document.createElement('span');
    const jdDescription = [];

    Object.keys(this.headings).forEach((k) => {
      span.innerHTML = jd[k];
      const list = span.textContent.split('\n').filter((f) => f);

      const idx = list.findIndex((l) => l.includes('\t'));
      const newItem = { title: this.headings[k], description: null, list: [] };

      if (idx == 2) {
        newItem.description = list[0];
      }

      const newList = [];
      let listItem = null;

      for (let i = idx - 1; i < list.length; i++) {
        const e = list[i];

        if (e.includes('\t')) {
          listItem.items.push(e);
        } else {
          if (listItem) newList.push(listItem);
          listItem = { items: [], title: null };
          listItem.title = e;
        }
      }

      newList.push(listItem);
      newItem.list = newList;
      jdDescription.push(newItem);
    });

    this.data = {
      title: jd.job_title,
      department: jd.department,
      location: jd.location,
      experience: jd.work_experience,
      description: jdDescription,
    };
  }

  @action
  formHandler(e) {
    this.formData[e.target.name] = e.target.value;
  }

  @action
  async formSubmitHandler(e) {
    e.preventDefault();
    this.trackEvent(CAREER_SEND_MESSAGE_CLICK);

    if (this.validate()) {
      this.trackEvent(CAREER_FORM_PAYLOAD_VALID, this.userQuestion);

      this.apiInProgress = true;
      const res = await this.api.sendCareerMail(this.formData);

      if (res.status === 200) {
        this.submitted = true;
        this.apiInProgress = true;
        this.trackEvent(CAREER_API_SUCCESS, this.userQuestion);
      } else {
        this.apiError = true;
        this.apiInProgress = true;
        this.trackEvent(CAREER_API_ERROR, this.userQuestion);
      }
    } else {
      this.trackEvent(CAREER_FORM_PAYLOAD_INVALID, this.userQuestion);
    }
  }

  validate() {
    let emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    let validateObj = { ...this.validation };
    let formObj = {};
    let isValidated = true;

    for (let key in this.formData) {
      formObj[key] = this.formData[key] !== null ? this.formData[key].trim() : null;
    }

    if (formObj.name.length < 1) {
      validateObj.name = 'Please enter valid name';
      isValidated = false;
    }

    if (!emailRegex.test(formObj.email)) {
      validateObj.email = 'Please enter valid E-mail';
      isValidated = false;
    }

    if (formObj.cv == null) {
      validateObj.cv = 'Please attach valid CV';
      isValidated = false;
    }

    if (formObj.portfolio.length < 1) {
      validateObj.portfolio = 'Please add valid link';
      isValidated = false;
    }

    this.validation = validateObj;
    return isValidated;
  }

  trackEvent(name, payload) {
    if (window.gtag) {
      window.gtag('event', name, payload);
    }
  }
}
