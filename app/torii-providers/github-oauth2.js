import GithubOauth2 from 'torii/providers/github-oauth2';

export default GithubOauth2.extend({
  fetch(data) {
    return data;
  }
});
