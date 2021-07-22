import { modifier } from 'ember-modifier';

export default modifier(function onWindowScroll(element, [callback]) {
  function handleClick(event) {
    if (!element.contains(event.target)) {
      callback(event);
    }
  }

  document.addEventListener('scroll', handleClick);

  return () => {
    document.removeEventListener('scroll', handleClick);
  };
});
