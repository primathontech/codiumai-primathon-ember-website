import { modifier } from 'ember-modifier';

export default modifier(function timeoutCallback(element, [callback, time]) {
  let timeOut = null;
  if (element && callback) {
    timeOut = setTimeout(() => callback(element), time);
  }

  return () => {
    if (timeOut) {
      clearTimeout(timeOut);
    }
  };
});
