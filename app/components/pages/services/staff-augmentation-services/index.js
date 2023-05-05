import Component from '@glimmer/component';

export default class PagesServicesStaffAugmentationServicesIndexComponent extends Component {
  get circular_list_content() {
    return {
      heading: 'Why choose us for your project?',
      items: [
        'Agile Methodology',
        'On time delivery',
        'User Centric Approach',
        'Highly Qualified and Experienced Team',
      ],
    };
  }

  get linear_list_content() {
    return {
      heading: 'Why your buisness needs Staff Augmmentation?',
      items: ['Flexible', 'Cost Effective', 'Saves time', 'No training required'],
    };
  }

  get arrow_list_content() {
    return {
      heading: 'Scale up your team with Primathon!',
      items: [
        'We get in touch with you',
        'You share your requirements',
        'We curate the best fit for your requirements',
        'You shortlist and we start working instantly!',
      ],
    };
  }
  get serviceTitle() {
    return 'Browse through other services that we provide';
  }
}
