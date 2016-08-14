import service from 'ember-service/inject';
import BaseAuthenticator from 'ember-simple-auth/authenticators/base';

export default BaseAuthenticator.extend({
  gatekeeper: 'https://emworken-gatekeeper.herokuapp.com',
  torii: service(),
  ajax: service(),

  authenticate() {
    const torii = this.get('torii');
    const ajax = this.get('ajax');
    const gatekeeper = this.get('gatekeeper');

    return torii.open('github-oauth2').then(({authorizationCode}) => {
      return ajax.request(`${gatekeeper}/authenticate/${authorizationCode}`);
    }).then(({error, token}) => {
      if (error) { throw error; }
      return {token};
    });
  }
});
