import Component from '@glimmer/component';

export default class PagesServicesBuildAndManageIndexComponent extends Component {
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
        'We continue to manage the product and its growth!',
      ],
    };
  }
  get serviceTitle() {
    return 'Browse through other services that we provide';
  }

  get serviceData() {
    return [
      {
        route: 'services.end-to-end-products',
        linkUrl: '/',
        imageUrl: '/assets/svgs/right_fit.svg',
        title: 'End-to-end Products',
        subTitle: 'From Start to Finish- Your Project is now Ours!',
        description:
          'From understanding your requirements to perfectly catering to them, from handling your E-commerce development to digitally transforming your business we have the most suitable technological solutions for you. ',
        infoPoint: [
          'Dashboards and Data visualization',
          'Shopify Stores',
          'Booking platforms',
          'Admin panels and CMS',
          'Web & Mobile App development',
          'AI/ML based Recommendation engines',
          'ERC20 Tokens',
          'Smart Contracts',
          'E-commerce Marketplace/platform',
        ],
      },

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
          'Android developers',
          'Product managers',
          'Quality Analysts',
          'UI/Ux Designers',
          'Platform',
        ],
      },
    ];
  }
}
