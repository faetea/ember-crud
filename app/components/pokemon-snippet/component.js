import Ember from 'ember';
const { computed, Component } = Ember;

export default Ember.Component.extend({
  tagName: 'ul',
  classNames: ['collapsible'],
  attributeBindings: ['data-collapsible'],
  accordion: true,

  'data-collapsible': computed(function() {
    return this.get('accordion') ? 'accordion' : 'expandable';
  }),

  didInsertElement() {
    this._super(...arguments);
    this._setupCollapsible();
  },

  _setupCollapsible() {
    const accordion = this.get('accordion');
    this.$().collapsible({ accordion });
  },

  _teardownCollapsible() {
    const $panelHeaders = this.$('> li > .collapsible-header');
    this.$().off('click.collapse', '.collapsible-header');
    $panelHeaders.off('click.collapse');
  },

  willDestroyElement() {
    this._super(...arguments);
    this._teardownCollapsible();
  },

  twoTypes: Ember.computed('pokemon.typeOne', 'pokemon.typeTwo', function(){
    return this.get('pokemon.typeTwo') && this.get('pokemon.typeTwo') !== this.get('pokemon.typeOne');
  }),
  twoAbilities: Ember.computed('pokemon.abilityOne', 'pokemon.abilityTwo', function(){
    return this.get('pokemon.abilityTwo') && this.get('pokemon.abilityTwo') !== this.get('pokemon.abilityOne');
  }),
  actions: {
    updatePokemon: function() {
      console.log('Component Action : updatePokemon');
      this.sendAction('routeUpdatePokemon');
    },
    destroyPokemon: function() {
      console.log('Component Action : destroyPokemon');
      this.sendAction('routeDestroyPokemon', this.get('pokemon'));
    }
  } // end actions
}); // end ember.component.extend
