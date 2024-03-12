import Modifier from 'ember-modifier';
import { registerDestructor } from '@ember/destroyable';
import { debounce } from '@ember/runloop';
import { cancel } from '@ember/runloop';

export default class OnResizeModifier extends Modifier {
  constructor(owner, args) {
    super(owner, args);
    registerDestructor(this, this.cleanup);
  }

  handleResize = () => {
    if (this.useDebounce) {
      this.debounce = debounce(null, this.handler, this.actualElement, this.debounceTime);
    } else {
      this.handler(this.actualElement);
    }
  };

  modify(element, [handler], { useDebounce = true, debounceTime = 200 }) {
    this.actualElement = element;
    this.handler = handler;
    this.useDebounce = useDebounce;
    this.debounceTime = debounceTime;
    this._resizeObserver = new ResizeObserver(this.handleResize);
    this._resizeObserver.observe(element);
  }

  cleanup = () => {
    this._resizeObserver.disconnect();
    if (this.debounce) {
      cancel(this.debounce);
    }
  };
}
