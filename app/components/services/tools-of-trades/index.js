import Component from '@glimmer/component';

export default class ServicesToolsOfTradesIndexComponent extends Component {
  showNext() {
    let x = document.getElementsByClassName('tools-of-trades-scroll-div');
    x[0].scrollBy(185, 0);
  }

  showPrevious() {
    let x = document.getElementsByClassName('tools-of-trades-scroll-div');
    x[0].scrollBy(-185, 0);
  }
}
