import Ember from 'ember';

export default Ember.Component.extend({
  isExpanded: false,
  actions: {
    toggleExpanded: function() {
      this.toggleProperty('isExpanded');
    },
  } // end actions
}); // end ember.component.extend
