import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class JobDescComponent extends Component {
  @tracked data = {};
  @tracked formData = {
    name: '',
    email: '',
    portfolio: '',
    cv: '',
  };

  headings = {
    job_objectives: 'About the position',
    qualifications: 'Requirements for this role',
    responsibilities: 'Your responsibilities',
  };

  @action
  async dataHandler({ id }) {
    const data = await (await fetch(`https://primathon.in/blog/wp-json/wp/v2/job_description?id=${id}`)).json();
    const jd = data[0];
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
  formSubmitHandler(e) {
    console.log(this.args.id, 'data');
    e.preventDefault();
  }
}
