import service from 'ember-service/inject';
import { getProperties } from 'ember-metal/get';
import Torii from 'ember-simple-auth/authenticators/torii';

export default Torii.extend({
  gatekeeper: 'https://limelight-gatekeeper.herokuapp.com',

  torii: service(),
  ajax: service(),

  authenticate() {
    const { ajax, gatekeeper } = getProperties(this, 'ajax', 'gatekeeper');
    return this._super('github-oauth2').then((response) => {
      const { authorizationCode, provider } = response;
      return ajax.request(`${gatekeeper}/authenticate/${authorizationCode}`)
        .then(({ error, token }) => {
          if (error !== undefined) {
            throw new Error(error);
          }
          return { token, provider };
        });
    });
  }
});
