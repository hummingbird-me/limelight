import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('repos', function() {
    this.route('index', { path: '/' });
    this.route('new');
  });
  // Per-repo dashboard
  this.route('repos.repo', { path: '/:user/:repo' }, function() {
    this.route('dashboard', { path: '/' });
    this.route('tasks');
    this.route('issues');
    this.route('milestones');
  });
  // Per-team dashboard
  this.route('team', { path: '/:user/teams/:team' }, function() {
    this.route('dashboard', { path: '/' });
    this.route('tasks');
    this.route('issues');
    this.route('milestones');
  });
  // Per-user/org dashboard
  this.route('user', { path: '/:user' }, function() {
    this.route('dashboard', { path: '/' });
    this.route('tasks');
    this.route('issues');
    this.route('milestones');
  });
});

export default Router;
