import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class HomepageHeroSectionComponent extends Component {
  @tracked videoSource = '';
  @tracked showControls = false;
  @tracked showPlayButton = false;
  _element = null;
  _videoUrl = 'https://prima3d.s3.amazonaws.com/primathon.mp4';

  @action
  playVideo(element) {
    this._element = element;
    this.videoSource = this._videoUrl;
    this.showControls = true;
    this.showPlayButton = false;
  }

  @action
  onEnded() {
    this.showPlayButton = true;
    this.showControls = false;
    this.videoSource = '';
    if (this._element) {
      this._element.load();
    }
  }
}
