import { helper } from '@ember/component/helper';

export default helper(function isOdd(number) {
  if (!number) {
    return false;
  }
  return !(number % 2);
});
