import Route from '@ember/routing/route';
import { REACT_DEVELOPER } from '../../../constants/services/staff-augmentation';
import { inject as service } from '@ember/service';
import { BLOG_DATA } from '../../../constants/homepage/blog';
import fetch from 'fetch';
import { TESTIMONIAL_DATA } from '../../../constants/homepage/testimonial';

export default class ServicesStaffAugmentationReactDevelopersRoute extends Route {
  @service headData;
  _HOSTNAME = '/blog';
  _PAGE_SIZE = 4;
  _CATEGORY_KEY = 158;
  _URL = `https://primathon.in/blog/wp-json/wp/v2/posts?_embed&per_page=${this._PAGE_SIZE}&categories=${this._CATEGORY_KEY}`;

  getImageUrl(data) {
    if (
      data._embedded &&
      data._embedded['wp:featuredmedia'] &&
      data._embedded['wp:featuredmedia'][0] &&
      data._embedded['wp:featuredmedia'][0].source_url
    ) {
      return data._embedded['wp:featuredmedia']['0'].source_url;
    }
  }

  async model() {
    const data = REACT_DEVELOPER;
    const testinomialData = TESTIMONIAL_DATA;
    const blogData = BLOG_DATA;
    try {
      const blogResponse = await (await fetch(this._URL)).json();
      const filteredBlogResponse = blogResponse.filter((item) => {
        return item.categories.includes(this._CATEGORY_KEY);
      });
      const slicedBlogResponse = filteredBlogResponse.slice(0, 6);
      blogData.data = slicedBlogResponse.map((item) => ({
        title: item.title?.rendered,
        link: item.link,
        blogImageUrl: this.getImageUrl(item),
        descriptionHtml: item.excerpt?.rendered,
      }));
    } catch (error) {
      console.error('Error fetching blog posts:', error);
      blogData.data = [];
    }
    return { data, testinomialData, blogData };
  }

  beforeModel() {
    const title = 'Hire React.js Developers | Dedicated & Certified React.js Programmers | Primathon';
    const description =
      'Hire React.js Developers from Primathon for tailored solutions. From bespoke to seamless integration, trust our certified experts. Get started now!';
    this.headData.setData({ title, description });
  }
}
