import Helper from 'ember-helper';
import service from 'ember-service/inject';
import get from 'ember-metal/get';
import { capitalize } from 'ember-string';
import observer from 'ember-metal/observer';

export default Helper.extend({
  router: service('-routing'),

  compute() {
    const route = get(this, 'router.currentRouteName');
    return capitalize(route.split('.')[1]);
  },

  routeChanged: observer('router.currentRouteName', function() {
    this.recompute();
  })
});
