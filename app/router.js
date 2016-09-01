import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('dashboard', function() {
    this.route('index', { path: '/' });
    this.route('new');
  });

  // Per-repo dashboard
  this.route('repo', { path: '/:user/:repo' }, function() {
    this.route('dashboard', { path: '/' });
    this.route('tasks');
    this.route('issues');
    this.route('milestones');
    this.route('bugs');
    this.route('settings');
  });
});

export default Router;
