import Component from '@glimmer/component';

export default class PagesServicesEndToEndProductIndexComponent extends Component {
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
      heading: 'Why choose us?',
      items: ['Agile Methadology', 'User Centric Approach', 'On-time delivery', 'Highly qualified team'],
    };
  }

  get arrow_list_content() {
    return {
      heading: 'Let us take your project on a journey!',
      items: [
        'You share your idea with us',
        'We create a strategy for your project',
        'Our team starts building it',
        'Product gets launched to the market',
      ],
    };
  }
  get serviceTitle() {
    return 'Browse through other services that we provide';
  }

  get serviceData() {
    return [
      {
        route: 'services.staff-augmentation',
        linkUrl: '/',
        imageUrl: '/assets/svgs/exceptional_engineers.svg',
        title: 'Staff Augmentation      ',
        subTitle: 'We find the best Talent for you!',
        description:
          'Count on us if you need an extra pair of experienced hands. We provide the individual or a whole team of Software Developers at one place by identifying the cream of designers and developers.',
        infoPoint: [
          'Frontend Developers',
          'Backend developers',
          'Full-stack developers',
          'Product managers',
          'Quality Analysts',
          'Product Designers',
        ],
      },

      {
        route: 'services.build-and-manage',
        linkUrl: '/',
        imageUrl: '/assets/svgs/developers.svg',
        title: 'Build & Manage',
        subTitle: 'Not just Building, We also Manage your Products!',
        description:
          'We deliver as we Guarantee. We assure the best management with Value-driven technology aiming at digitally transforming your business keeping intact the latest industry trends.',
      },
    ];
  }
}
