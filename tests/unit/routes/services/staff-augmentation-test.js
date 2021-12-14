import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | services/staff-augmentation', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:services/staff-augmentation');
    assert.ok(route);
  });
});
