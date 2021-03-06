import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('pokemon', function() {
    this.route('new');
  });
  this.route('items');
});

export default Router;
