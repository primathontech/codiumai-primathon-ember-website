import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | services/build-and-manage', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:services/build-and-manage');
    assert.ok(route);
  });
});
