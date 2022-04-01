import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | careers/open-position', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:careers/open-position');
    assert.ok(route);
  });
});
