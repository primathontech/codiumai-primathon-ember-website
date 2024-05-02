import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class ServicesPageOptionsIndexComponent extends Component {
  @service router;

  @tracked hoverServiceRoute;

  get hoverRoute() {
    if (this.hoverServiceRoute) {
      return this.hoverServiceRoute;
    } else {
      const route = this.activeRoute;
      if (
        route === this.endToEndRoute ||
        route === this.consultingCategory ||
        route === this.staffAugmentation ||
        route === this.buildAndManage
      ) {
        return route;
      }
    }
    return this.endToEndRoute;
  }

  get activeRoute() {
    return this.router.currentRouteName;
  }

  get endToEndRoute() {
    return 'services.end-to-end-products';
  }

  get consultingCategory() {
    return 'services.ai-hub';
  }

  get staffAugmentation() {
    return 'services.staff-augmentation';
  }

  get buildAndManage() {
    return 'services.build-and-manage';
  }

  @action
  changeContent(content) {
    this.hoverServiceRoute = content;
  }

  @action
  onMouseLeave() {
    const route = this.activeRoute;
    if (
      route === this.endToEndRoute ||
      route === this.consultingCategory ||
      route === this.staffAugmentation ||
      route === this.buildAndManage
    ) {
      this.hoverServiceRoute = route;
    }
    this.hoverServiceRoute = this.endToEndRoute;
  }
}
