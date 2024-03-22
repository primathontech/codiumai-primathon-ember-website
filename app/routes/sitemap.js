import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import { SITEMAP } from '../constants/sitemap';

export default class SitemapRoute extends Route {
  @service headData;
  async model() {
    const sitemapData = SITEMAP;
    return { sitemapData };
  }

  beforeModel() {
    const title = 'Sitemap | Primathon Technology';

    this.headData.setData({ title });
  }
}
