import Component from 'ember-component';
import service from 'ember-service/inject';

export default Component.extend({
  tagName: 'button',
  classNames: ['btn btn-primary'],

  session: service(),
  torii: service(),

  click() {
    const session = this.get('session');
    session.authenticate('authenticator:github');
  }
});
