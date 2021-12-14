import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';

export default class PagesServicesIndexComponent extends Component {
  SERVICE_PAGES = {
    STAFF_AUGMENTATION: 'staff-augmentation',
    END_TO_END_PRODUCTS: 'end-to-end-products',
    BUILD_AND_MANAGE: 'build-and-manage',
  };

  @tracked _currentServicePage = this.args.pageType ? this.args.pageType : this.SERVICE_PAGES.STAFF_AUGMENTATION;

  get circular_list_content() {
    if (this._currentServicePage === this.SERVICE_PAGES.END_TO_END_PRODUCTS) {
      return {
        heading: 'Why your business needs Staff Augmentation?',
        items: [
          'Agile Methadology',
          'On time delivery',
          'User Centric Approach',
          'Highly Qualified and Experienced Team',
        ],
      };
    } else if (this._currentServicePage === this.SERVICE_PAGES.BUILD_AND_MANAGE) {
      return {
        heading: 'Why your business needs Staff Augmentation?',
        items: [
          'Agile Methadology',
          'On time delivery',
          'User Centric Approach',
          'Highly Qualified and Experienced Team',
        ],
      };
    }
    return {
      heading: 'Why your business needs Staff Augmentation?',
      items: ['Cost Effective', 'No training required', 'Flexible', 'Saves time '],
    };
  }

  get arrow_list_content() {
    if (this._currentServicePage === this.SERVICE_PAGES.END_TO_END_PRODUCTS) {
      return {
        heading: 'Scale up your team with Primathon!',
        items: [
          'We get in touch with you',
          'You share your requirements',
          'We curate the best fit for your requirements',
          'You shortlist and we start working instantly!',
        ],
      };
    } else if (this._currentServicePage === this.SERVICE_PAGES.BUILD_AND_MANAGE) {
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
}
