import Component from '@glimmer/component';
import ENV from 'primathon-ember-web/config/environment';

export default class CommonAppImageComponent extends Component {
  get src() {
    return ENV.ASSETS_CDN_URL ? `${ENV.ASSETS_CDN_URL}${this.args.src}` : this.args.src;
  }

  get srcset() {
    try {
      const srcsetArray = this.args.srcset
        .trim()
        .split(',')
        .map((src) => {
          return ENV.ASSETS_CDN_URL ? `${ENV.ASSETS_CDN_URL}${src}` : src;
        });
      return srcsetArray.join(',');
    } catch (e) {
      return this.src;
    }
  }
}
