import Component from '@glimmer/component';
export default class ServicesBrowseThroughServicesIndexComponent extends Component {
  get serviceTitle() {
    return 'Browse through other services that we provide';
  }

  get serviceData() {
    return [
      {
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
