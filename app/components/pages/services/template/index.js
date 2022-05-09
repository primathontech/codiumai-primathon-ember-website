import Component from '@glimmer/component';

export default class PagesServicesTemplateIndexComponent extends Component {
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
}