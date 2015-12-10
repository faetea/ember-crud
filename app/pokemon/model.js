import DS from 'ember-data';

export default DS.Model.extend({
  nationalPokeNum: DS.attr('string'),
  name: DS.attr('string'),
  typeOne: DS.attr('string'),
  typeTwo: DS.attr('string'),
  generation: DS.attr('number'),

  species: DS.attr('string'),
  height: DS.attr('number'),
  weight: DS.attr('number'),
  abilityOne: DS.attr('string'),
  abilityTwo: DS.attr('string'),
});
