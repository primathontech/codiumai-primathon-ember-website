import { helper } from '@ember/component/helper';

export default helper(function arrayContains([array, elem]) {
  if (array && elem) {
    return array.includes(elem);
  }

  return false;
});
