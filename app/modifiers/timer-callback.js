import { modifier } from 'ember-modifier';

export default modifier(function timerCallback(element, [callback, time]) {
  let timeOut = null;
  if (element && callback) {
    timeOut = setInterval(callback, time);
  }

  return () => {
    if (timeOut) {
      clearInterval(timeOut);
    }
  };
});
