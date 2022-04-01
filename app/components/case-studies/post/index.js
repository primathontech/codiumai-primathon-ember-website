import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class CaseStudiesPostIndexComponent extends Component {
  @tracked selectedTag = [];

  get tags() {
    return [
      'All',
      'AI/ML',
      'Booking Platforms',
      'Admin Panel',
      'Mobile Apps',
      'Web Development',
      'Fintech',
      'Blockchain',
      'ERC 20',
      'SaaS',
      'Data Migration',
      'Smart Contract',
    ];
  }

  get postData() {
    return [
      {
        poster: 'https://picsum.photos/330/275',
        title: 'Stockal',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        tags: ['All', 'AI/ML', 'Booking Platforms'],
      },

      {
        poster: 'https://picsum.photos/330/275',
        title: 'Bloom Hotels',
        description: 'Built a booking platform for xyz using tech a, tech, b, tech c',
        tags: ['Fintech', 'Blockchain', 'ERC 20'],
      },

      {
        poster: 'https://picsum.photos/330/275',
        title: 'Fi',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        tags: ['Mobile Apps', 'Web Development', 'Fintech'],
      },

      {
        poster: 'https://picsum.photos/330/275',
        title: 'Stockal',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        tags: ['All', 'AI/ML', 'Booking Platforms'],
      },

      {
        poster: 'https://picsum.photos/330/275',
        title: 'Bloom Hotels',
        description: 'Built a booking platform for xyz using tech a, tech, b, tech c',
        tags: ['Fintech', 'Blockchain', 'ERC 20'],
      },

      {
        poster: 'https://picsum.photos/330/275',
        title: 'Fi',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        tags: ['Mobile Apps', 'Web Development', 'Fintech'],
      },
    ];
  }

  @action
  onSelect(tag) {
    if (this.selectedTag.includes(tag)) {
      this.selectedTag = this.selectedTag.filter((e) => e !== tag);
    } else {
      this.selectedTag = [...this.selectedTag, tag];
    }
  }
}
