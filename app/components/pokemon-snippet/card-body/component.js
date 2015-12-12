import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ["collapsible-body"],

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
});
