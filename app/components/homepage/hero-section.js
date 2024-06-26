import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { HOME_POSTER_GET_IN_TOUCH, HOME_POSTER_PLAY_VIDEO } from '../../constants/event-name';
export default class HomepageHeroSectionComponent extends Component {
  @tracked videoSource = '';
  @tracked showControls = false;
  @tracked showPlayButton = true;
  @tracked autoplay = true;
  @tracked showMobileVideoView = false;
  videoId = 'POSTER_VIDEO';
  _videoUrl = 'https://prima3d.s3.amazonaws.com/primathon.mp4';
  _isFullScreen = false;

  trackVideoPlayEvent() {
    if (window.gtag) {
      window.gtag('event', HOME_POSTER_PLAY_VIDEO);
    }
  }

  @action
  onGetInTouch() {
    if (window.gtag) {
      window.gtag('event', HOME_POSTER_GET_IN_TOUCH);
    }
  }

  @action
  playVideo() {
    if (!this._element) {
      this._element = document.getElementById(this.videoId);
    }
    this.videoSource = this._videoUrl;
    this.showPlayButton = false;

    this.trackVideoPlayEvent();
  }

  @action
  addControl() {
    if (!this._element) {
      this._element = document.getElementById(this.videoId);
    }
    if (!this.showControls) {
      this.showControls = true;
    }
  }

  @action
  onMetaLoad() {
    if (this._element.requestFullscreen) {
      this._element.requestFullscreen();
    } else if (this._element.mozRequestFullScreen) {
      this._element.mozRequestFullScreen();
    } else if (this._element.webkitRequestFullscreen) {
      this._element.webkitRequestFullscreen();
    } else if (this._element.msRequestFullscreen) {
      this._element.msRequestFullscreen();
    }

    this.showMobileVideoView = true;
  }

  @action
  onFullScreenChange() {
    if (this._isFullScreen) {
      this._isFullScreen = false;
      // Reset To Default
      this.resetToDefault();
    } else {
      this._isFullScreen = true;
    }
  }

  @action
  onVideoEnded() {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen();
    }

    // Reset To Default
    this.resetToDefault();
  }

  @action
  resetToDefault() {
    this.showMobileVideoView = false;
    this.showPlayButton = true;
    this.showControls = false;
    this.videoSource = '';
    if (this._element) {
      this._element.load();
    }
  }
}
