import Component from '@glimmer/component';

export default class PagesCaseStudyBlogIndexComponent extends Component {
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
          'Android developers',
          'Product managers',
          'Quality Analysts',
          'UI/UX Designers',
          'Platform',
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
