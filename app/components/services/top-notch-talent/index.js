import Component from '@glimmer/component';

export default class ServicesTopNotchTalentIndexComponent extends Component {
  showNext() {
    let x = document.getElementsByClassName('top-notch-talent-scroll-div');
    x[0].scrollBy(215, 0);
  }

  showPrevious() {
    let x = document.getElementsByClassName('top-notch-talent-scroll-div');
    x[0].scrollBy(-215, 0);
  }
}
