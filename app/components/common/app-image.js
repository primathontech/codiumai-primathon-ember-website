import Component from '@glimmer/component';
import ENV from 'primathon-ember-web/config/environment';

export default class CommonAppImageComponent extends Component {
  isFullURL(url) {
    // Regular expression pattern to match a full URL
    const FULL_URL_PATTERN = /^(?:https?:\/\/)?(?:www\.)?\w+\.\w+/i;
    return FULL_URL_PATTERN.test(url);
  }

  get src() {
    if (this.isFullURL(this.args.src)) {
      return this.args.src;
    }
    return ENV.ASSETS_CDN_URL ? `${ENV.ASSETS_CDN_URL}${this.args.src}` : this.args.src;
  }

  get srcset() {
    try {
      const srcsetArray = this.args.srcset
        .trim()
        .split(',')
        .map((src) => {
          if (this.isFullURL(this.args.src)) {
            return this.args.src;
          }
          return ENV.ASSETS_CDN_URL ? `${ENV.ASSETS_CDN_URL}${src}` : src;
        });
      return srcsetArray.join(',');
    } catch (e) {
      return this.src;
    }
  }
}
