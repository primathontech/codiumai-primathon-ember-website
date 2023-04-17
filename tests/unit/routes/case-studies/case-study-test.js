import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | case-studies/case-study', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:case-studies/case-study');
    assert.ok(route);
  });
});
