import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { toLeft, toRight } from 'ember-animated/transitions/move-over';
import { HOME_SERVICE_CARD_CLICK } from '../../constants/event-name';

export default class HomepageServicesSliderComponent extends Component {
  @tracked activeIndex = 1;

  get activeCardData() {
    return this.args.data[this.activeIndex];
  }

  trackServiceCardClickEvent() {
    if (window.gtag) {
      window.gtag('event', HOME_SERVICE_CARD_CLICK);
    }
  }

  @action
  onCardClick(index) {
    this.activeIndex = index;
    const width = window.innerWidth;
    if (width < 1200) {
      const elm = document.getElementById('service-details');
      if (elm) {
        elm.scrollIntoView({ behavior: 'smooth' });
      }
    }

    this.trackServiceCardClickEvent();
  }

  //get old state and new state and then perform animation
  rules = ({ oldItems, newItems }) => {
    const width = window.innerWidth;
    if (width < 1200) {
      return;
    }
    const oldIndex = this.args.data.findIndex((value) => value === oldItems[0]);
    const newIndex = this.args.data.findIndex((value) => value === newItems[0]);
    if (oldIndex < newIndex) {
      return toLeft;
    } else {
      return toRight;
    }
  };
}
