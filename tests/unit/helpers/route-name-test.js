import RouteName from 'limelight/helpers/route-name';
import { module, test } from 'qunit';

module('Unit | Helper | route name');

test('it works', function(assert) {
  const subject = RouteName.create({
    router: { currentRouteName: 'hello.world' }
  });
  const result = subject.compute();
  assert.equal(result, 'World');
});
