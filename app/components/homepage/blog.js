import Component from '@glimmer/component';
import { action } from '@ember/object';
import { HOME_BLOG_CARD_CLICK, HOME_VIEW_MORE_BLOG_CLICK } from '../../constants/event-name';

export default class HomepageBlogComponent extends Component {
  @action
  onBlogCardClick(blogTitle, blogLink) {
    if (window.gtag) {
      window.gtag('event', HOME_BLOG_CARD_CLICK, { blogTitle, blogLink });
    }
  }

  @action
  onViewMoreBlog() {
    if (window.gtag) {
      window.gtag('event', HOME_VIEW_MORE_BLOG_CLICK);
    }
  }
}
