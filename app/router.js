import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('instructions', { path: '/' });
  this.route('memorization');
  this.route('play');
  this.route('card', { path: '/play/:play_id' });
});

export default Router;
