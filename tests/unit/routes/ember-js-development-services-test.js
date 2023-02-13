import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | ember-js-development-services', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:ember-js-development-services');
    assert.ok(route);
  });
});
